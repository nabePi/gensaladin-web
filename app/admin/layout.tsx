import { auth } from '@/lib/auth/nextauth'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session?.user?.role || session.user.role !== 'admin') {
    redirect('/dashboard')
  }

  return (
    <>
      <header className="bg-[#7a1f1f] text-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/admin" className="font-bold text-lg">Admin Dashboard</Link>
            <nav className="flex gap-6">
              <Link href="/admin/events" className="hover:text-[#fbf7f0]">Acara</Link>
              <Link href="/admin/events" className="hover:text-[#fbf7f0]">Konten</Link>
              <Link href="/admin/events" className="hover:text-[#fbf7f0]">Donasi</Link>
              <Link href="/" className="hover:text-[#fbf7f0]">← Kembali ke Situs</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
    </>
  )
}
