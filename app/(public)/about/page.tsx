import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tentang - GenSaladin',
  description: 'Tentang Yayasan Saladin Peradaban Berilmu',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f6f1e9] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#7a1f1f] mb-6 font-serif">
          Tentang Kami
        </h1>
        <p className="text-xl text-[#14110f]/70">
          Halaman ini sedang dalam pengembangan.
        </p>
      </div>
    </div>
  )
}
