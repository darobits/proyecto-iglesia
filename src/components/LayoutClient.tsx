"use client"

import { usePathname } from "next/navigation"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const isAdmin = pathname.startsWith("/admin")
  const isLogin = pathname.startsWith("/login")

  return (
    <>
      {/* NAVBAR */}
      {!isAdmin && !isLogin && <Navbar />}

      {/* CONTENIDO */}
      <main>{children}</main>

      {/* FOOTER */}
      {!isAdmin && !isLogin && <Footer />}
    </>
  )
}