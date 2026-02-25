import { getAllEvents } from '@/lib/actions/admin'
import Link from 'next/link'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'

export default async function AdminEventsPage() {
  const events = await getAllEvents()

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#14110f]">Kelola Acara</h1>

        <Link
          href="/admin/events/new"
          className="px-4 py-2 bg-[#7a1f1f] text-white rounded-lg hover:bg-[#5d1414]"
        >
          + Buat Acara
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Judul</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tanggal</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pendaftar</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {events.map((event) => (
              <tr key={event.id}>
                <td className="px-6 py-4">
                  <div className="font-medium text-[#14110f]">{event.title}</div>
                  <div className="text-sm text-gray-500">{event.location}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {format(new Date(event.date), 'd MMM yyyy', { locale: id })}
                </td>
                <td className="px-6 py-4 text-sm">
                  {event.registered_count} / {event.capacity}
                </td>
                <td className="px-6 py-4">
                  <span className={`
                    px-2 py-1 text-xs rounded-full
                    ${event.status === 'published' ? 'bg-green-100 text-green-800' : ''}
                    ${event.status === 'draft' ? 'bg-gray-100 text-gray-800' : ''}
                    ${event.status === 'cancelled' ? 'bg-red-100 text-red-800' : ''}
                  `}>
                    {event.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Link
                    href={`/admin/events/${event.id}`}
                    className="text-[#7a1f1f] hover:underline text-sm"
                  >
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
