import { getEventBySlug } from '@/lib/actions/events'
import { EventDetail } from '@/components/shared/EventDetail'
import { auth } from '@/lib/auth/nextauth'
import { supabase } from '@/lib/db/supabase'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const event = await getEventBySlug(params.slug)
  if (!event) return { title: 'Acara Tidak Ditemukan' }

  return {
    title: `${event.title} - GenSaladin`,
    description: event.description?.slice(0, 160),
  }
}

export default async function EventDetailPage({ params }: Props) {
  const event = await getEventBySlug(params.slug)

  if (!event) {
    notFound()
  }

  // Check if user is registered
  const session = await auth()
  let isRegistered = false

  if (session?.user?.id) {
    const { data } = await supabase
      .from('event_registrations')
      .select('*')
      .eq('event_id', event.id)
      .eq('user_id', session.user.id)
      .single()

    isRegistered = !!data
  }

  return <EventDetail event={event} isRegistered={isRegistered} />
}
