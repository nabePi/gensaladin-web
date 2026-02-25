'use server'

import { supabase, supabaseAdmin } from '@/lib/db/supabase'
import { createTransaction, generateOrderId, getTransactionStatus, mapMidtransStatus } from '@/lib/payment/midtrans'
import { sendDonationConfirmation } from '@/lib/email/resend'
import { revalidatePath } from 'next/cache'

interface CreateDonationParams {
  campaignId: string | null
  donorName: string
  donorEmail: string
  amount: number
  message?: string
  userId?: string | null
}

export async function createDonation({
  campaignId,
  donorName,
  donorEmail,
  amount,
  message,
  userId,
}: CreateDonationParams) {
  try {
    const orderId = generateOrderId()

    // Create donation record in database
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data: donation, error: dbError } = await (supabaseAdmin as any)
      .from('donations')
      .insert({
        order_id: orderId,
        campaign_id: campaignId,
        user_id: userId || null,
        donor_name: donorName,
        donor_email: donorEmail,
        amount,
        message: message || null,
        payment_status: 'pending',
      })
      .select()
      .single()

    if (dbError) {
      console.error('Database error:', dbError)
      return { success: false, error: 'Failed to create donation record' }
    }

    // Get campaign name
    let campaignName = 'Umum'
    if (campaignId) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data: campaign } = await (supabase as any)
        .from('campaigns')
        .select('title')
        .eq('id', campaignId)
        .single()
      if (campaign) {
        campaignName = campaign.title
      }
    }

    // Create Midtrans transaction
    const transaction = await createTransaction({
      orderId,
      amount,
      itemName: `Donasi ${campaignName}`,
      customerName: donorName,
      donorEmail,
    })

    if (!transaction.success) {
      // Update donation status to failed
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (supabaseAdmin as any)
        .from('donations')
        .update({ payment_status: 'failed' })
        .eq('order_id', orderId)

      return { success: false, error: transaction.error }
    }

    // Update donation with payment token
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (supabaseAdmin as any)
      .from('donations')
      .update({ payment_token: transaction.token })
      .eq('order_id', orderId)

    return {
      success: true,
      token: transaction.token,
      redirectUrl: transaction.redirectUrl,
      orderId,
    }
  } catch (error) {
    console.error('Create donation error:', error)
    return { success: false, error: 'Terjadi kesalahan. Silakan coba lagi.' }
  }
}

export async function checkDonationStatus(orderId: string) {
  try {
    // Get current status from Midtrans
    const status = await getTransactionStatus(orderId)

    if (!status.success) {
      return { success: false, error: status.error }
    }

    const paymentStatus = mapMidtransStatus(status.status)

    // Update database
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data: donation } = await (supabaseAdmin as any)
      .from('donations')
      .update({
        payment_status: paymentStatus,
        payment_method: status.paymentType,
        paid_at: paymentStatus === 'completed' ? new Date().toISOString() : null,
      })
      .eq('order_id', orderId)
      .select('*, campaigns(title)')
      .single()

    // If payment completed, update campaign raised amount and send email
    if (paymentStatus === 'completed' && donation) {
      // Update campaign raised amount
      if (donation.campaign_id) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        await (supabaseAdmin as any)
          .rpc('increment_campaign_raised', {
            p_campaign_id: donation.campaign_id,
            p_amount: donation.amount,
          })
      }

      // Send confirmation email
      await sendDonationConfirmation(
        donation.donor_email,
        donation.donor_name,
        donation.amount,
        donation.campaigns?.title || 'Umum',
        orderId
      )

      revalidatePath('/')
      revalidatePath('/donasi')
    }

    return {
      success: true,
      status: paymentStatus,
      donation,
    }
  } catch (error) {
    console.error('Check donation status error:', error)
    return { success: false, error: 'Failed to check status' }
  }
}

export async function getActiveCampaigns() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, error } = await (supabase as any)
    .from('campaigns')
    .select('*')
    .eq('status', 'active')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching campaigns:', error)
    return []
  }

  return data || []
}

export async function getCampaignBySlug(slug: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, error } = await (supabase as any)
    .from('campaigns')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    return null
  }

  return data
}
