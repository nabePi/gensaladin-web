import { auth } from '@/lib/auth/nextauth'
import { getUserRegistrations, getUserProgress } from '@/lib/actions/dashboard'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const session = await auth()

  if (!session?.user?.id) {
    redirect('/login')
  }

  const registrations = await getUserRegistrations(session.user.id)
  const progress = await getUserProgress(session.user.id)

  // Get upcoming events (not past)
  const upcomingEvents = registrations.filter(
    reg => new Date(reg.events.date) >= new Date()
  )

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#7a1f1f] mb-2 font-serif">
          Selamat Datang, {session.user.name}
        </h1>
        <p className="text-[#14110f]/60">
          Kelola acara Anda dan pantau progres belajar.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-[#fbf7f0] p-6 rounded-xl">
          <p className="text-sm text-[#14110f]/60">Acara Terdaftar</p>
          <p className="text-3xl font-bold text-[#7a1f1f]">{registrations.length}</p>
        </div>

        <div className="bg-[#fbf7f0] p-6 rounded-xl">
          <p className="text-sm text-[#14110f]/60">Akan Datang</p>
          <p className="text-3xl font-bold text-[#7a1f1f]">{upcomingEvents.length}</p>
        </div>

        <div className="bg-[#fbf7f0] p-6 rounded-xl">
          <p className="text-sm text-[#14110f]/60">Progres Belajar</p>
          <p className="text-3xl font-bold text-[#7a1f1f]">{progress.length} Path</p>
        </div>
      </div>

      {/* Upcoming Events */}
      <div>
        <h2 className="text-xl font-bold text-[#14110f] mb-4">Acara Akan Datang</h2>

        {upcomingEvents.length === 0 ? (
          <div className="bg-[#fbf7f0] p-8 rounded-xl text-center">
            <p className="text-[#14110f]/60 mb-4">Anda belum mendaftar acara apapun.</p>
            <Link
              href="/events"
              className="text-[#7a1f1f] font-medium hover:underline"
            >
              Jelajahi Agenda →
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {upcomingEvents.slice(0, 3).map((reg) => (
              <Link
                key={reg.id}
                href={`/events/${reg.events.slug}`}
                className="block bg-[#fbf7f0] p-4 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-[#14110f]">
                      {reg.events.title}
                    </h3>
                    <p className="text-sm text-[#14110f]/60">
                      {format(new Date(reg.events.date), 'EEEE, d MMMM yyyy', { locale: id })}
                    </p>
                  </div>
                  <span className={`
                    px-3 py-1 rounded-full text-xs font-medium
                    ${reg.status === 'registered' ? 'bg-yellow-100 text-yellow-800' : ''}
                    ${reg.status === 'confirmed' ? 'bg-green-100 text-green-800' : ''}
                  `}>
                    {reg.status === 'registered' ? 'Terdaftar' : 'Terkonfirmasi'}
                  </span>
                </div>
              </Link>
            ))}

            {upcomingEvents.length > 3 && (
              <Link
                href="/dashboard/events"
                className="block text-center text-[#7a1f1f] font-medium hover:underline py-4"
              >
                Lihat Semua Acara →
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
