import EventForm from '@/components/admin/EventForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buat Acara Baru - Admin GenSaladin',
}

export default function NewEventPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#14110f]">Buat Acara Baru</h1>
      <EventForm />
    </div>
  )
}
