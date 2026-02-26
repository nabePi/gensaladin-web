import { Resend } from 'resend'

// Lazy initialization of Resend client
let resend: Resend | null = null

function getResend() {
  if (!resend && process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY)
  }
  return resend
}

const FROM_EMAIL = 'GenSaladin <noreply@gensaladin.id>'
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3099'

interface SendEmailParams {
  to: string
  subject: string
  html: string
}

export async function sendEmail({ to, subject, html }: SendEmailParams) {
  const client = getResend()
  if (!client) {
    console.warn('RESEND_API_KEY not set, email not sent')
    return { success: false, error: 'Email service not configured' }
  }

  try {
    const { data, error } = await client.emails.send({
      from: FROM_EMAIL,
      to,
      subject,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Email send error:', error)
    return { success: false, error: 'Failed to send email' }
  }
}

// Registration confirmation email
export async function sendRegistrationConfirmation(
  to: string,
  eventName: string,
  eventDate: string,
  eventLocation: string,
  eventSlug: string
) {
  const eventUrl = `${APP_URL}/events/${eventSlug}`

  const html = `
    <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
      <div style="background: linear-gradient(135deg, #7a1f1f 0%, #5a1515 100%); padding: 40px 20px; text-align: center;">
        <h1 style="color: #fbf7f0; margin: 0; font-family: 'Fraunces', serif; font-size: 28px;">GenSaladin</h1>
        <p style="color: #e8d5b5; margin: 10px 0 0 0;">Pendaftaran Berhasil!</p>
      </div>

      <div style="padding: 40px 30px; background: #ffffff;">
        <h2 style="color: #7a1f1f; font-family: 'Fraunces', serif; margin-top: 0;">Terima Kasih Telah Mendaftar</h2>

        <p>Assalamu'alaikum Wr. Wb.</p>

        <p>Pendaftaran Anda untuk acara berikut telah berhasil:</p>

        <div style="background: #f6f1e9; border-left: 4px solid #b07b3a; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <h3 style="margin: 0 0 10px 0; color: #7a1f1f;">${eventName}</h3>
          <p style="margin: 5px 0; color: #4a4a4a;"><strong>Tanggal:</strong> ${eventDate}</p>
          <p style="margin: 5px 0; color: #4a4a4a;"><strong>Lokasi:</strong> ${eventLocation}</p>
        </div>

        <p>Detail acara lengkap dapat dilihat di:</p>
        <a href="${eventUrl}" style="display: inline-block; background: #7a1f1f; color: #fbf7f0; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0;">Lihat Detail Acara</a>

        <hr style="border: none; border-top: 1px solid #e0d5c5; margin: 30px 0;">

        <p style="color: #666; font-size: 14px;">
          Jika Anda memiliki pertanyaan, silakan hubungi kami melalui website GenSaladin.
        </p>

        <p style="margin-top: 30px;">
          Wassalamu'alaikum Wr. Wb.<br>
          <strong>Tim GenSaladin</strong>
        </p>
      </div>

      <div style="background: #2a1810; padding: 20px; text-align: center; color: #a09080; font-size: 12px;">
        <p style="margin: 0;">© ${new Date().getFullYear()} Yayasan Saladin Peradaban Berilmu</p>
        <p style="margin: 5px 0 0 0;">Menginspirasi Generasi Muda Bersama Sejarah Islam</p>
      </div>
    </div>
  `

  return sendEmail({
    to,
    subject: `Pendaftaran Berhasil: ${eventName}`,
    html,
  })
}

// Event reminder email (24 hours before)
export async function sendEventReminder(
  to: string,
  eventName: string,
  eventDate: string,
  eventLocation: string,
  eventSlug: string
) {
  const eventUrl = `${APP_URL}/events/${eventSlug}`

  const html = `
    <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
      <div style="background: linear-gradient(135deg, #7a1f1f 0%, #5a1515 100%); padding: 40px 20px; text-align: center;">
        <h1 style="color: #fbf7f0; margin: 0; font-family: 'Fraunces', serif; font-size: 28px;">GenSaladin</h1>
        <p style="color: #e8d5b5; margin: 10px 0 0 0;">Pengingat Acara</p>
      </div>

      <div style="padding: 40px 30px; background: #ffffff;">
        <h2 style="color: #7a1f1f; font-family: 'Fraunces', serif; margin-top: 0;">Acara Akan Segera Dimulai</h2>

        <p>Assalamu'alaikum Wr. Wb.</p>

        <p>Ini adalah pengingat bahwa acara yang Anda daftari akan segera dimulai:</p>

        <div style="background: #f6f1e9; border-left: 4px solid #b07b3a; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <h3 style="margin: 0 0 10px 0; color: #7a1f1f;">${eventName}</h3>
          <p style="margin: 5px 0; color: #4a4a4a;"><strong>Tanggal:</strong> ${eventDate}</p>
          <p style="margin: 5px 0; color: #4a4a4a;"><strong>Lokasi:</strong> ${eventLocation}</p>
        </div>

        <p>Jangan lupa untuk hadir tepat waktu. Kami menantikan kehadiran Anda!</p>

        <a href="${eventUrl}" style="display: inline-block; background: #7a1f1f; color: #fbf7f0; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0;">Lihat Detail Acara</a>

        <hr style="border: none; border-top: 1px solid #e0d5c5; margin: 30px 0;">

        <p style="margin-top: 30px;">
          Wassalamu'alaikum Wr. Wb.<br>
          <strong>Tim GenSaladin</strong>
        </p>
      </div>

      <div style="background: #2a1810; padding: 20px; text-align: center; color: #a09080; font-size: 12px;">
        <p style="margin: 0;">© ${new Date().getFullYear()} Yayasan Saladin Peradaban Berilmu</p>
      </div>
    </div>
  `

  return sendEmail({
    to,
    subject: `Pengingat: ${eventName} Besok`,
    html,
  })
}

// Donation confirmation email
export async function sendDonationConfirmation(
  to: string,
  donorName: string,
  amount: number,
  campaignName: string,
  orderId: string
) {
  const formattedAmount = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(amount)

  const html = `
    <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
      <div style="background: linear-gradient(135deg, #7a1f1f 0%, #5a1515 100%); padding: 40px 20px; text-align: center;">
        <h1 style="color: #fbf7f0; margin: 0; font-family: 'Fraunces', serif; font-size: 28px;">GenSaladin</h1>
        <p style="color: #e8d5b5; margin: 10px 0 0 0;">Terima Kasih Atas Donasi Anda</p>
      </div>

      <div style="padding: 40px 30px; background: #ffffff;">
        <h2 style="color: #7a1f1f; font-family: 'Fraunces', serif; margin-top: 0;">Donasi Berhasil Diterima</h2>

        <p>Assalamu'alaikum Wr. Wb.</p>

        <p>Terima kasih atas kebaikan dan dukungan Anda. Donasi Anda sangat berarti untuk kemajuan dakwah dan pendidikan Islam.</p>

        <div style="background: #f6f1e9; border-left: 4px solid #b07b3a; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 5px 0; color: #4a4a4a;"><strong>Nama:</strong> ${donorName}</p>
          <p style="margin: 5px 0; color: #4a4a4a;"><strong>Jumlah:</strong> ${formattedAmount}</p>
          <p style="margin: 5px 0; color: #4a4a4a;"><strong>Kampanye:</strong> ${campaignName}</p>
          <p style="margin: 5px 0; color: #4a4a4a;"><strong>No. Order:</strong> ${orderId}</p>
        </div>

        <p>Semoga Allah membalas kebaikan Anda dengan berlipat ganda. Aamiin.</p>

        <hr style="border: none; border-top: 1px solid #e0d5c5; margin: 30px 0;">

        <p style="color: #666; font-size: 14px;">
          Donasi ini akan digunakan untuk program-program dakwah dan pendidikan Yayasan Saladin Peradaban Berilmu.
        </p>

        <p style="margin-top: 30px;">
          Wassalamu'alaikum Wr. Wb.<br>
          <strong>Tim GenSaladin</strong>
        </p>
      </div>

      <div style="background: #2a1810; padding: 20px; text-align: center; color: #a09080; font-size: 12px;">
        <p style="margin: 0;">© ${new Date().getFullYear()} Yayasan Saladin Peradaban Berilmu</p>
      </div>
    </div>
  `

  return sendEmail({
    to,
    subject: 'Terima Kasih Atas Donasi Anda',
    html,
  })
}

// Welcome email for new users
export async function sendWelcomeEmail(to: string, name: string) {
  const html = `
    <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
      <div style="background: linear-gradient(135deg, #7a1f1f 0%, #5a1515 100%); padding: 40px 20px; text-align: center;">
        <h1 style="color: #fbf7f0; margin: 0; font-family: 'Fraunces', serif; font-size: 28px;">GenSaladin</h1>
        <p style="color: #e8d5b5; margin: 10px 0 0 0;">Selamat Datang</p>
      </div>

      <div style="padding: 40px 30px; background: #ffffff;">
        <h2 style="color: #7a1f1f; font-family: 'Fraunces', serif; margin-top: 0;">Selamat Bergabung, ${name}!</h2>

        <p>Assalamu'alaikum Wr. Wb.</p>

        <p>Selamat datang di komunitas GenSaladin. Kami senang Anda bergabung bersama kami dalam perjalanan belajar sejarah Islam.</p>

        <p>Dengan mendaftar, Anda sekarang dapat:</p>
        <ul style="color: #4a4a4a; line-height: 1.8;">
          <li>Mendaftar acara kajian, workshop, dan program lainnya</li>
          <li>Mengakses konten eksklusif dari GenSaladin Vault</li>
          <li>Mendapatkan update terbaru tentang program kami</li>
          <li>Berpartisipasi dalam diskusi komunitas</li>
        </ul>

        <a href="${APP_URL}/events" style="display: inline-block; background: #7a1f1f; color: #fbf7f0; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0;">Jelajahi Acara</a>

        <hr style="border: none; border-top: 1px solid #e0d5c5; margin: 30px 0;">

        <p style="margin-top: 30px;">
          Wassalamu'alaikum Wr. Wb.<br>
          <strong>Tim GenSaladin</strong>
        </p>
      </div>

      <div style="background: #2a1810; padding: 20px; text-align: center; color: #a09080; font-size: 12px;">
        <p style="margin: 0;">© ${new Date().getFullYear()} Yayasan Saladin Peradaban Berilmu</p>
        <p style="margin: 5px 0 0 0;">Menginspirasi Generasi Muda Bersama Sejarah Islam</p>
      </div>
    </div>
  `

  return sendEmail({
    to,
    subject: 'Selamat Datang di GenSaladin',
    html,
  })
}
