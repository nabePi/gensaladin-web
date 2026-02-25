'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const { data: session } = useSession()

  return (
    <header className="sticky top-0 z-50 bg-[#f6f1e9]/80 backdrop-blur border-b border-[#14110f]/10">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-[#7a1f1f]">
            <span className="w-8 h-8 bg-gradient-to-br from-[#7a1f1f] to-[#5d1414] rounded-lg" />
            GENSALADIN.ID
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/about" className="text-sm font-medium hover:text-[#7a1f1f]">Tentang</Link>
            <Link href="/programs" className="text-sm font-medium hover:text-[#7a1f1f]">Program</Link>
            <Link href="/events" className="text-sm font-medium hover:text-[#7a1f1f]">Agenda</Link>
            <Link href="/donate" className="text-sm font-medium hover:text-[#7a1f1f]">Donasi</Link>
          </div>

          <div>
            {session ? (
              <Link href="/dashboard"><Button variant="outline">Dashboard</Button></Link>
            ) : (
              <Link href="/login"><Button>Masuk</Button></Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
