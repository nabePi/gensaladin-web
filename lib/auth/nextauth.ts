import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import { SupabaseAdapter } from '@auth/supabase-adapter'
import { supabaseAdmin } from '@/lib/db/supabase'

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  ],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  }),
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
        // Fetch role from users table
        const { data: userData } = await supabaseAdmin
          .from('users')
          .select('role')
          .eq('id', user.id)
          .single()
        session.user.role = userData?.role || 'member'
      }
      return session
    }
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: 'database'
  }
})
