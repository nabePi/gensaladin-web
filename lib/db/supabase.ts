import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { Database } from './types'

// Lazy initialization of Supabase clients
let supabaseClient: SupabaseClient<Database> | null = null
let supabaseAdminClient: SupabaseClient<Database> | null = null

// Check if we're in build/static generation context
const isBuildTime = process.env.NODE_ENV === 'production' && typeof window === 'undefined'

export function getSupabaseClient(): SupabaseClient<Database> {
  if (!supabaseClient) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      // During build time, return a dummy client that will fail gracefully
      if (isBuildTime) {
        console.warn('Supabase credentials not available during build, creating placeholder client')
        // Create a client with placeholder values - it won't be used for real queries
        supabaseClient = createClient<Database>('https://placeholder.supabase.co', 'placeholder-key')
        return supabaseClient
      }
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
      // During build time, return a dummy client that will fail gracefully
      if (isBuildTime) {
        console.warn('Supabase service role key not available during build, creating placeholder admin client')
        // Create a client with placeholder values - it won't be used for real queries
        supabaseAdminClient = createClient<Database>('https://placeholder.supabase.co', 'placeholder-service-key')
        return supabaseAdminClient
      }
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
