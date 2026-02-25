import { auth } from '@/lib/auth/nextauth'
import { getUserRegistrations } from '@/lib/actions/dashboard'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'

export default async function UserEventsPage() {
  const session = await auth()

  if (!session?.user?.id) {
    redirect('/login')
  }

  const registrations = await getUserRegistrations(session.user.id)

  const upcoming = registrations.filter(
    reg => new Date(reg.events.date) >= new Date()
  )
  const past = registrations.filter(
    reg => new Date(reg.events.date) < new Date()
  )

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-[#7a1f1f] font-serif">Acara Saya</h1>

      {/* Upcoming */}
      <section>
        <h2 className="text-lg font-semibold text-[#14110f] mb-4">Akan Datang</h2>

        {upcoming.length === 0 ? (
          <p className="text-[#14110f]/60">Tidak ada acara yang akan datang.</p>
        ) : (
          <div className="space-y-4">
            {upcoming.map((reg) => (
              <Link
                key={reg.id}
                href={`/events/${reg.events.slug}`}
                className="block bg-[#fbf7f0] p-4 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{reg.events.title}</h3>
                    <p className="text-sm text-[#14110f]/60">
                      {format(new Date(reg.events.date), 'EEEE, d MMMM yyyy', { locale: id })}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-green-600">
                    {reg.status === 'registered' ? 'Terdaftar' : 'Terkonfirmasi'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Past */}
      <section>
        <h2 className="text-lg font-semibold text-[#14110f] mb-4">Riwayat</h2>

        {past.length === 0 ? (
          <p className="text-[#14110f]/60">Belum ada riwayat acara.</p>
        ) : (
          <div className="space-y-4 opacity-70">
            {past.map((reg) => (
              <div
                key={reg.id}
                className="block bg-[#fbf7f0] p-4 rounded-xl"
              >
                <h3 className="font-semibold">{reg.events.title}</h3>
                <p className="text-sm text-[#14110f]/60">
                  {format(new Date(reg.events.date), 'EEEE, d MMMM yyyy', { locale: id })}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
