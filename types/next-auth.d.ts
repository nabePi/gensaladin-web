import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      role: 'admin' | 'member' | 'volunteer'
      email: string
      name?: string | null
      image?: string | null
    }
  }

  interface User {
    role?: 'admin' | 'member' | 'volunteer'
  }
}
