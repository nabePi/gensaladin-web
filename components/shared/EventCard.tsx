import Link from 'next/link'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import { Button } from '@/components/ui/button'

interface Event {
  id: string
  title: string
  slug: string
  date: string
  location: string
  registered_count: number
  capacity: number
}

export function EventCard({ event }: { event: Event }) {
  const isFull = event.registered_count >= event.capacity
  const eventDate = new Date(event.date)

  return (
    <div className="bg-[#fbf7f0] rounded-lg p-6 shadow-sm flex gap-4">
      <div className="flex-shrink-0 w-16 h-16 bg-[#7a1f1f] text-white rounded-lg flex flex-col items-center justify-center">
        <span className="text-xl font-bold">{format(eventDate, 'd')}</span>
        <span className="text-xs uppercase">{format(eventDate, 'MMM')}</span>
      </div>
      <div className="flex-grow">
        <h3 className="font-bold text-lg mb-1">{event.title}</h3>
        <p className="text-sm text-[#14110f]/60 mb-2">{event.location}</p>
        <p className="text-xs text-[#14110f]/40 mb-3">{event.registered_count} / {event.capacity} terdaftar</p>
        <Link href={`/events/${event.slug}`}><Button size="sm" disabled={isFull}>{isFull ? 'Penuh' : 'Detail'}</Button></Link>
      </div>
    </div>
  )
}
