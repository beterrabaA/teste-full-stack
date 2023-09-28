import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(req: Request) {
  try {
    const cookie = cookies()

    cookie.delete('user')
    return NextResponse.json({ message: 'success' })
  } catch (error) {
    console.log('AUTH_LOGOUT_ERROR', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
