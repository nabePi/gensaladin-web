import { signIn } from '@/lib/auth/nextauth'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold text-center">Masuk ke GenSaladin</h1>
        <form
          action={async () => {
            'use server'
            await signIn('google', { redirectTo: '/dashboard' })
          }}
        >
          <Button type="submit" className="w-full">
            Masuk dengan Google
          </Button>
        </form>
      </div>
    </div>
  )
}
