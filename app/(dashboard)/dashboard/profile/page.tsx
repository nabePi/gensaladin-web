'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { updateProfile } from '@/lib/actions/dashboard'

export default function ProfilePage() {
  const { data: session, update } = useSession()
  const [name, setName] = useState(session?.user?.name || '')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!session?.user?.id) return

    setIsLoading(true)
    setMessage('')

    const result = await updateProfile(session.user.id, { name })

    if (result.success) {
      await update({ name })
      setMessage('Profil berhasil diperbarui!')
    } else {
      setMessage('Gagal memperbarui profil.')
    }

    setIsLoading(false)
  }

  return (
    <div className="max-w-lg">
      <h1 className="text-3xl font-bold text-[#7a1f1f] mb-6 font-serif">Profil</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-[#14110f] mb-2">Nama</label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama lengkap"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#14110f] mb-2">Email</label>
          <Input
            value={session?.user?.email || ''}
            disabled
            className="bg-gray-100"
          />
          <p className="text-xs text-[#14110f]/40 mt-1">Email tidak dapat diubah</p>
        </div>

        {message && (
          <p className={message.includes('berhasil') ? 'text-green-600' : 'text-red-600'}>
            {message}
          </p>
        )}

        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Menyimpan...' : 'Simpan Perubahan'}
        </Button>
      </form>
    </div>
  )
}
