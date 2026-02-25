import { getEvents } from '@/lib/actions/events'
import { EventCard } from '@/components/shared/EventCard'

export default async function EventsPage() {
  const events = await getEvents()

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#7a1f1f] mb-4">Agenda Terdekat</h1>
      <p className="text-[#14110f]/60 mb-8">Offline/online. Fokus: isi, latihan, dan komunitas yang rapi.</p>

      {events.length === 0 ? (
        <p className="text-center text-[#14110f]/40 py-12">Belum ada agenda. Kembali lagi nanti!</p>
      ) : (
        <div className="space-y-4">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  )
}
