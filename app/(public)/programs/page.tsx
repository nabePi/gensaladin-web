import { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Handshake,
  Heart,
  Monitor,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Program Kami - GenSaladin',
  description: 'Tiga pilar program GenSaladin: Pendidikan & Karakter, Literasi & Dakwah Digital, serta Kolaborasi & Aksi Sosial.',
}

type ProgramStatus = 'Berjalan' | 'Segera Hadir'

interface ProgramItem {
  title: string
  status: ProgramStatus
  beneficiaries: string
  output: string
  participation: string
}

interface Pillar {
  id: string
  title: string
  subtitle: string
  description: string
  icon: typeof GraduationCap
  items: ProgramItem[]
}

const pillars: Pillar[] = [
  {
    id: 'Pilar 1',
    title: 'Pendidikan & Karakter',
    subtitle: 'Membentuk insan berilmu dan berakhlak',
    description:
      'Program pembinaan ilmu dan karakter untuk memperkuat fondasi generasi muda melalui pembelajaran yang relevan dan berkelanjutan.',
    icon: GraduationCap,
    items: [
      {
        title: 'Kajian non-formal',
        status: 'Berjalan',
        beneficiaries: 'Pelajar, mahasiswa, dan masyarakat umum yang ingin memperdalam wawasan Islam.',
        output: 'Majelis kajian rutin tematik dengan materi terstruktur dan komunitas belajar aktif.',
        participation: 'Ikuti jadwal kajian di kanal resmi GenSaladin lalu daftar pada sesi terdekat.',
      },
      {
        title: 'Seminar dan workshop',
        status: 'Berjalan',
        beneficiaries: 'Pemuda, pendidik, serta komunitas yang membutuhkan peningkatan kapasitas.',
        output: 'Kelas praktis dan seminar peningkatan kompetensi dengan narasumber berpengalaman.',
        participation: 'Daftar melalui halaman event dan pilih tema seminar/workshop yang sesuai kebutuhan.',
      },
      {
        title: 'Pengembangan modul / buku ajar',
        status: 'Segera Hadir',
        beneficiaries: 'Mentor komunitas, fasilitator kajian, dan peserta program pembinaan.',
        output: 'Modul pembelajaran bertahap dan bahan ajar yang dapat digunakan lintas komunitas.',
        participation: 'Gabung sebagai reviewer konten atau relawan penyusun materi melalui tim program.',
      },
      {
        title: 'Pembinaan komunitas pemuda',
        status: 'Berjalan',
        beneficiaries: 'Komunitas pemuda di kampus, sekolah, dan lingkungan masyarakat.',
        output: 'Kelompok binaan dengan agenda mentoring, diskusi, dan penguatan kepemimpinan.',
        participation: 'Daftarkan komunitas Anda untuk dibina atau ajukan kolaborasi pembinaan wilayah.',
      },
    ],
  },
  {
    id: 'Pilar 2',
    title: 'Literasi & Dakwah Digital',
    subtitle: 'Memperluas dampak dakwah melalui media digital',
    description:
      'Ekosistem konten dan platform digital untuk menjangkau audiens lebih luas dengan materi edukasi Islam yang relevan, ringkas, dan mendalam.',
    icon: Monitor,
    items: [
      {
        title: 'Produksi konten multi-platform',
        status: 'Berjalan',
        beneficiaries: 'Generasi muda pengguna media sosial dan publik yang mencari konten edukatif.',
        output: 'Konten dakwah dan edukasi rutin dalam format artikel, carousel, short video, dan infografik.',
        participation: 'Ikut sebagai kontributor ide, penulis, desainer, atau editor konten.',
      },
      {
        title: 'Podcast / video edukasi',
        status: 'Berjalan',
        beneficiaries: 'Audiens digital yang lebih nyaman belajar melalui format audio-visual.',
        output: 'Episode diskusi tematik dan serial video edukasi yang mudah diakses kapan saja.',
        participation: 'Ajukan topik, jadi volunteer produksi, atau bantu distribusi episode ke komunitas.',
      },
      {
        title: 'Platform edukasi digital',
        status: 'Segera Hadir',
        beneficiaries: 'Peserta pembinaan yang membutuhkan jalur belajar mandiri dan terarah.',
        output: 'Portal pembelajaran digital berisi materi, kurikulum, dan progres belajar peserta.',
        participation: 'Daftar sebagai early user dan bantu uji coba pengalaman belajar digital.',
      },
      {
        title: 'Arsip digital tokoh dan peristiwa peradaban Islam',
        status: 'Segera Hadir',
        beneficiaries: 'Pelajar, peneliti pemula, dan publik yang ingin rujukan sejarah Islam terpercaya.',
        output: 'Basis data referensi tokoh/peristiwa dengan ringkasan terstruktur dan mudah ditelusuri.',
        participation: 'Dukung riset, kurasi referensi, atau kontribusi data arsip sesuai bidang keahlian.',
      },
    ],
  },
  {
    id: 'Pilar 3',
    title: 'Kolaborasi & Aksi Sosial',
    subtitle: 'Membangun dampak sosial yang nyata dan berkelanjutan',
    description:
      'Program kolaboratif lintas komunitas untuk menghadirkan solusi nyata bagi kebutuhan masyarakat melalui kemitraan, bantuan sosial, dan pembinaan.',
    icon: Handshake,
    items: [
      {
        title: 'Kemitraan strategis',
        status: 'Berjalan',
        beneficiaries: 'Lembaga pendidikan, komunitas dakwah, dan organisasi sosial mitra.',
        output: 'Program kolaboratif lintas lembaga dengan target capaian dan peran yang jelas.',
        participation: 'Ajukan kerja sama institusi untuk program pendidikan, media, atau sosial.',
      },
      {
        title: 'Program sosial dan kemanusiaan',
        status: 'Berjalan',
        beneficiaries: 'Masyarakat rentan yang membutuhkan dukungan pada situasi prioritas.',
        output: 'Aksi bantuan terukur, distribusi dukungan, serta laporan penyaluran program sosial.',
        participation: 'Terlibat sebagai relawan lapangan atau donatur dalam kampanye kemanusiaan.',
      },
      {
        title: 'Beasiswa / santunan',
        status: 'Segera Hadir',
        beneficiaries: 'Pelajar berpotensi dan keluarga yang membutuhkan dukungan pendidikan.',
        output: 'Skema dukungan pendidikan berbasis seleksi kebutuhan dan pembinaan berkala.',
        participation: 'Daftar sebagai penerima, sponsor beasiswa, atau mitra verifikasi lapangan.',
      },
      {
        title: 'Pembinaan komunitas',
        status: 'Berjalan',
        beneficiaries: 'Komunitas lokal yang ingin bertumbuh secara organisasi dan dampak sosial.',
        output: 'Pendampingan komunitas dalam manajemen program, kaderisasi, dan keberlanjutan.',
        participation: 'Daftarkan komunitas untuk program pendampingan dan coaching rutin.',
      },
    ],
  },
]

