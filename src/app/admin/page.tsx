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

  if (loading) return <p className="loading">Cargando...</p>

  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Bienvenido <strong>{user?.email}</strong></p>
      </div>

      <div className="dashboard-grid">

        <div
          className="dashboard-card"
          onClick={() => router.push("/admin/usuarios")}
        >
          <div className="card-icon">👤</div>
          <h3>Usuarios</h3>
          <p>Gestionar usuarios y permisos</p>
          <button className="btn-go">
  Ir <span>→</span>
</button>
        </div>

        <div
          className="dashboard-card"
          onClick={() => router.push("/admin/predicas")}
        >
          <div className="card-icon">🎙️</div>
          <h3>Prédicas</h3>
          <p>Subir y administrar prédicas</p>
          <button className="btn-go">
  Ir <span>→</span>
</button>
        </div>

        <div
          className="dashboard-card"
          onClick={() => router.push("/admin/alabanzas")}
        >
          <div className="card-icon">🎵</div>
          <h3>Alabanzas</h3>
          <p>Subir y administrar alabanzas</p>
          <button className="btn-go">
  Ir <span>→</span>
</button>
        </div>

      </div>
    </div>
  )
}