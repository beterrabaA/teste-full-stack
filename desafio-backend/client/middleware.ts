import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export function middleware(req: NextRequest) {
  const cookie = cookies()

  if (!cookie.get('token')) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: ['/'],
}