const statusClasses: Record<ProgramStatus, string> = {
  Berjalan: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  'Segera Hadir': 'bg-amber-100 text-amber-800 border-amber-200',
}

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-[#f6f1e9]">
      <section className="bg-[#7a1f1f] py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 text-[#f4d092] font-bold tracking-widest uppercase text-xs mb-5">
            <Sparkles className="w-4 h-4" />
            Program Kami
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#fbf7f0] leading-tight mb-6">
            Program Kami
          </h1>
          <p className="text-lg md:text-xl text-[#e8d5b5] leading-relaxed max-w-4xl mx-auto">
            Tiga pilar gerakan yang dirancang untuk membentuk insan berilmu, memperluas dakwah digital,
            dan membangun dampak sosial yang nyata.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <article
                key={pillar.id}
                className="bg-[#fbf7f0] border border-[#14110f]/5 rounded-2xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#7a1f1f]/10 text-[#7a1f1f] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-xs font-bold tracking-widest uppercase text-[#b07b3a] mb-2">{pillar.id}</p>
                <h2 className="font-serif text-2xl font-bold text-[#7a1f1f] mb-2">{pillar.title}</h2>
                <p className="text-[#14110f]/70 mb-3 font-medium">{pillar.subtitle}</p>
                <p className="text-[#14110f]/70 leading-relaxed">{pillar.description}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto space-y-14">
          {pillars.map((pillar) => (
            <section key={pillar.id} className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#b07b3a]/15 text-[#7a1f1f] flex items-center justify-center shrink-0 mt-1">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold tracking-widest uppercase text-[#b07b3a]">{pillar.id}</p>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#7a1f1f]">{pillar.title}</h3>
                  <p className="text-[#14110f]/70 mt-2 max-w-3xl">{pillar.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {pillar.items.map((item) => (
                  <article
                    key={item.title}
                    className="bg-white border border-[#14110f]/10 rounded-2xl p-6 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h4 className="font-serif text-xl font-bold text-[#14110f]">{item.title}</h4>
                      <span
                        className={`inline-flex whitespace-nowrap px-3 py-1 rounded-full text-xs font-bold border ${statusClasses[item.status]}`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <div className="space-y-4 text-sm md:text-base">
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-[#b07b3a] shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-[#14110f]">Penerima manfaat</p>
                          <p className="text-[#14110f]/70 leading-relaxed">{item.beneficiaries}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-[#b07b3a] shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-[#14110f]">Output nyata</p>
                          <p className="text-[#14110f]/70 leading-relaxed">{item.output}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-[#b07b3a] shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-[#14110f]">Cara ikut serta</p>
                          <p className="text-[#14110f]/70 leading-relaxed">{item.participation}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#7a1f1f] to-[#5d1414] rounded-3xl p-8 md:p-12 text-white">
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">Siap Terlibat dalam Gerakan Ini?</h3>
          <p className="text-white/85 text-lg leading-relaxed mb-8 max-w-3xl">
            Anda bisa bergabung sebagai peserta, relawan, mitra kolaborasi, maupun donatur untuk memperkuat
            dampak program di setiap pilar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#b07b3a] to-[#d5a25a] text-white font-bold px-6 py-3 rounded-full hover:from-[#95652e] hover:to-[#b07b3a] transition-all duration-300"
            >
              <BookOpen className="w-5 h-5" />
              Lihat Event Terdekat
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 border border-white/40 bg-white/10 text-white font-bold px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <Heart className="w-5 h-5" />
              Dukung Program
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
