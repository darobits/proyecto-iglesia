"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import type { User } from "@supabase/supabase-js"

type Rol = "admin" | "editor"
type Seccion = "usuarios" | "predicas" | "alabanzas" | "perfil"

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null)
  const [userRole, setUserRole] = useState<Rol | null>(null)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rol, setRol] = useState<Rol>("editor")

  const [seccion, setSeccion] = useState<Seccion>("usuarios")

  const router = useRouter()

  // 🔐 cargar usuario
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
  }, [])

  // 🚪 logout
  const logout = async () => {
    await supabase.auth.signOut()
    router.push("/login")
  }

  // 👤 crear usuario
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

    if (error) {
      alert(error.message)
      return
    }

    if (!data.user) {
      alert("Error al crear usuario")
      return
    }

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

      {/* HEADER */}
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

      {/* MENU */}
      <div className="admin-section">
        <button
          className={seccion === "usuarios" ? "active" : ""}
          onClick={() => setSeccion("usuarios")}
        >
          Crear usuario
        </button>

        <button
          className={seccion === "predicas" ? "active" : ""}
          onClick={() => setSeccion("predicas")}
        >
          Predicas
        </button>

        <button
          className={seccion === "alabanzas" ? "active" : ""}
          onClick={() => setSeccion("alabanzas")}
        >
          Alabanzas
        </button>

        <button
          className={seccion === "perfil" ? "active" : ""}
          onClick={() => setSeccion("perfil")}
        >
          Perfil
        </button>
      </div>

      {/* =========================
         SECCIÓN USUARIOS
      ========================== */}
      {seccion === "usuarios" && (
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

          {userRole !== "admin" && (
            <p style={{ color: "red", marginTop: "10px" }}>
              Solo admin puede crear usuarios
            </p>
          )}
        </div>
      )}

      {/* =========================
         SECCIÓN PREDICAS
      ========================== */}
      {seccion === "predicas" && (
        <div className="admin-card">
          <h3>Predicas</h3>
          <p>Acá vamos a cargar y listar predicas (siguiente paso)</p>
        </div>
      )}

      {/* =========================
         SECCIÓN ALABANZAS
      ========================== */}
      {seccion === "alabanzas" && (
        <div className="admin-card">
          <h3>Alabanzas</h3>
          <p>Acá vamos a cargar alabanzas (siguiente paso)</p>
        </div>
      )}

      {/* =========================
         SECCIÓN PERFIL
      ========================== */}
      {seccion === "perfil" && (
        <div className="admin-card">
          <h3>Mi Perfil</h3>

          <p>Email: {user?.email}</p>

          <button
            className="admin-submit-btn"
            onClick={async () => {
              const newPass = prompt("Nueva contraseña")
              if (!newPass) return

              const { error } = await supabase.auth.updateUser({
                password: newPass
              })

              if (error) alert(error.message)
              else alert("Contraseña actualizada")
            }}
          >
            Cambiar contraseña
          </button>
        </div>
      )}

    </div>
  )
}