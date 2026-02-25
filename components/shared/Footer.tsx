import Link from 'next/link'
import { Mail, Phone, BookOpen, Calendar, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#5d1414] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">GenSaladin</h3>
            <p className="text-white/70 text-sm">Belajar sejarah untuk mengulang kemenangan.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/programs" className="flex items-center gap-2 hover:text-white transition-colors">
                  <BookOpen className="w-4 h-4" /> Program
                </Link>
              </li>
              <li>
                <Link href="/events" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Calendar className="w-4 h-4" /> Agenda
                </Link>
              </li>
              <li>
                <Link href="/donate" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Heart className="w-4 h-4" /> Donasi
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white" />
                <span>info@gensaladin.id</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white" />
                <span>+62 819 4423 3210</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@gen.saladin</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
