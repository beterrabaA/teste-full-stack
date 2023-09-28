import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email } = body
    const cookie = cookies()

    if (!email) return new NextResponse('Unauthorized', { status: 401 })

    cookie.set('user', email, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
    })
    return NextResponse.json({ message: 'success' })
  } catch (error) {
    console.log('AUTH_LOGIN_ERROR', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
