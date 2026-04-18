'use client'

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import type { FormEvent } from "react"
import Image from "next/image"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    setLoading(false)

    if (error) {
      alert(error.message)
      return
    }

    router.push("/admin")
  }

  return (
    <div className="login-container">

      <form className="login-card" onSubmit={handleLogin}>

        {/* 🔥 LOGO */}
        <div className="login-logo">
          <Image
            src="/images/logo_iglesia.png"
            alt="Logo Iglesia"
            width={200}
            height={200}
            priority
          />
        </div>

        <h2>Iniciar sesión</h2>

        <div className="login-field">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login-field">
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Ingresando..." : "Ingresar"}
        </button>

      </form>
    </div>
  )
}