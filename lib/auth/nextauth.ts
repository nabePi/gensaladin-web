import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import { SupabaseAdapter } from '@auth/supabase-adapter'
import { supabaseAdmin } from '@/lib/db/supabase'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const hasSupabaseAdapterConfig = Boolean(supabaseUrl && supabaseServiceRoleKey)

if (!hasSupabaseAdapterConfig) {
  console.warn('[auth] Supabase adapter disabled: missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
}

const adapter = hasSupabaseAdapterConfig
  ? SupabaseAdapter({
      url: supabaseUrl!,
      secret: supabaseServiceRoleKey!,
    })
  : undefined

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  ],
  adapter,
  callbacks: {
    async session({ session, user, token }) {
      if (!session.user) {
        return session
      }

      const userId = user?.id || token?.sub
      if (userId) {
        session.user.id = userId
      }

      if (!hasSupabaseAdapterConfig || !userId) {
        session.user.role = 'member'
        return session
      }

      const { data: userData } = await supabaseAdmin
        .from('users')
        .select('role')
        .eq('id', userId)
        .single()

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      session.user.role = (userData as any)?.role || 'member'
      return session
    }
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: hasSupabaseAdapterConfig ? 'database' : 'jwt'
  }
})
