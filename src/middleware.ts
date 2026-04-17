import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl

  if (url.pathname.startsWith('/admin')) {
    // todavía no validamos rol acá (eso es más avanzado)
    // pero ya podemos bloquear si no hay sesión más adelante
  }

  return NextResponse.next()
}