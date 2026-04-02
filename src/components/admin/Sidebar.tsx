"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Sidebar() {

  const router = useRouter()
  const [rol, setRol] = useState<string | null>(null)

  useEffect(() => {
    setRol(localStorage.getItem("user_role"))
  }, [])

  return (
    <aside className="sidebar">

      <h2>Admin</h2>

      <div className="sidebar-item" onClick={() => router.push("/admin")}>
        Crear
      </div>

      <div className="sidebar-item" onClick={() => router.push("/admin/predicas")}>
        Predicas
      </div>

      <div className="sidebar-item" onClick={() => router.push("/admin/alabanzas")}>
        Alabanzas
      </div>

      {/* 👤 PERFIL */}
      <div className="sidebar-profile">
        <div>👤 Usuario</div>
        <div className="role">{rol}</div>
      </div>

    </aside>
  )
}