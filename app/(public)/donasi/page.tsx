import { getActiveCampaigns } from '@/lib/actions/donations'
import { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Target, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Donasi - GenSaladin',
  description: 'Dukung program dakwah dan pendidikan Yayasan Saladin Peradaban Berilmu',
}

export default async function DonasiPage() {
  const campaigns = await getActiveCampaigns()

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-[#f6f1e9]">
      {/* Hero Section */}
      <section className="bg-[#7a1f1f] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#fbf7f0] mb-6 font-serif">
            Dukung Perjalanan Dakwah Kami
          </h1>
          <p className="text-xl text-[#e8d5b5] max-w-2xl mx-auto leading-relaxed">
            Donasi Anda akan digunakan untuk program kajian, workshop, riset sejarah Islam,
            dan pengembangan konten edukatif untuk generasi muda.
          </p>
        </div>
      </section>

      {/* Campaigns Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#14110f] mb-4 text-center font-serif">
            Program Donasi
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Pilih program yang ingin Anda dukung. Setiap kontribusi, berapapun nilainya,
            sangat berarti bagi kemajuan dakwah dan pendidikan Islam.
          </p>

          {campaigns.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-600 mb-2">
                Belum ada program donasi aktif
              </h3>
              <p className="text-gray-500">
                Silakan kembali lagi nanti untuk melihat program donasi yang tersedia.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campaigns.map((campaign) => {
                const progress = Math.min(
                  Math.round((campaign.raised_amount / campaign.target_amount) * 100),
                  100
                )

                return (
                  <Link
                    key={campaign.id}
                    href={`/donasi/${campaign.slug}`}
                    className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden group"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-[#7a1f1f] mb-3">
                        <Target className="w-5 h-5" />
                        <span className="text-sm font-medium">Program Aktif</span>
                      </div>

                      <h3 className="text-xl font-bold text-[#14110f] mb-2 group-hover:text-[#7a1f1f] transition-colors">
                        {campaign.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {campaign.description || 'Dukung program dakwah dan pendidikan kami.'}
                      </p>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Terkumpul</span>
                          <span className="font-medium text-[#7a1f1f]">{progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-[#7a1f1f] h-2 rounded-full transition-all"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-sm mt-2">
                          <span className="font-medium text-[#14110f]">
                            {formatCurrency(campaign.raised_amount)}
                          </span>
                          <span className="text-gray-500">
                            dari {formatCurrency(campaign.target_amount)}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-center gap-2 bg-[#7a1f1f] text-white py-3 rounded-lg font-medium group-hover:bg-[#5d1414] transition-colors">
                        <Heart className="w-5 h-5" />
                        Donasi Sekarang
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}

          {/* General Donation Card */}
          <div className="mt-8 bg-gradient-to-r from-[#7a1f1f] to-[#5d1414] rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center gap-2 text-[#e8d5b5] mb-3 justify-center md:justify-start">
                  <TrendingUp className="w-6 h-6" />
                  <span className="font-medium">Donasi Umum</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#fbf7f0] mb-3 font-serif">
                  Dukung Operasional Yayasan
                </h3>
                <p className="text-[#e8d5b5] leading-relaxed">
                  Donasi umum akan digunakan untuk operasional harian, pengembangan program,
                  dan kebutuhan dakwah lainnya yang tidak ter-cover oleh program spesifik.
                </p>
              </div>
              <Link
                href="/donasi/umum"
                className="bg-white text-[#7a1f1f] px-8 py-4 rounded-lg font-bold hover:bg-[#fbf7f0] transition-colors whitespace-nowrap"
              >
                Donasi Umum
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
