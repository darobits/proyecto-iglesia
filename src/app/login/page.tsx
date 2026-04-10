


"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"

export default function LoginPage() {

  const router = useRouter()

  const [dni, setDni] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!dni || !password) {
      return alert("Completá todos los campos")
    }

    setLoading(true)

    try {
      // 🔑 EMAIL GENERADO DESDE DNI
      const email = `${dni}@admin.com`

      // 🔐 LOGIN SUPABASE
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error || !data.user) {
        setLoading(false)
        return alert("Credenciales incorrectas")
      }

      const userId = data.user.id

      // 🔍 BUSCAR USUARIO EN TABLA ADMIN
      const { data: adminData, error: adminError } = await supabase
        .from("usuarios_admin")
        .select("*")
        .eq("id", userId)
        .single()

      if (adminError || !adminData) {
        await supabase.auth.signOut()
        setLoading(false)
        return alert("No tenés permisos de administrador")
      }

      if (adminData.rol !== "admin") {
        await supabase.auth.signOut()
        setLoading(false)
        return alert("Acceso denegado")
      }

      // ✅ LOGIN OK
      router.push("/admin")

    } catch (err) {
      console.error(err)
      alert("Error inesperado")
    }

    setLoading(false)
  }

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>

         {/* 🔥 LOGO */}
        <img
          src="/images/logo_iglesia.png"
          alt="Logo Iglesia"
          className="login-logo"
        />

        <h2>Iniciar sesión</h2>

        <input
          type="text"
          placeholder="DNI"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Ingresando..." : "Ingresar"}
        </button>

      </form>
    </div>
  )
}