'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, BookOpen, Calendar, Heart } from 'lucide-react'

export function Navbar() {
  const { data: session } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#f6f1e9]/80 backdrop-blur border-b border-[#14110f]/10">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="GenSaladin"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-wide text-[#7a1f1f]">
                GenSa
              </span>
              <span className="text-[10px] text-[#b07b3a] tracking-[0.15em] uppercase">
                Generasi Shalahuddin
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/programs" className="text-sm font-medium text-[#b07b3a] hover:text-[#7a1f1f] flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" /> Program
            </Link>
            <Link href="/events" className="text-sm font-medium text-[#b07b3a] hover:text-[#7a1f1f] flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> Agenda
            </Link>
            <Link href="/donate" className="text-sm font-medium text-[#b07b3a] hover:text-[#7a1f1f] flex items-center gap-1.5">
              <Heart className="w-4 h-4" /> Donasi
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              {session ? (
                <Link href="/dashboard"><Button variant="outline">Dashboard</Button></Link>
              ) : (
                <Link href="/login"><Button>Masuk</Button></Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[#7a1f1f] hover:bg-[#7a1f1f]/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#14110f]/10">
            <div className="flex flex-col gap-4">
              <Link
                href="/programs"
                className="text-sm font-medium text-[#b07b3a] hover:text-[#7a1f1f] py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="w-4 h-4" /> Program
              </Link>
              <Link
                href="/events"
                className="text-sm font-medium text-[#b07b3a] hover:text-[#7a1f1f] py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Calendar className="w-4 h-4" /> Agenda
              </Link>
              <Link
                href="/donate"
                className="text-sm font-medium text-[#b07b3a] hover:text-[#7a1f1f] py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart className="w-4 h-4" /> Donasi
              </Link>
              {!session && (
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full">Masuk</Button>
                </Link>
              )}
              {session && (
                <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">Dashboard</Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
