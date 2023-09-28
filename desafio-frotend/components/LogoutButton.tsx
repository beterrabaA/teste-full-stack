'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'

const LogoutButton = () => {
  const router = useRouter()

  const handleLogout = async () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user')
    }

    try {
      await axios.get('/api/auth/logout')
      router.push('/login')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <button
      type="button"
      onClick={() => handleLogout()}
      className="bg-red-100 max-sm:hidden px-4 p-2 rounded-3xl"
    >
      Logout
    </button>
  )
}

export default LogoutButton
