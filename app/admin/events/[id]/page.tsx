import EventForm from '@/components/admin/EventForm'
import { getAllEvents } from '@/lib/actions/admin'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const events = await getAllEvents()
  const event = events.find(e => e.id === params.id)

  return {
    title: event ? `Edit ${event.title} - Admin GenSaladin` : 'Edit Acara - Admin GenSaladin',
  }
}

export default async function EditEventPage({ params }: Props) {
  const events = await getAllEvents()
  const event = events.find(e => e.id === params.id)

  if (!event) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#14110f]">Edit Acara</h1>
        <p className="text-gray-600">{event.title}</p>
      </div>
      <EventForm event={event} />
    </div>
  )
}
