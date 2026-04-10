import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

export async function middleware(req: NextRequest) {

  let res = NextResponse.next()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name) {
          return req.cookies.get(name)?.value
        },
        set(name, value, options) {
          res.cookies.set(name, value, options)
        },
        remove(name, options) {
          res.cookies.set(name, "", options)
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // 🔒 PROTEGER /admin
  if (req.nextUrl.pathname.startsWith("/admin")) {

    if (!user) {
      return NextResponse.redirect(new URL("/login", req.url))
    }

    const { data: adminData } = await supabase
      .from("usuarios_admin")
      .select("rol")
      .eq("id", user.id)
      .single()

    if (!adminData || adminData.rol !== "admin") {
      return NextResponse.redirect(new URL("/", req.url))
    }
  }

  return res
}

export const config = {
  matcher: ["/admin/:path*"],
}