'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createEvent, updateEvent } from '@/lib/actions/admin'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface EventFormProps {
  event?: {
    id: string
    title: string
    slug: string
    description: string | null
    date: string
    location: string
    type: string | null
    capacity: number
    status: string
    image_url: string | null
  }
}

const eventTypes = [
  { value: 'kajian', label: 'Kajian' },
  { value: 'workshop', label: 'Workshop' },
  { value: 'rihlah', label: 'Rihlah' },
  { value: 'camp', label: 'Camp' },
  { value: 'seminar', label: 'Seminar' },
  { value: 'onedayclass', label: 'One Day Class' },
]

const eventStatuses = [
  { value: 'draft', label: 'Draft' },
  { value: 'published', label: 'Published' },
  { value: 'ongoing', label: 'Ongoing' },
  { value: 'completed', label: 'Completed' },
  { value: 'cancelled', label: 'Cancelled' },
]

export default function EventForm({ event }: EventFormProps) {
  const router = useRouter()
  const isEditing = !!event

  const [formData, setFormData] = useState({
    title: event?.title || '',
    slug: event?.slug || '',
    description: event?.description || '',
    date: event?.date ? new Date(event.date).toISOString().slice(0, 16) : '',
    location: event?.location || '',
    type: event?.type || 'kajian',
    capacity: event?.capacity || 50,
    status: event?.status || 'draft',
    image_url: event?.image_url || '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  }

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: isEditing ? prev.slug : generateSlug(title),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const data = {
        ...formData,
        capacity: Number(formData.capacity),
        date: new Date(formData.date).toISOString(),
      }

      const result = isEditing
        ? await updateEvent(event.id, data)
        : await createEvent(data)

      if (result.success) {
        router.push('/admin/events')
        router.refresh()
      } else {
        setError(result.error || 'Terjadi kesalahan')
      }
    } catch {
      setError('Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="title">Judul Acara *</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => handleTitleChange(e.target.value)}
          required
          placeholder="Contoh: Kajian Saladin: Memahami Sejarah Islam"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="slug">Slug *</Label>
        <Input
          id="slug"
          value={formData.slug}
          onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
          required
          placeholder="kajian-saladin-memahami-sejarah-islam"
          className="font-mono text-sm"
        />
        <p className="text-sm text-gray-500">
          URL-friendly identifier. Contoh: gensaladin.id/events/{'{'}slug{'}'}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="type">Tipe Acara *</Label>
          <Select
            value={formData.type}
            onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih tipe acara" />
            </SelectTrigger>
            <SelectContent>
              {eventTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Status *</Label>
          <Select
            value={formData.status}
            onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih status" />
            </SelectTrigger>
            <SelectContent>
              {eventStatuses.map((status) => (
                <SelectItem key={status.value} value={status.value}>
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="date">Tanggal & Waktu *</Label>
        <Input
          id="date"
          type="datetime-local"
          value={formData.date}
          onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Lokasi *</Label>
        <Input
          id="location"
          value={formData.location}
          onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
          required
          placeholder="Contoh: Masjid Al-Hikmah, Jakarta Selatan"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="capacity">Kapasitas *</Label>
        <Input
          id="capacity"
          type="number"
          min={1}
          value={formData.capacity}
          onChange={(e) => setFormData(prev => ({ ...prev, capacity: parseInt(e.target.value) || 0 }))}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="image_url">URL Gambar</Label>
        <Input
          id="image_url"
          type="url"
          value={formData.image_url}
          onChange={(e) => setFormData(prev => ({ ...prev, image_url: e.target.value }))}
          placeholder="https://example.com/image.jpg"
        />
        <p className="text-sm text-gray-500">
          URL gambar header untuk acara (opsional)
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Deskripsi</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          rows={6}
          placeholder="Deskripsi lengkap tentang acara ini..."
        />
      </div>

      <div className="flex gap-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#7a1f1f] hover:bg-[#5d1414]"
        >
          {isSubmitting ? 'Menyimpan...' : isEditing ? 'Update Acara' : 'Buat Acara'}
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={() => router.push('/admin/events')}
        >
          Batal
        </Button>
      </div>
    </form>
  )
}
