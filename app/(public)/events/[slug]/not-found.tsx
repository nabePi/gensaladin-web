import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function EventNotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-[#7a1f1f] mb-4 font-serif">
        Acara Tidak Ditemukan
      </h1>
      <p className="text-[#14110f]/60 mb-8">
        Maaf, acara yang Anda cari tidak tersedia atau telah dihapus.
      </p>

      <Link href="/events">
        <Button>Lihat Agenda Lainnya</Button>
      </Link>
    </div>
  )
}
