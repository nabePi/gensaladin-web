'use server'

import { supabase } from '@/lib/db/supabase'

interface Event {
  id: string
  title: string
  slug: string
  date: string
  location: string
  type: string
  registered_count: number
  capacity: number
  status: string
  description: string
  image_url: string | null
}

export async function getEvents(): Promise<Event[]> {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('status', 'published')
    .gte('date', new Date().toISOString())
    .order('date', { ascending: true })

  if (error) {
    console.error('Error fetching events:', error)
    return []
  }

  return (data as Event[]) || []
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (error) {
    console.error('Error fetching event:', error)
    return null
  }

  return data as Event | null
}
