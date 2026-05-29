'use client'

import { useRouter } from 'next/navigation'
import { logoutAdmin } from '@/lib/auth'

export default function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    try {
      await logoutAdmin()
      router.push('/admin/login')
      router.refresh()
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition text-sm font-medium"
    >
      Logout
    </button>
  )
}
