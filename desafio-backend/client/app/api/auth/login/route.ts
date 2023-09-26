import { NextResponse, NextRequest } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(res: NextResponse, req: NextRequest) {
  const body = await req.json()
  const { token } = body

  const cookie = cookies()

  cookie.set('token', token, {
    maxAge: 60 * 60 * 24 * 30,
  })

  //   res.headers.set('Set-Cookie', cookie.toString())
  res.headers.set('Authorization', token)

  return NextResponse.json({ message: 'ok' })
}
