'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  BookOpen,
  Users,
  Scroll,
  Handshake,
  GraduationCap,
  Monitor,
  ArrowRight,
  Quote,
  Sparkles,
  Target,
  Heart,
  Shield,
  FileText,
  Mail,
  Phone,
  ChevronRight
} from 'lucide-react'
import { motion } from 'framer-motion'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Mission data
const missions = [
  {
    icon: BookOpen,
    title: 'Dakwah Edukatif & Inspiratif',
    description: 'Menyampaikan nilai-nilai Islam dengan pendekatan yang menginspirasi generasi muda'
  },
  {
    icon: Users,
    title: 'Pembinaan Generasi Muda',
    description: 'Membentuk karakter pemuda yang kokoh berlandaskan ilmu dan akhlak'
  },
  {
    icon: Scroll,
    title: 'Kajian & Publikasi Peradaban',
    description: 'Menggali dan menyebarluaskan khazanah peradaban Islam yang gemilang'
  },
  {
    icon: Handshake,
    title: 'Wadah Kolaborasi Umat',
    description: 'Menjadi jembatan silaturahmi dan kerja sama untuk kemajuan bersama'
  },
  {
    icon: GraduationCap,
    title: 'Pelatihan & Pengembangan',
    description: 'Memberdayakan masyarakat melalui program pengembangan kapasitas'
  },
  {
    icon: Monitor,
    title: 'Peningkatan Literasi Digital',
    description: 'Memanfaatkan teknologi untuk penyebaran ilmu yang masif dan bermakna'
  }
]

// Pillars data
const pillars = [
  {
    number: '01',
    title: 'Pendidikan & Karakter',
    description: 'Mencetak intelektual muslim yang tidak hanya cerdas secara akademis, tetapi juga memiliki akhlak mulia dan kepemimpinan yang berintegritas.',
    icon: GraduationCap,
    color: 'from-[#7a1f1f] to-[#9a2f2f]'
  },
  {
    number: '02',
    title: 'Literasi & Dakwah Digital',
    description: 'Memanfaatkan kekuatan digital untuk menyebarkan ilmu dan nilai-nilai keislaman secara masif, kreatif, dan relevan dengan zaman.',
    icon: Monitor,
    color: 'from-[#b07b3a] to-[#d5a25a]'
  },
  {
    number: '03',
    title: 'Kolaborasi & Aksi Sosial',
    description: 'Membangun jaringan kebaikan melalui kerja sama strategis dan aksi nyata yang memberikan dampak positif bagi masyarakat.',
    icon: Handshake,
    color: 'from-[#5d1414] to-[#7a1f1f]'
  }
]

// Team data
const team = [
  {
    initials: 'EH',
    name: 'Edgar Hamas',
    role: 'Pendiri Yayasan',
    description: 'Visioner di balik terbentuknya GenSaladin dengan komitmen membentuk generasi berkarakter'
  },
  {
    initials: 'AA',
    name: 'Amar Ar-Risalah',
    role: 'Narasumber',
    description: 'Pembawa wacana keislaman yang mendalam dengan pendekatan yang menggugah dan inspiratif'
  },
  {
    initials: 'UE',
    name: 'Umar El-Rozy',
    role: 'Digital Advisor',
    description: 'Mengarahkan strategi digital untuk menjangkau lebih banyak generasi muda secara efektif'
  }
]

