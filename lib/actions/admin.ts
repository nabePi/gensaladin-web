'use server'

import { supabaseAdmin } from '@/lib/db/supabase'
import { revalidatePath } from 'next/cache'
import { Database } from '@/lib/db/types'

type Event = Database['public']['Tables']['events']['Row']
type EventInsert = Database['public']['Tables']['events']['Insert']

// Events
export async function createEvent(data: EventInsert) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { error } = await (supabaseAdmin as any)
    .from('events')
    .insert(data)

  if (error) {
    return { success: false, error: error.message }
  }

  revalidatePath('/events')
  return { success: true }
}

export async function updateEvent(id: string, data: Partial<{
  title: string
  description: string
  date: string
  location: string
  type: string
  capacity: number
  status: string
  slug: string
}>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { error } = await (supabaseAdmin as any)
    .from('events')
    .update(data)
    .eq('id', id)

  if (error) {
    return { success: false, error: error.message }
  }

  revalidatePath('/events')
  if (data.slug) {
    revalidatePath(`/events/${data.slug}`)
  }
  return { success: true }
}

export async function deleteEvent(id: string) {
  const { error } = await supabaseAdmin
    .from('events')
    .delete()
    .eq('id', id)

  if (error) {
    return { success: false, error: error.message }
  }

  revalidatePath('/events')
  return { success: true }
}

// Get all events (including drafts)
export async function getAllEvents(): Promise<Event[]> {
  const { data, error } = await supabaseAdmin
    .from('events')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return []
  }

  return data || []
}

// Get event registrations
export async function getEventRegistrations(eventId: string) {
  const { data, error } = await supabaseAdmin
    .from('event_registrations')
    .select(`
      *,
      users (name, email)
    `)
    .eq('event_id', eventId)
    .order('registered_at', { ascending: false })

  if (error) {
    return []
  }

  return data || []
}

type ContentInsert = Database['public']['Tables']['contents']['Insert']

// Content management
export async function createContent(data: ContentInsert) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { error } = await (supabaseAdmin as any)
    .from('contents')
    .insert(data)

  if (error) {
    return { success: false, error: error.message }
  }

  revalidatePath('/')
  return { success: true }
}

export async function getAllContents() {
  const { data, error } = await supabaseAdmin
    .from('contents')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return []
  }

  return data || []
}

// Donations
export async function getAllDonations() {
  const { data, error } = await supabaseAdmin
    .from('donations')
    .select(`
      *,
      campaigns (title)
    `)
    .order('created_at', { ascending: false })

  if (error) {
    return []
  }

  return data || []
}

// Stats for dashboard
export async function getAdminStats() {
  const [
    { count: totalUsers },
    { count: totalEvents },
    { count: totalRegistrations },
    { data: donations }
  ] = await Promise.all([
    supabaseAdmin.from('users').select('*', { count: 'exact', head: true }),
    supabaseAdmin.from('events').select('*', { count: 'exact', head: true }),
    supabaseAdmin.from('event_registrations').select('*', { count: 'exact', head: true }),
    supabaseAdmin.from('donations').select('amount').eq('payment_status', 'completed')
  ])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const totalDonations = (donations as any[] | null)?.reduce((sum, d) => sum + (d.amount || 0), 0) || 0

  return {
    totalUsers: totalUsers || 0,
    totalEvents: totalEvents || 0,
    totalRegistrations: totalRegistrations || 0,
    totalDonations
  }
}
