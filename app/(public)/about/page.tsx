'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

// Solid Icon Paths (from FontAwesome 6 Free Solid)
const icons = {
  bookOpen: { viewBox: "0 0 576 512", path: "M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5l0-377.4c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8L0 454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5l0-370.3c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11L304 456c0 11.4 11.7 19.3 22.4 15.5z" },
  users: { viewBox: "0 0 640 512", path: "M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z" },
  scroll: { viewBox: "0 0 576 512", path: "M0 80l0 48c0 17.7 14.3 32 32 32l16 0 48 0 0-80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48l0 304c0 35.3 28.7 64 64 64s64-28.7 64-64l0-5.3c0-32.4 26.3-58.7 58.7-58.7L480 320l0-192c0-53-43-96-96-96L112 32zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16l-245.3 0c-14.7 0-26.7 11.9-26.7 26.7l0 5.3c0 53-43 96-96 96l176 0 96 0z" },
  handshake: { viewBox: "0 0 640 512", path: "M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8 512 128l-.7 0-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48 0 224 28.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16L0 352c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-224-80 0zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128l0 224c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-208c0-8.8-7.2-16-16-16l-80 0zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" },
  graduationCap: { viewBox: "0 0 640 512", path: "M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" },
  desktop: { viewBox: "0 0 576 512", path: "M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z" },
  book: { viewBox: "0 0 448 512", path: "M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" },
  shield: { viewBox: "0 0 512 512", path: "M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z" },
  leaf: { viewBox: "0 0 512 512", path: "M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5l88 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0-72 0s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440l0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z" },
  star: { viewBox: "0 0 576 512", path: "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" },
  heartHand: { viewBox: "0 0 576 512", path: "M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z" }
}

const FaIcon = ({ icon, className }: { icon: { viewBox: string, path: string }, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox={icon.viewBox} fill="currentColor" className={className}>
    <path d={icon.path} />
  </svg>
)

const missions = [
  { icon: icons.bookOpen, title: 'Dakwah edukatif dan inspiratif' },
  { icon: icons.users, title: 'Pembinaan generasi muda' },
  { icon: icons.scroll, title: 'Kajian dan publikasi peradaban' },
  { icon: icons.handshake, title: 'Wadah kolaborasi umat' },
  { icon: icons.graduationCap, title: 'Pelatihan dan pengembangan masyarakat' },
  { icon: icons.desktop, title: 'Peningkatan literasi digital' }
]

const coreValues = [
  { icon: icons.book, title: 'Ilmu' },
  { icon: icons.shield, title: 'Amanah' },
  { icon: icons.leaf, title: 'Adab' },
  { icon: icons.handshake, title: 'Kolaborasi' },
  { icon: icons.star, title: 'Keunggulan' },
  { icon: icons.heartHand, title: 'Kebermanfaatan' }
]

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* About Header Section */}
      <section className="relative pt-24 pb-8 md:pt-32 md:pb-10 flex items-center justify-center overflow-hidden bg-[#5d1414]">
        {/* Islamic geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* The Quote Layout */}
            <div className="relative inline-block px-4 mt-2">
              <Quote className="absolute -top-3 -left-2 md:-left-4 w-6 md:w-8 h-6 md:h-8 text-[#f4d092] opacity-30 -z-10" />
              <h1 className="font-serif text-2xl md:text-4xl font-bold italic text-white leading-relaxed md:leading-relaxed drop-shadow-lg max-w-3xl">
                &ldquo;<span className="text-[#f4d092]">Berangkat dari ilmu,</span> <br className="hidden md:block" />
                bergerak dengan iman, <br className="hidden lg:block" />
                <span className="text-[#f4d092]">bertumbuh </span> melalui kolaborasi.&rdquo;
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-32 bg-[#fbf7f0] relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#7a1f1f] mb-8">
              Tentang Yayasan
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[#b07b3a] to-transparent mx-auto mb-10 rounded-full opacity-80" />
            <p className="text-[#14110f]/75 text-xl md:text-2xl leading-relaxed font-medium">
              Yayasan ini hadir untuk berkontribusi dalam dakwah Islam, pendidikan karakter, dan pelestarian
              nilai-nilai peradaban Islam yang berlandaskan ilmu pengetahuan dan digerakkan oleh semangat generasi muda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-[#5d1414]">
        {/* Background Overlay Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">

            {/* Visi Statement - Sticky Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 lg:sticky top-32"
            >
              <p className="text-[#f4d092] font-bold tracking-widest uppercase text-sm mb-4">Visi Utama</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Menjadi mahjar <br /> peradaban Islam.
              </h2>

              <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#b07b3a]/20 to-transparent rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-700" />
                <Quote className="w-12 h-12 text-[#b07b3a] mb-6 opacity-60" />
                <p className="font-serif text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
                  "Menjadi mahjar yang berkontribusi dalam pengembangan dakwah Islam, pendidikan karakter, dan pelestarian nilai-nilai peradaban Islam yang berlandaskan ilmu pengetahuan serta digerakkan oleh semangat generasi muda."
                </p>
              </div>
            </motion.div>

            {/* Misi List - Right Column */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-10 lg:mb-12">
                <p className="text-[#f4d092] font-bold tracking-widest uppercase text-sm mb-3">Misi Kami</p>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
                  Langkah Nyata GenSaladin
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#b07b3a] to-transparent rounded-full opacity-60" />
              </div>

              <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mt-4 lg:mt-0">
                {missions.map((misi, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-3xl group hover:bg-white/10 hover:border-[#b07b3a]/40 transition-all duration-500 shadow-lg hover:shadow-[0_8px_30px_rgba(176,123,58,0.15)]"
                  >
                    <div className="w-16 h-16 rounded-[1.2rem] bg-[#b07b3a]/10 flex items-center justify-center mb-8 border border-[#b07b3a]/20 group-hover:bg-[#b07b3a]/20 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
                      <FaIcon icon={misi.icon} className="w-7 h-7 text-[#f4d092]" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white/90 leading-snug group-hover:text-white transition-colors">
                      {misi.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Nilai Inti Section */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 md:mb-24"
          >
            <p className="text-[#b07b3a] font-bold tracking-widest uppercase text-sm mb-3">6 Pilar Kebersamaan</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#7a1f1f] mb-6">
              Nilai Inti
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#b07b3a] to-transparent mx-auto rounded-full" />
          </motion.div>

          {/* Dynamic 6-item Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-20">
            {coreValues.map((nilai, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group cursor-default"
              >
                {/* Icon Container with elegant hover interactions */}
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] md:rounded-[2.5rem] bg-[#fbf7f0] flex items-center justify-center mb-6 shadow-sm border border-[#14110f]/5 group-hover:bg-gradient-to-br group-hover:from-[#7a1f1f] group-hover:to-[#5d1414] group-hover:border-transparent transition-all duration-500 relative overflow-hidden group-hover:shadow-[0_15px_35px_rgba(93,20,20,0.2)]">

                  {/* Subtle inner ring that scales up on hover */}
                  <div className="absolute inset-0 bg-[#b07b3a] opacity-0 group-hover:opacity-10 scale-50 group-hover:scale-100 rounded-full transition-all duration-700 ease-out" />

                  <FaIcon
                    icon={nilai.icon}
                    className="w-10 h-10 md:w-12 md:h-12 text-[#b07b3a] group-hover:text-[#f4d092] group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 relative z-10"
                  />
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#14110f] group-hover:text-[#7a1f1f] transition-colors">
                  {nilai.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
