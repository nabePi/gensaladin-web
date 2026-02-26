import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { Database } from './types'

// Lazy initialization of Supabase clients
let supabaseClient: SupabaseClient<Database> | null = null
let supabaseAdminClient: SupabaseClient<Database> | null = null

export function getSupabaseClient(): SupabaseClient<Database> {
  if (!supabaseClient) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase URL and Anon Key are required')
    }

    supabaseClient = createClient<Database>(supabaseUrl, supabaseKey)
  }
  return supabaseClient
}

export function getSupabaseAdmin(): SupabaseClient<Database> {
  if (!supabaseAdminClient) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !serviceRoleKey) {
      throw new Error('Supabase URL and Service Role Key are required')
    }

    supabaseAdminClient = createClient<Database>(supabaseUrl, serviceRoleKey)
  }
  return supabaseAdminClient
}

// Backward compatibility - lazy loaded
export const supabase = new Proxy({} as SupabaseClient<Database>, {
  get(_target, prop) {
    const client = getSupabaseClient()
    return client[prop as keyof SupabaseClient<Database>]
  }
})

export const supabaseAdmin = new Proxy({} as SupabaseClient<Database>, {
  get(_target, prop) {
    const client = getSupabaseAdmin()
    return client[prop as keyof SupabaseClient<Database>]
  }
})
