import { Navbar } from '@/components/shared/Navbar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-1">
            <nav className="space-y-2">
              <a
                href="/dashboard"
                className="block px-4 py-2 rounded-lg hover:bg-[#fbf7f0] text-[#14110f]"
              >
                Dashboard
              </a>
              <a
                href="/dashboard/events"
                className="block px-4 py-2 rounded-lg hover:bg-[#fbf7f0] text-[#14110f]"
              >
                Acara Saya
              </a>
              <a
                href="/dashboard/progress"
                className="block px-4 py-2 rounded-lg hover:bg-[#fbf7f0] text-[#14110f]"
              >
                Progres Belajar
              </a>
              <a
                href="/dashboard/profile"
                className="block px-4 py-2 rounded-lg hover:bg-[#fbf7f0] text-[#14110f]"
              >
                Profil
              </a>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="md:col-span-3">{children}</main>
        </div>
      </div>
    </>
  )
}