// Stats data
const stats = [
  { value: '50+', label: 'Kegiatan Terlaksana', icon: Sparkles },
  { value: '1000+', label: 'Anggota Komunitas', icon: Users },
  { value: 'Rp 500jt+', label: 'Dana Terkumpul', icon: Heart }
]

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Warm gradient with organic shapes */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f6f1e9] via-[#fbf7f0] to-[#f6f1e9]" />

        {/* Decorative organic shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#7a1f1f]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#b07b3a]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#7a1f1f]/3 to-[#b07b3a]/5 rounded-full blur-3xl" />

        {/* Islamic geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0z' fill='%237a1f1f' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tagline badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7a1f1f]/10 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-[#b07b3a]" />
              <span className="text-sm font-medium text-[#7a1f1f] tracking-wide">
                Yayasan Saladin Peradaban Berilmu
              </span>
            </div>

            {/* Main heading */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-[#7a1f1f] mb-6 leading-[1.1]">
              Learn History,
              <br />
              <span className="text-[#b07b3a]">Repeat Victory</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-[#14110f]/70 max-w-2xl mx-auto mb-4 font-medium">
              Gerakan Peradaban Berilmu
            </p>

            <p className="text-base md:text-lg text-[#14110f]/60 max-w-xl mx-auto mb-10 leading-relaxed">
              Sejarah bukan dekorasi. Ia senjata: untuk membentuk karakter,
              menajamkan visi, dan melahirkan kemenangan yang beradab.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-[#7a1f1f] hover:bg-[#5d1414] text-white px-8 py-6 text-base rounded-full shadow-lg shadow-[#7a1f1f]/20 transition-all hover:shadow-xl hover:shadow-[#7a1f1f]/30 hover:-translate-y-0.5"
                >
                  Pelajari Kami
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/programs">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#7a1f1f]/30 text-[#7a1f1f] hover:bg-[#7a1f1f]/5 px-8 py-6 text-base rounded-full transition-all hover:border-[#7a1f1f]/50"
                >
                  Mulai Belajar
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#7a1f1f]/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[#7a1f1f]/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#b07b3a]/10 rounded-full mb-6">
                <Target className="w-4 h-4 text-[#b07b3a]" />
                <span className="text-sm font-medium text-[#b07b3a]">Siapa Kami?</span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#7a1f1f] mb-6 leading-tight">
                Membangun Generasi yang Kokoh Berkarakter
              </h2>

              <div className="space-y-6 text-[#14110f]/70 leading-relaxed">
                <p className="text-lg">
                  Bayangkan sebuah generasi muda yang kokoh karakternya, dalam ilmunya,
                  dan terinspirasi oleh nilai-nilai peradaban Islam.
                </p>
                <p>
                  GenSaladin hadir sebagai wadah pembinaan yang berkomitmen membentuk
                  pemuda-pemudi Indonesia menjadi individu yang tidak hanya cerdas secara
                  akademis, tetapi juga memiliki fondasi spiritual dan moral yang kuat.
                </p>
              </div>

              {/* Legal badge */}
              <div className="mt-8 p-4 bg-[#fbf7f0] rounded-xl border border-[#7a1f1f]/10">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#7a1f1f] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[#7a1f1f]">Yayasan Resmi</p>
                    <p className="text-sm text-[#14110f]/60">
                      AHU-0024132.AH.01.04.TAHUN 2025
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right content - Problem statement */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Quote card */}
              <div className="relative bg-[#7a1f1f] text-white p-8 md:p-10 rounded-2xl shadow-2xl">
                <Quote className="absolute top-6 left-6 w-10 h-10 text-white/20" />

                <div className="relative z-10 pt-6">
                  <p className="text-xl md:text-2xl font-serif italic leading-relaxed mb-6">
                    &ldquo;Mereka melek gadget, tapi buta sejarah; aktif di media sosial, tapi rapuh secara nilai.&rdquo;
                  </p>

                  <div className="h-px bg-white/20 mb-6" />

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#b07b3a] rounded-full" />
                      <p className="text-white/80 text-sm">61% literasi sejarah rendah di kalangan pemuda</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#b07b3a] rounded-full" />
                      <p className="text-white/80 text-sm">Generasi tanpa fondasi nilai dan identitas</p>
                    </div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#b07b3a]/20 rounded-tl-full" />
              </div>

              {/* Floating stat */}
              <div className="absolute -bottom-6 -left-6 bg-[#fbf7f0] p-4 rounded-xl shadow-lg border border-[#14110f]/5">
                <p className="text-3xl font-bold text-[#7a1f1f]">2025</p>
                <p className="text-sm text-[#14110f]/60">Tahun Berdiri</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24 md:py-32 bg-[#fbf7f0] relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%237a1f1f' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[#7a1f1f]/10 text-[#7a1f1f] text-sm font-medium rounded-full mb-4">
              Misi Kami
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#7a1f1f] mb-4">
              Enam Pilar Gerakan
            </h2>
            <p className="text-[#14110f]/60 max-w-2xl mx-auto">
              Membangun peradaban berilmu melalui pendekatan yang komprehensif dan berkelanjutan
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {missions.map((mission, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-[#f6f1e9] p-8 rounded-2xl border border-[#14110f]/5 hover:border-[#7a1f1f]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#7a1f1f]/5 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#7a1f1f] to-[#5d1414] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <mission.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#7a1f1f] mb-3">
                  {mission.title}
                </h3>
                <p className="text-[#14110f]/60 text-sm leading-relaxed">
                  {mission.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Three Pillars Section - Enhanced */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[#b07b3a]/10 text-[#b07b3a] text-sm font-medium rounded-full mb-4">
              Tiga Pilar
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#7a1f1f] mb-4">
              Fondasi Peradaban
            </h2>
            <p className="text-[#14110f]/60 max-w-2xl mx-auto">
              Tiga pilar utama yang menjadi landasan setiap aktivitas dan program GenSaladin
            </p>
          </motion.div>

          <div className="space-y-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Visual side */}
                <div className="w-full lg:w-2/5">
                  <div className={`relative bg-gradient-to-br ${pillar.color} p-8 rounded-3xl text-white overflow-hidden min-h-[280px] flex flex-col justify-between`}>
                    {/* Large number */}
                    <span className="text-8xl font-bold opacity-20 absolute top-4 right-4">
                      {pillar.number}
                    </span>

                    {/* Icon */}
                    <div className="relative z-10 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <pillar.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title on card */}
                    <div className="relative z-10">
                      <p className="text-white/70 text-sm mb-1">Pilar {pillar.number}</p>
                      <h3 className="font-serif text-2xl font-bold">{pillar.title}</h3>
                    </div>

                    {/* Decorative circles */}
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full" />
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full" />
                  </div>
                </div>

                {/* Content side */}
                <div className="w-full lg:w-3/5">
                  <div className="bg-[#fbf7f0] p-8 rounded-2xl border border-[#14110f]/5">
                    <h3 className="font-serif text-2xl font-bold text-[#7a1f1f] mb-4 lg:hidden">
                      {pillar.title}
                    </h3>
                    <p className="text-[#14110f]/70 text-lg leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                    <Link
                      href="/programs"
                      className="inline-flex items-center gap-2 text-[#b07b3a] font-medium hover:text-[#7a1f1f] transition-colors group"
                    >
                      <span>Pelajari program terkait</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-24 md:py-32 bg-[#fbf7f0] relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[#7a1f1f]/10 text-[#7a1f1f] text-sm font-medium rounded-full mb-4">
              Tim Kami
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#7a1f1f] mb-4">
              Kenali Penggerak
            </h2>
            <p className="text-[#14110f]/60 max-w-2xl mx-auto">
              Individu-individu yang berdedikasi membentuk generasi berkarakter
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group text-center"
              >
                {/* Avatar */}
                <div className="relative mx-auto w-32 h-32 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7a1f1f] to-[#b07b3a] rounded-full opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="absolute inset-1 bg-[#f6f1e9] rounded-full flex items-center justify-center">
                    <span className="font-serif text-3xl font-bold text-[#7a1f1f]">
                      {member.initials}
                    </span>
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#b07b3a]/30 group-hover:rotate-180 transition-transform duration-700" />
                </div>

                {/* Info */}
                <h3 className="font-serif text-xl font-bold text-[#7a1f1f] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#b07b3a] text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-[#14110f]/60 text-sm max-w-xs mx-auto">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact & Transparency Section */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-[#b07b3a]/10 text-[#b07b3a] text-sm font-medium rounded-full mb-4">
                Dampak & Transparansi
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#7a1f1f] mb-6">
                Setiap Langkah Tercatat
              </h2>
              <p className="text-[#14110f]/70 leading-relaxed mb-10">
                Kami berkomitmen untuk transparan dalam setiap aktivitas dan penggunaan
                sumber daya. Kepercayaan Anda adalah amanah yang kami jaga dengan penuh
                tanggung jawab.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-[#fbf7f0] rounded-xl">
                    <stat.icon className="w-6 h-6 text-[#b07b3a] mx-auto mb-2" />
                    <p className="text-2xl md:text-3xl font-bold text-[#7a1f1f]">{stat.value}</p>
                    <p className="text-xs text-[#14110f]/60 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Transparency card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-[#7a1f1f] text-white p-8 md:p-10 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-[#b07b3a]" />
                  <h3 className="font-serif text-2xl font-bold">Transparansi</h3>
                </div>

                <p className="text-white/80 mb-8 leading-relaxed">
                  Lihat laporan lengkap tentang aktivitas, keuangan, dan perkembangan
                  program GenSaladin. Kami percaya bahwa transparansi adalah kunci
                  kepercayaan dan keberlanjutan.
                </p>

                <div className="space-y-4">
                  <Link
                    href="/transparency"
                    className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group"
                  >
                    <span className="font-medium">Laporan Keuangan</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/transparency"
                    className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group"
                  >
                    <span className="font-medium">Dokumentasi Kegiatan</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/transparency"
                    className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group"
                  >
                    <span className="font-medium">Statistik Program</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7a1f1f] to-[#5d1414]" />

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#b07b3a]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#b07b3a]/5 rounded-full blur-3xl" />
        </div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Bergabung dengan Gerakan
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Bersama-sama kita bangun generasi yang kokoh berkarakter,
              dalam ilmunya, dan inspiratif.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-white text-[#7a1f1f] hover:bg-[#fbf7f0] px-8 py-6 text-base rounded-full shadow-xl transition-all hover:shadow-2xl hover:-translate-y-0.5"
                >
                  Daftar Sekarang
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/donate">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base rounded-full transition-all"
                >
                  Dukung Kami
                </Button>
              </Link>
            </div>

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/70">
              <a
                href="mailto:info@gensaladin.id"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@gensaladin.id</span>
              </a>
              <span className="hidden sm:block">|</span>
              <a
                href="tel:+6281944233210"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+62 819 4423 3210</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
