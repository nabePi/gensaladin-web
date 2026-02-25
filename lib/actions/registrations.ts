'use server'

import { supabase, supabaseAdmin } from '@/lib/db/supabase'
import { revalidatePath } from 'next/cache'

export async function registerForEvent(eventId: string, userId: string) {
  try {
    // Call the database function for atomic registration
    const { data, error } = await supabaseAdmin
      .rpc('register_for_event', {
        p_event_id: eventId,
        p_user_id: userId
      })

    if (error) {
      console.error('Registration error:', error)
      return { success: false, error: error.message }
    }

    // Revalidate the event page to update count
    revalidatePath('/events/[slug]')

    return { success: true, data }
  } catch (error) {
    console.error('Unexpected error:', error)
    return { success: false, error: 'Terjadi kesalahan. Silakan coba lagi.' }
  }
}

export async function checkRegistrationStatus(eventId: string, userId: string) {
  const { data, error } = await supabase
    .from('event_registrations')
    .select('*')
    .eq('event_id', eventId)
    .eq('user_id', userId)
    .single()

  if (error || !data) {
    return null
  }

  return data
}

export async function cancelRegistration(eventId: string, userId: string) {
  const { error } = await supabase
    .from('event_registrations')
    .update({ status: 'cancelled' })
    .eq('event_id', eventId)
    .eq('user_id', userId)

  if (error) {
    return { success: false, error: error.message }
  }

  // Decrement event count
  await supabaseAdmin
    .rpc('decrement_event_count', { p_event_id: eventId })

  revalidatePath('/events/[slug]')
  return { success: true }
}
