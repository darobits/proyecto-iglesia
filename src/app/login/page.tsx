"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function LoginPage() {

  const router = useRouter()

  const [dni, setDni] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {

    if (!dni || !password) return alert("Completá los datos")

    setLoading(true)

    const emailFake = `${dni}@admin.com`

    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailFake,
      password
    })

    if (error) {
      setLoading(false)
      return alert("Credenciales inválidas")
    }

    const { data: userData } = await supabase
      .from("usuarios_admin")
      .select("*")
      .eq("id", data.user.id)
      .single()

    localStorage.setItem("user_role", userData.rol)

    router.push("/admin")

    setLoading(false)
  }

  return (
    <div className="login-container">

      <div className="login-card">

        {/* 🔥 LOGO */}
        <img
          src="/images/logo_iglesia.png"
          alt="Logo Iglesia"
          className="login-logo"
        />

        <h2>Iniciar sesión</h2>

        <input
          placeholder="DNI"
          value={dni}
          onChange={e => setDni(e.target.value)}
        />

        <div className="password-wrapper">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(prev => !prev)}
          >
            👁️
          </button>

        </div>

        <button onClick={handleLogin}>
          {loading ? "Ingresando..." : "Ingresar"}
        </button>

      </div>

    </div>
  )
}