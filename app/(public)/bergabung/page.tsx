import { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  Lightbulb,
  Network,
  PenTool,
  Users,
  CheckCircle2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bergabung - GenSaladin',
  description: 'Mari menjadi bagian dari gerakan GenSaladin melalui peran strategis di bidang pendidikan, konten digital, dan penggerak komunitas.',
}

const talents = [
  {
    title: 'Pendidik & Peneliti',
    description:
      'Merancang kurikulum, menyusun modul, dan melakukan kajian sejarah serta peradaban Islam.',
    icon: BookOpen,
  },
  {
    title: 'Kreator & Storyteller Digital',
    description:
      'Membuat video, podcast, desain, dan media sosial yang menginspirasi.',
    icon: PenTool,
  },
  {
    title: 'Organisator & Penggerak Komunitas',
    description:
      'Mengelola kolaborasi, event, kemitraan, dan program lapangan.',
    icon: Users,
  },
]

const benefits = [
  {
    title: 'Dampak nyata dan bersejarah',
    icon: Lightbulb,
  },
  {
    title: 'Pengembangan diri tanpa batas',
    icon: ArrowRight,
  },
  {
    title: 'Jaringan bermakna',
    icon: Network,
  },
  {
    title: 'Lingkungan kolaboratif dan inovatif',
    icon: CheckCircle2,
  },
]

const steps = [
  'Pelajari peran yang tersedia',
  'Isi formulir / ceritakan tentang dirimu',
  'Tim kami akan menghubungi',
]

export default function BergabungPage() {
  return (
    <div className="min-h-screen bg-[#f6f1e9]">
      <section className="bg-[#7a1f1f] py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 text-[#f4d092] font-bold tracking-widest uppercase text-xs mb-5">
            Bergabung
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#fbf7f0] leading-tight mb-6">
            Mari Menjadi Bagian dari Sejarah
          </h1>
          <p className="text-lg md:text-xl text-[#e8d5b5] leading-relaxed max-w-3xl mx-auto">
            Ini bukan sekadar perekrutan, ini ajakan untuk tumbuh bersama dalam gerakan ilmu,
            dakwah, dan aksi nyata bagi umat.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#7a1f1f] text-center mb-4">
            Siapa yang Kami Cari
          </h2>
          <p className="text-[#14110f]/70 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            Kami membuka ruang bagi individu yang ingin memberi kontribusi nyata sesuai kapasitas dan
            minatnya.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {talents.map((talent) => (
              <article
                key={talent.title}
                className="bg-white border border-[#14110f]/10 rounded-2xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#7a1f1f]/10 text-[#7a1f1f] flex items-center justify-center mb-4">
                  <talent.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#14110f] mb-3">{talent.title}</h3>
                <p className="text-[#14110f]/70 leading-relaxed">{talent.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#fbf7f0] border-y border-[#14110f]/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#7a1f1f] text-center mb-10">
            Mengapa Bergabung
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white border border-[#14110f]/10 rounded-xl p-5 flex items-start gap-3"
              >
                <benefit.icon className="w-5 h-5 text-[#b07b3a] shrink-0 mt-0.5" />
                <p className="text-[#14110f]/80 font-medium leading-relaxed">{benefit.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#7a1f1f] text-center mb-10">
            Mekanisme Bergabung
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <article
                key={step}
                className="bg-white border border-[#14110f]/10 rounded-2xl p-6 shadow-sm"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#7a1f1f] text-white font-bold mb-4">
                  {index + 1}
                </span>
                <p className="text-[#14110f]/80 leading-relaxed font-medium">{step}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#7a1f1f] to-[#5d1414] rounded-3xl p-8 md:p-10 text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#fbf7f0] mb-4">
              Siap Ambil Peran dalam Gerakan Ini?
            </h3>
            <p className="text-[#e8d5b5] max-w-2xl mx-auto mb-8 leading-relaxed">
              Ceritakan minat, pengalaman, dan kontribusi terbaikmu untuk misi GenSaladin.
            </p>
            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#b07b3a] to-[#d5a25a] text-white font-bold px-7 py-3 rounded-full hover:from-[#95652e] hover:to-[#b07b3a] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#7a1f1f]"
            >
              Isi Formulir Bergabung
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
