'use client'

import { useAuth } from "@/hooks/useAuth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function AdminDashboard() {
  const { user, rol, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/login")
        return
      }

      if (rol !== "admin") {
        router.push("/")
      }
    }
  }, [user, rol, loading, router])

  if (loading) return <p>Cargando...</p>

  return (
  <div>
    <h1>Dashboard</h1>

    <p>Bienvenido <strong>{user?.email}</strong></p>

    <div style={{
      marginTop: 30,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: 20
    }}>

      <div className="card">
        <h3>Usuarios</h3>
        <p>Gestionar usuarios y permisos</p>
        <button onClick={() => router.push("/admin/usuarios")}>
          Ir
        </button>
      </div>

      <div className="card">
        <h3>Prédicas</h3>
        <p>Subir y administrar prédicas</p>
        <button onClick={() => router.push("/admin/predicas")}>
          Ir
        </button>
      </div>

      <div className="card">
        <h3>Alabanzas</h3>
        <p>Subir y administrar alabanzas</p>
        <button onClick={() => router.push("/admin/alabanzas")}>
          Ir
        </button>
      </div>

    </div>
  </div>
)
}

const cardStyle: React.CSSProperties = {
  background: "#0f172a",
  color: "white",
  padding: 20,
  borderRadius: 10
}