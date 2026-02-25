import { getAdminStats } from '@/lib/actions/admin'
import Link from 'next/link'

export default async function AdminDashboardPage() {
  const stats = await getAdminStats()

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-[#14110f]">Dashboard Admin</h1>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Link href="/admin/events">
          <div className="bg-[#fbf7f0] p-6 rounded-xl hover:shadow-md transition-shadow">
            <p className="text-sm text-[#14110f]/60">Total Acara</p>
            <p className="text-3xl font-bold text-[#7a1f1f]">{stats.totalEvents}</p>
          </div>
        </Link>

        <Link href="/admin/donations">
          <div className="bg-[#fbf7f0] p-6 rounded-xl hover:shadow-md transition-shadow">
            <p className="text-sm text-[#14110f]/60">Total Donasi</p>
            <p className="text-3xl font-bold text-[#7a1f1f]">
              Rp {(stats.totalDonations / 1000000).toFixed(1)}jt
            </p>
          </div>
        </Link>

        <div className="bg-[#fbf7f0] p-6 rounded-xl">
          <p className="text-sm text-[#14110f]/60">Pendaftaran</p>
          <p className="text-3xl font-bold text-[#7a1f1f]">{stats.totalRegistrations}</p>
        </div>

        <div className="bg-[#fbf7f0] p-6 rounded-xl">
          <p className="text-sm text-[#14110f]/60">Pengguna</p>
          <p className="text-3xl font-bold text-[#7a1f1f]">{stats.totalUsers}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold text-[#14110f] mb-4">Aksi Cepat</h2>
        <div className="flex gap-4">
          <Link
            href="/admin/events/new"
            className="px-6 py-3 bg-[#7a1f1f] text-white rounded-lg hover:bg-[#5d1414] transition-colors"
          >
            + Buat Acara Baru
          </Link>

          <Link
            href="/admin/contents/new"
            className="px-6 py-3 bg-[#fbf7f0] text-[#14110f] rounded-lg hover:bg-[#f6f1e9] transition-colors"
          >
            + Buat Konten Baru
          </Link>
        </div>
      </div>
    </div>
  )
}
