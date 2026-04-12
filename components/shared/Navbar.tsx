'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Heart } from 'lucide-react'

// FontAwesome custom SVG components to prevent new dependencies
function FaRocket({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className={className}>
      <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
    </svg>
  )
}

function FaHandshakeAngle({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className={className}>
      <path d="M544 248l0 3.3 69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5L296 64c-37.1 0-67.6 28-71.6 64l-.4 0 0 120c0 22.1 17.9 40 40 40s40-17.9 40-40l0-72c0 0 0-.1 0-.1l0-15.9 16 0 136 0c0 0 0 0 .1 0l7.9 0c44.2 0 80 35.8 80 80l0 8zM336 192l0 56c0 39.8-32.2 72-72 72s-72-32.2-72-72l0-118.6c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1l160 0c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16l2.7 0c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8l0-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"/>
    </svg>
  )
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#f6f1e9]/95 backdrop-blur-md border-b border-[#7a1f1f]/10 shadow-sm transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="GenSaladin"
                width={44}
                height={44}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black tracking-tight text-[#7a1f1f] drop-shadow-sm">
                GenSa
              </span>
              <span className="text-[10px] font-bold text-[#b07b3a] tracking-[0.2em] uppercase mt-1">
                Generasi Shalahuddin
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/programs" className="group relative px-3 py-2 rounded-lg text-[15px] font-bold text-[#4a3320] hover:text-[#7a1f1f] hover:bg-[#7a1f1f]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a1f1f]/40 transition-all duration-300 flex items-center gap-2">
              <FaRocket className="w-5 h-5 text-[#b07b3a] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#7a1f1f] transition-all duration-300" />
              <span>Program</span>
              <span className="absolute bottom-0 left-3 w-0 h-[3px] bg-gradient-to-r from-[#7a1f1f] to-[#b07b3a] rounded-full transition-all duration-300 group-hover:w-[calc(100%-24px)]"></span>
            </Link>
            <Link href="/bergabung" className="group relative px-3 py-2 rounded-lg text-[15px] font-bold text-[#4a3320] hover:text-[#7a1f1f] hover:bg-[#7a1f1f]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a1f1f]/40 transition-all duration-300 flex items-center gap-2">
              <FaHandshakeAngle className="w-[22px] h-[22px] text-[#b07b3a] group-hover:-translate-y-0.5 group-hover:text-[#7a1f1f] transition-all duration-300" />
              <span>Bergabung</span>
              <span className="absolute bottom-0 left-3 w-0 h-[3px] bg-gradient-to-r from-[#7a1f1f] to-[#b07b3a] rounded-full transition-all duration-300 group-hover:w-[calc(100%-24px)]"></span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Link href="/donate">
                <Button variant="brandMaroon" size="pill" className="px-7 py-5">
                  <Heart className="w-4 h-4 fill-white/20" /> Dukung Kami
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[#7a1f1f] bg-white shadow-sm hover:bg-[#7a1f1f]/5 rounded-xl transition-all border border-[#14110f]/10"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                {isMenuOpen ? <X className="w-5 h-5 absolute" /> : <Menu className="w-5 h-5 absolute" />}
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        <div id="mobile-nav-menu" className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[400px] opacity-100 py-4 border-t border-[#7a1f1f]/10' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col gap-2">
            <Link
              href="/programs"
              className="text-sm font-bold text-[#8c6239] hover:text-[#7a1f1f] p-3 rounded-xl hover:bg-[#7a1f1f]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a1f1f]/40 flex items-center gap-3 transition-colors group"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaRocket className="w-5 h-5 text-[#b07b3a] group-hover:text-[#7a1f1f] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" /> Program
            </Link>
            <Link
              href="/bergabung"
              className="text-sm font-bold text-[#8c6239] hover:text-[#7a1f1f] p-3 rounded-xl hover:bg-[#7a1f1f]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a1f1f]/40 flex items-center gap-3 transition-colors group"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaHandshakeAngle className="w-[22px] h-[22px] text-[#b07b3a] group-hover:text-[#7a1f1f] group-hover:-translate-y-1 transition-transform" /> Bergabung
            </Link>
            <div className="mt-4 px-1">
              <Link
                href="/donate"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="brandMaroon" className="w-full rounded-xl py-6 flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4 fill-white/20" /> Dukung Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
