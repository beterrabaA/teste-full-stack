'use client'

import axios from 'axios'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { RegisterInputProps } from '@/types'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleDisable = () => {
    const MIN_PASSWORD_LENGTH = 6
    const condition1 = email.match(/\S+@+\S+\.+com/i)
    const condition2 = password.length > MIN_PASSWORD_LENGTH
    return !(condition1 && condition2)
  }

  const router = useRouter()

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (typeof window !== 'undefined') {
      const usersLocated = JSON.parse(
        localStorage.getItem('users') || '[]',
      ) as RegisterInputProps[]

      const isUnique = usersLocated.find(
        (u) => u.email === email && u.password === password,
      )
      if (!isUnique) {
        setError(true)
        return
      }

      try {
        localStorage.setItem('user', JSON.stringify({ email }))
        await axios.post('/api/auth/login', { email })
        router.push('/')
      } catch (error) {
        setError(true)
      }
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-12 w-full sm:w-[400px] ml-0">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          className="w-full"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          className="w-full"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
        />
      </div>
      {error && <Alert>Email or password invalid</Alert>}
      <div className="w-full">
        <Button className="w-full" size="lg" disabled={handleDisable()}>
          Login
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
