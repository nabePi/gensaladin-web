import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <section className="text-center py-16">
        <p className="text-[#b07b3a] font-semibold tracking-wide uppercase text-sm mb-4">Gerakan Peradaban Berilmu</p>
        <h1 className="text-5xl md:text-6xl font-bold text-[#7a1f1f] mb-6">Learn History,<br />Repeat Victory</h1>
        <p className="text-lg text-[#14110f]/70 max-w-2xl mx-auto mb-8">Sejarah bukan dekorasi. Ia senjata: untuk membentuk karakter, menajamkan visi, dan melahirkan kemenangan yang beradab.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/programs"><Button size="lg">Mulai Belajar</Button></Link>
          <Link href="/events"><Button size="lg" variant="outline">Lihat Agenda</Button></Link>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-[#7a1f1f] text-center mb-12">Tiga Pilar Aktivitas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Pendidikan & Karakter', desc: 'Mencetak intelektual berakhlak mulia' },
            { title: 'Literasi & Dakwah Digital', desc: 'Menyebarkan ilmu secara masif' },
            { title: 'Kolaborasi & Aksi Sosial', desc: 'Membangun jaringan kebaikan' }
          ].map((pillar, i) => (
            <div key={i} className="bg-[#fbf7f0] p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">{pillar.title}</h3>
              <p className="text-[#14110f]/60 text-sm">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
