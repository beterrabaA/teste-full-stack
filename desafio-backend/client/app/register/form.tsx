'use client'

import getConfig from 'next/config'
import 'dotenv/config'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import axios from 'axios'

const RegisterForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const router = useRouter()

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()

    try {
      const { data } = await axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/user/register`, {
          email,
          password,
          username,
        })
      console.log(data)
      router.push('/login')
    } catch (error) {
      setError(true)
    }
  }
  return (
    <form onSubmit={onSubmit} className="space-y-12 w-full sm:w-[400px] ml-0">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="username">Username(optional)</Label>
        <Input
          className="w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          type="text"
        />
      </div>
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
      {error && <Alert>Something went wrong</Alert>}
      <div className="w-full">
        <Button className="w-full" size="lg">
          Sign Up
        </Button>
      </div>
    </form>
  )
}

export default RegisterForm
