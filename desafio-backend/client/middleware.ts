import { NextRequest, NextResponse } from 'next/server'

interface CustomRequest extends NextRequest {
  userId?: string
}

export function middleware(req: CustomRequest) {
  if (!req.userId) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: ['/'],
}
