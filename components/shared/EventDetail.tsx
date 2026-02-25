'use client'

import { useState } from 'react'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import { Button } from '@/components/ui/button'
import { registerForEvent } from '@/lib/actions/registrations'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
  type: string
  capacity: number
  registered_count: number
  image_url: string | null
}

export function EventDetail({
  event,
  isRegistered: initialIsRegistered
}: {
  event: Event
  isRegistered: boolean
}) {
  const { data: session } = useSession()
  const [isRegistered, setIsRegistered] = useState(initialIsRegistered)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const eventDate = new Date(event.date)
  const isFull = event.registered_count >= event.capacity
  const isPast = eventDate < new Date()

  const handleRegister = async () => {
    if (!session?.user?.id) return

    setIsLoading(true)
    setError('')
    setSuccess('')

    const result = await registerForEvent(event.id, session.user.id)

    if (result.success) {
      setIsRegistered(true)
      setSuccess('Pendaftaran berhasil! Silakan cek email Anda.')
    } else {
      setError(result.error || 'Pendaftaran gagal. Silakan coba lagi.')
    }

    setIsLoading(false)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Event Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-[#b07b3a] mb-4">
          <span className="uppercase tracking-wide">{event.type}</span>
          <span>•</span>
          <span>{format(eventDate, 'EEEE, d MMMM yyyy', { locale: id })}</span>
        </div>

        <h1 className="text-4xl font-bold text-[#7a1f1f] mb-4 font-serif">
          {event.title}
        </h1>

        <div className="flex items-center gap-6 text-[#14110f]/70">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{format(eventDate, 'HH:mm')} WIB</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <span>{event.location}</span>
          </div>
        </div>
      </div>

      {/* Registration Card */}
      <div className="bg-[#fbf7f0] rounded-xl p-6 mb-8 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-[#14110f]/60">Pendaftar</p>
            <p className="text-2xl font-bold text-[#7a1f1f]">
              {event.registered_count} <span className="text-sm font-normal text-[#14110f]/40">/ {event.capacity}</span>
            </p>
          </div>

          <div className="text-right">
            {isFull && !isPast && (
              <span className="inline-block px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-sm">
                Penuh
              </span>
            )}
            {isPast && (
              <span className="inline-block px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-sm">
                Selesai
              </span>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-[#7a1f1f] h-2 rounded-full transition-all"
            style={{ width: `${Math.min((event.registered_count / event.capacity) * 100, 100)}%` }}
          />
        </div>

        {/* Action Button */}
        {!session ? (
          <Link href="/login">
            <Button className="w-full" size="lg">
              Masuk untuk Mendaftar
            </Button>
          </Link>
        ) : isRegistered ? (
          <div className="text-center">
            <p className="text-green-600 font-medium mb-2">✓ Anda sudah terdaftar</p>
            <p className="text-sm text-[#14110f]/60">
              Silakan cek email untuk detail acara
            </p>
          </div>
        ) : isFull ? (
          <Button className="w-full" size="lg" disabled>
            Kuota Penuh
          </Button>
        ) : isPast ? (
          <Button className="w-full" size="lg" disabled>
            Acara Selesai
          </Button>
        ) : (
          <Button
            className="w-full"
            size="lg"
            onClick={handleRegister}
            disabled={isLoading}
          >
            {isLoading ? 'Memproses...' : 'Daftar Sekarang'}
          </Button>
        )}

        {error && (
          <p className="mt-4 text-red-600 text-sm text-center">{error}</p>
        )}
        {success && (
          <p className="mt-4 text-green-600 text-sm text-center">{success}</p>
        )}
      </div>

      {/* Event Description */}
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-[#7a1f1f] mb-4 font-serif">
          Tentang Acara
        </h2>
        <div className="text-[#14110f]/80 leading-relaxed whitespace-pre-wrap">
          {event.description}
        </div>
      </div>

      {/* Back Link */}
      <div className="mt-12">
        <Link
          href="/events"
          className="text-[#7a1f1f] hover:underline inline-flex items-center gap-2"
        >
          ← Kembali ke Agenda
        </Link>
      </div>
    </div>
  )
}
