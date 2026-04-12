'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
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
  ChevronRight,
  ChevronDown
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
    description: 'Program terstruktur untuk mencetak intelektual berakhlak mulia dan berwawasan luas.',
    icon: GraduationCap,
    color: 'from-[#7a1f1f] to-[#9a2f2f]',
    image: '/images/pilar-education.png'
  },
  {
    number: '02',
    title: 'Literasi & Dakwah Digital',
    description: 'Pemanfaatan teknologi untuk menyebarkan ilmu pengetahuan dan nilai-nilai Islam secara relevan dan menjangkau lebih luas.',
    icon: Monitor,
    color: 'from-[#b07b3a] to-[#d5a25a]',
    image: '/images/pilar-digital.jpeg'
  },
  {
    number: '03',
    title: 'Kolaborasi & Aksi Sosial',
    description: 'Membangun jaringan kebaikan dan menghadirkan dampak nyata di tengah masyarakat.',
    icon: Handshake,
    color: 'from-[#5d1414] to-[#7a1f1f]',
    image: '/images/pilar-kolaborasi.png'
  }
]

// Team data
const team = [
  {
    name: 'Edgar Hamas',
    role: 'Pendiri Yayasan',
    description: 'Visioner di balik terbentuknya GenSaladin dengan komitmen membentuk generasi berkarakter',
    image: '/images/edgar-hamas.png'
  },
  {
    name: 'Amar Ar-Risalah',
    role: 'Narasumber',
    description: 'Pembawa wacana keislaman yang mendalam dengan pendekatan yang menggugah dan inspiratif',
    image: '/images/amar-ar-risalah.jpeg'
  },
  {
    name: 'Umar El-Rozy',
    role: 'Digital Advisor',
    description: 'Mengarahkan strategi digital untuk menjangkau lebih banyak generasi muda secara efektif',
    image: '/images/umar-el-rozy.png'
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
      {/* Hero Section - With Al-Quds background image */}
      <section className="relative h-[calc(100vh-5rem)] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpeg"
            alt="Al-Quds"
            fill
            className="object-cover"
            priority
            quality={95}
            sizes="100vw"
          />
          {/* Multi-layer overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#7a1f1f]/65 via-[#5d1414]/55 to-[#5d1414]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#b07b3a]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#b07b3a]/10 rounded-full blur-3xl" />

        {/* Islamic geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center -translate-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main heading */}
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-[1.2] drop-shadow-2xl">
              Membangun Kembali
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b07b3a] to-[#f4d092] drop-shadow-lg">
                Peradaban Berilmu
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed font-medium drop-shadow-md">
              Yayasan yang berfokus pada dakwah edukatif, pembinaan generasi muda, dan pengembangan peradaban Islam berbasis ilmu, karakter, dan aksi nyata.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="/programs">
                <Button
                  size="pillLg"
                  variant="brandGold"
                  className="h-auto px-8 py-4"
                >
                  Mulai Belajar
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="pillLg"
                  variant="glassLight"
                  className="h-auto px-8 py-4"
                >
                  Tentang Kami
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Highly Visible Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 cursor-pointer flex flex-col items-center gap-2 group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="relative flex items-center justify-center mt-1">
            {/* Pulsing ring to attract eye */}
            <div className="absolute inset-0 bg-[#b07b3a] rounded-full animate-ping opacity-30 duration-1000" />

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-14 h-14 rounded-full bg-[#b07b3a]/20 backdrop-blur-md flex items-center justify-center border-2 border-[#b07b3a]/60 group-hover:bg-[#b07b3a]/40 group-hover:scale-110 transition-all shadow-[0_0_25px_rgba(176,123,58,0.6)] group-hover:shadow-[0_0_35px_rgba(244,208,146,0.9)] relative z-10"
            >
              <ChevronDown className="w-8 h-8 text-[#f4d092]" />
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f6f1e9] to-transparent" />
      </section>

      {/* Three Pillars Section - With Images */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#7a1f1f] mb-4">
              Tiga Pilar Aktivitas
            </h2>
            <p className="text-[#14110f]/60 max-w-2xl mx-auto">
              Tiga pilar utama yang menjadi landasan setiap aktivitas dan program GenSaladin
            </p>
          </motion.div>

          <div className="space-y-16">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Visual side with Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    {/* Image container */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={pillar.image}
                          alt={pillar.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-60 mix-blend-multiply`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>

                      {/* Content overlay */}
                      <div className="absolute inset-0 p-8 flex flex-col justify-between">
                        {/* Number */}
                        <span className="text-7xl font-bold text-white/20">
                          {pillar.number}
                        </span>

                        {/* Bottom content */}
                        <div>
                          <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                            <pillar.icon className="w-7 h-7 text-white" />
                          </div>
                          <p className="text-white/70 text-sm mb-1">Pilar {pillar.number}</p>
                          <h3 className="font-serif text-2xl font-bold text-white">
                            {pillar.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#b07b3a]/30 rounded-3xl -z-10" />
                  </div>
                </div>

                {/* Content side */}
                <div className="w-full lg:w-1/2">
                  <div className="bg-[#fbf7f0] p-8 md:p-10 rounded-2xl border border-[#14110f]/5">
                    <h3 className="font-serif text-2xl font-bold text-[#7a1f1f] mb-4">
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

      {/* Call to Action Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7a1f1f] to-[#5d1414]" />

        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/dome-of-rock.png"
            alt=""
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#7a1f1f]/90 to-[#5d1414]/95" />
        </div>

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

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* The Quote Area */}
            <div className="relative mb-10 mt-4 inline-block">
              <Quote className="absolute -top-4 -left-6 w-10 h-10 text-[#f4d092] opacity-30 -z-10" />
              <h2 className="font-serif text-3xl md:text-5xl font-bold italic text-white leading-tight tracking-wide drop-shadow-xl">
                &ldquo;<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4d092] to-[#b07b3a]">Learn History,</span>
                <span className="block mt-2">Repeat Victory.&rdquo;</span>
              </h2>
            </div>
            
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#b07b3a] to-transparent mx-auto rounded-full mb-10 opacity-50" />

            <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Bergabung dengan Gerakan
            </h3>
            
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              Bersama-sama kita bangun generasi yang kokoh berkarakter,
              dalam ilmunya, dan inspiratif. Jadilah bagian dari pembangun peradaban.
            </p>

            {/* Focus CTA Button */}
            <div className="flex justify-center mb-6">
              <Link href="/bergabung">
                <Button
                  size="lg"
                  className="h-auto bg-gradient-to-r from-[#b07b3a] to-[#d5a25a] hover:from-[#95652e] hover:to-[#b07b3a] text-white px-10 py-5 text-xl font-bold rounded-full shadow-[0_0_20px_rgba(176,123,58,0.5)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(176,123,58,0.7)] hover:-translate-y-1"
                >
                  Bergabung Sekarang
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
