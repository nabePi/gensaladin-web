import { getActiveCampaigns } from '@/lib/actions/donations'
import { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  HandHeart,
  Heart,
  Megaphone,
  ShieldCheck,
  Store,
  Target,
  TrendingUp,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dukung Kami - GenSaladin',
  description: 'Ambil peran nyata membangun generasi pembawa peradaban melalui dukungan produk, fundraising terarah, dan transparansi penyaluran.',
}

interface Campaign {
  id: string
  slug: string
  title: string
  description: string | null
  raised_amount: number
  target_amount: number
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

  const totalTarget = campaigns.reduce((sum: number, campaign: Campaign) => sum + campaign.target_amount, 0)
  const totalRaised = campaigns.reduce((sum: number, campaign: Campaign) => sum + campaign.raised_amount, 0)
  const overallProgress =
    totalTarget > 0 ? Math.min(Math.round((totalRaised / totalTarget) * 100), 100) : 0
  const remainingTarget = Math.max(totalTarget - totalRaised, 0)
  const campaignCount = campaigns.length

  return (
    <div className="min-h-screen bg-[#f6f1e9]">
      <section className="bg-[#7a1f1f] py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 text-[#f4d092] font-bold tracking-widest uppercase text-xs mb-5">
            Dukung Kami
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#fbf7f0] leading-tight mb-6">
            Dukung Lahirnya Generasi Pembawa Peradaban
          </h1>
          <p className="text-lg md:text-xl text-[#e8d5b5] leading-relaxed max-w-3xl mx-auto">
            Setiap kontribusi Anda menggerakkan dampak nyata. Pilih jalur dukungan yang paling
            sesuai, lalu ikut menumbuhkan gerakan ilmu, dakwah, dan aksi sosial yang berkelanjutan.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#7a1f1f] text-center mb-4">
            Dua Jalur Dukungan
          </h2>
          <p className="text-[#14110f]/70 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            Dukung misi ini lewat pembelian produk bernilai atau percepat dampak melalui
            fundraising untuk program-program prioritas.
          </p>

          <div className="grid lg:grid-cols-2 gap-6">
            <article className="bg-gradient-to-br from-white to-[#fbf7f0] border border-[#14110f]/10 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between gap-4 mb-4">
                <p className="text-sm font-bold text-[#7a1f1f]">A. Store</p>
                <span className="text-xs font-semibold bg-[#b07b3a]/15 text-[#7a1f1f] px-3 py-1 rounded-full">
                  Produk • Edukasi • Dakwah
                </span>
              </div>

              <div className="w-12 h-12 rounded-xl bg-[#7a1f1f]/10 text-[#7a1f1f] flex items-center justify-center mb-4">
                <Store className="w-6 h-6" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#14110f] mb-3">Belanja yang bernilai dukungan</h3>
              <p className="text-[#14110f]/70 leading-relaxed mb-5">
                Setiap pembelian bukan sekadar transaksi, tetapi kontribusi langsung untuk memperkuat
                gerakan pendidikan, dakwah, dan pembinaan.
              </p>

              <div className="space-y-3 mb-6">
                <p className="text-sm font-semibold text-[#7a1f1f]">Yang bisa Anda dapatkan:</p>
                <ul className="space-y-2 text-[#14110f]/80 leading-relaxed">
                  <li className="flex items-start gap-2"><BookOpen className="w-4 h-4 text-[#b07b3a] mt-1 shrink-0" /> buku</li>
                  <li className="flex items-start gap-2"><Store className="w-4 h-4 text-[#b07b3a] mt-1 shrink-0" /> merchandise</li>
                  <li className="flex items-start gap-2"><GraduationCap className="w-4 h-4 text-[#b07b3a] mt-1 shrink-0" /> modul</li>
                  <li className="flex items-start gap-2"><Megaphone className="w-4 h-4 text-[#b07b3a] mt-1 shrink-0" /> poster / print</li>
                  <li className="flex items-start gap-2"><HandHeart className="w-4 h-4 text-[#b07b3a] mt-1 shrink-0" /> produk kampanye</li>
                </ul>
              </div>

              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#b07b3a] to-[#d5a25a] hover:from-[#95652e] hover:to-[#b07b3a] text-white px-6 py-3 font-bold rounded-full transition-all duration-300 hover:-translate-y-0.5"
              >
                Kunjungi Store
                <ArrowRight className="w-4 h-4" />
              </Link>
            </article>

            <article className="bg-gradient-to-br from-white to-[#fbf7f0] border border-[#14110f]/10 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between gap-4 mb-4">
                <p className="text-sm font-bold text-[#7a1f1f]">B. Fundraising</p>
                <span className="text-xs font-semibold bg-[#7a1f1f]/10 text-[#7a1f1f] px-3 py-1 rounded-full">
                  Transparan & Terukur
                </span>
              </div>

              <div className="w-12 h-12 rounded-xl bg-[#7a1f1f]/10 text-[#7a1f1f] flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#14110f] mb-3">Perkuat program prioritas</h3>
              <p className="text-[#14110f]/70 leading-relaxed mb-6">
                Dukungan Anda mempercepat program prioritas agar dampaknya lebih luas dan
                berkelanjutan. Detail target, capaian, dan penyaluran kami sajikan terbuka
                di bagian Transparansi.
              </p>

              <div className="space-y-3 mb-6">
                <p className="text-sm font-semibold text-[#7a1f1f]">Fokus dukungan:</p>
                <ul className="space-y-2 text-[#14110f]/80 leading-relaxed">
                  <li className="flex items-start gap-2"><HandHeart className="w-4 h-4 text-[#b07b3a] mt-1 shrink-0" /> dukung operasional program</li>
                  <li className="flex items-start gap-2"><Megaphone className="w-4 h-4 text-[#b07b3a] mt-1 shrink-0" /> dukung produksi konten dakwah</li>
                  <li className="flex items-start gap-2"><GraduationCap className="w-4 h-4 text-[#b07b3a] mt-1 shrink-0" /> dukung pendidikan dan pembinaan</li>
                  <li className="flex items-start gap-2"><ShieldCheck className="w-4 h-4 text-[#b07b3a] mt-1 shrink-0" /> dukung program sosial</li>
                </ul>
              </div>

              <Link
                href="#transparansi"
                className="inline-flex items-center justify-center gap-2 bg-[#7a1f1f] text-white px-6 py-3 font-bold rounded-full hover:bg-[#5d1414] transition-all duration-300 hover:-translate-y-0.5"
              >
                Dukung Sekarang
                <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section id="transparansi" className="py-16 px-4 bg-[#fbf7f0] border-y border-[#14110f]/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#7a1f1f] text-center mb-4">
            Transparansi Dukungan
          </h2>
          <p className="text-[#14110f]/70 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            Kami membuka angka dukungan secara berkala agar Anda bisa memantau capaian,
            kebutuhan tersisa, dan perkembangan penyaluran dengan jelas.
          </p>

          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            <article className="bg-white border border-[#14110f]/10 rounded-2xl p-6 shadow-sm lg:col-span-1">
              <div className="flex items-center gap-2 text-[#7a1f1f] mb-4">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="font-bold text-lg">Alokasi dana</h3>
              </div>
              <ul className="space-y-2 text-[#14110f]/80 leading-relaxed">
                <li>• Operasional program pembinaan dan pendampingan</li>
                <li>• Produksi konten dakwah yang konsisten</li>
                <li>• Pendidikan dan penguatan kader berkelanjutan</li>
                <li>• Program sosial untuk masyarakat yang membutuhkan</li>
              </ul>
            </article>

            <article className="bg-white border border-[#14110f]/10 rounded-2xl p-6 shadow-sm lg:col-span-2">
              <div className="flex items-center gap-2 text-[#7a1f1f] mb-2">
                <Target className="w-5 h-5" />
                <h3 className="font-bold text-lg">Ringkasan capaian fundraising</h3>
              </div>
              <p className="text-sm text-[#14110f]/70 mb-5">
                Angka berikut dihitung dari akumulasi seluruh campaign aktif saat ini.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
                <div className="rounded-xl bg-[#f6f1e9] p-4 border border-[#14110f]/10">
                  <p className="text-sm text-[#14110f]/70 mb-1">Target total</p>
                  <p className="text-lg font-bold text-[#14110f]">{formatCurrency(totalTarget)}</p>
                </div>
                <div className="rounded-xl bg-[#f6f1e9] p-4 border border-[#14110f]/10">
                  <p className="text-sm text-[#14110f]/70 mb-1">Dana terkumpul</p>
                  <p className="text-lg font-bold text-[#14110f]">{formatCurrency(totalRaised)}</p>
                </div>
                <div className="rounded-xl bg-[#f6f1e9] p-4 border border-[#14110f]/10">
                  <p className="text-sm text-[#14110f]/70 mb-1">Sisa kebutuhan</p>
                  <p className="text-lg font-bold text-[#7a1f1f]">{formatCurrency(remainingTarget)}</p>
                </div>
                <div className="rounded-xl bg-[#f6f1e9] p-4 border border-[#14110f]/10">
                  <p className="text-sm text-[#14110f]/70 mb-1">Campaign aktif</p>
                  <p className="text-lg font-bold text-[#14110f]">{campaignCount}</p>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-[#14110f]/70">Progress keseluruhan</span>
                  <span className="font-bold text-[#7a1f1f]">{overallProgress}%</span>
                </div>
                <div className="w-full bg-[#eadfce] rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#7a1f1f] to-[#b07b3a] h-3 rounded-full transition-all"
                    style={{ width: `${overallProgress}%` }}
                  />
                </div>
              </div>
            </article>
          </div>

          <article className="bg-white border border-[#14110f]/10 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 text-[#7a1f1f] mb-4">
              <TrendingUp className="w-5 h-5" />
              <h3 className="font-bold text-lg">Update penyaluran</h3>
            </div>

            {campaigns.length === 0 ? (
              <p className="text-[#14110f]/70 leading-relaxed">
                Belum ada campaign aktif yang dapat ditampilkan saat ini. Update penyaluran akan
                kami tampilkan begitu campaign berjalan agar perkembangan dukungan tetap terpantau.
              </p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {campaigns.slice(0, 3).map((campaign: Campaign) => {
                  const progress = Math.min(
                    Math.round((campaign.raised_amount / campaign.target_amount) * 100),
                    100
                  )

                  return (
                    <div key={campaign.id} className="rounded-xl bg-[#f6f1e9] p-4 border border-[#14110f]/10">
                      <p className="font-bold text-[#14110f] mb-2 line-clamp-2">{campaign.title}</p>
                      <p className="text-sm text-[#14110f]/70 mb-3 line-clamp-2">
                        {campaign.description || 'Update penyaluran campaign sedang berjalan.'}
                      </p>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-[#14110f]/70">Progress</span>
                        <span className="font-semibold text-[#7a1f1f]">{progress}%</span>
                      </div>
                      <div className="w-full bg-[#eadfce] rounded-full h-2 overflow-hidden mb-2">
                        <div className="bg-[#7a1f1f] h-2 rounded-full" style={{ width: `${progress}%` }} />
                      </div>
                      <p className="text-xs text-[#14110f]/70">
                        {formatCurrency(campaign.raised_amount)} dari {formatCurrency(campaign.target_amount)}
                      </p>
                    </div>
                  )
                })}
              </div>
            )}
          </article>
        </div>
      </section>
    </div>
  )
}
