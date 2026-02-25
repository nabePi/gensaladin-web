import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#5d1414] text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">GenSaladin</h3>
            <p className="text-white/70 text-sm">Belajar sejarah untuk mengulang kemenangan.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/programs">Program</Link></li>
              <li><Link href="/events">Agenda</Link></li>
              <li><Link href="/donate">Donasi</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>info@gensaladin.id</li>
              <li>+62 819 4423 3210</li>
              <li>@gen.saladin</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
