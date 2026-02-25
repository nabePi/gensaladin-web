'use server'

import { supabase } from '@/lib/db/supabase'

export async function getUserRegistrations(userId: string) {
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

  return data || []
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
  const { error } = await supabase
    .from('users')
    .update({ name: data.name })
    .eq('id', userId)

  if (error) {
    return { success: false, error: error.message }
  }

  return { success: true }
}
