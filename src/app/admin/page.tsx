"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import type { User } from "@supabase/supabase-js"

type Rol = "admin" | "editor"

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null)
  const [userRole, setUserRole] = useState<Rol | null>(null)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rol, setRol] = useState<Rol>("editor")

  const router = useRouter()

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.auth.getUser()

      if (!data.user) {
        router.push("/login")
        return
      }

      setUser(data.user)

      const { data: roleData } = await supabase
        .from("usuarios_admin")
        .select("rol")
        .eq("id", data.user.id)
        .single()

      setUserRole(roleData?.rol ?? null)
    }

    load()
  }, []) // no queremos que esto se ejecute más de una vez, por eso no ponemos dependencias
  //esto es un patrón común para verificar la autenticación al cargar una página protegida

  const logout = async () => {
    await supabase.auth.signOut()
    router.push("/login")
  }

  const crearUsuario = async () => {
    if (userRole !== "admin") {
      alert("No tenés permisos")
      return
    }

    if (!email || !password) {
      alert("Completá todos los campos")
      return
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })

    if (error) return alert(error.message)
    if (!data.user) return alert("Error al crear usuario")

    await supabase.from("usuarios_admin").insert({
      id: data.user.id,
      email,
      rol
    })

    alert("Usuario creado")
    setEmail("")
    setPassword("")
  }

  return (
    <div className="admin-container">
      <h1 className="admin-title">Panel Admin</h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <span>
          {user?.email} ({userRole})
        </span>

        <button
          className="btn-base btn-outline"
          style={{ marginLeft: "10px" }}
          onClick={logout}
        >
          Logout
        </button>
      </div>

      <div className="admin-section">
        <button>Crear usuario</button>
        <button>Predicas</button>
        <button>Alabanzas</button>
        <button>Perfil</button>
      </div>

      <div className="admin-card">
        <h3>Crear Usuario</h3>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          value={rol}
          onChange={(e) => setRol(e.target.value as Rol)}
        >
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>

        <button className="admin-submit-btn" onClick={crearUsuario}>
          Crear usuario
        </button>
      </div>
    </div>
  )
}