'use server'

import { supabase } from '@/lib/db/supabase'
import { Database } from '@/lib/db/types'

type RegistrationWithEvent = Database['public']['Tables']['event_registrations']['Row'] & {
  events: Database['public']['Tables']['events']['Row']
}

export async function getUserRegistrations(userId: string): Promise<RegistrationWithEvent[]> {
  const { data, error } = await supabase
    .from('event_registrations')
    .select(`
      *,
      events (*)
    `)
    .eq('user_id', userId)
    .order('registered_at', { ascending: false })

  if (error) {
    console.error('Error fetching registrations:', error)
    return []
  }

  return (data || []) as RegistrationWithEvent[]
}

export async function getUserProgress(userId: string) {
  const { data, error } = await supabase
    .from('user_progress')
    .select(`
      *,
      learning_paths (*)
    `)
    .eq('user_id', userId)

  if (error) {
    console.error('Error fetching progress:', error)
    return []
  }

  return data || []
}

export async function updateProfile(userId: string, data: { name: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { error } = await (supabase as any)
    .from('users')
    .update({ name: data.name })
    .eq('id', userId)

  if (error) {
    return { success: false, error: error.message }
  }

  return { success: true }
}
