'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const router = useRouter()
  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log('submit')
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
      {error && <Alert>{error}</Alert>}
      <div className="w-full">
        <Button className="w-full" size="lg">
          Login
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
