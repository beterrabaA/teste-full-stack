import { NextRequest, NextResponse } from 'next/server'
import { cookies, headers } from 'next/headers'

interface CustomRequest extends NextRequest {
  userId?: string
}

export function middleware(req: CustomRequest) {
  const header = headers()
  if (!header.get('Authorization')) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: ['/'],
}
