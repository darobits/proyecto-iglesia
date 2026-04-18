'use client'

import Link from "next/link"
import { useAuth } from "@/hooks/useAuth"
import { supabase } from "@/lib/supabase"
import { useRouter, usePathname } from "next/navigation"

import { usePermissions } from "@/hooks/usePermissions"
import type { Permiso } from "@/lib/permissions"

export default function Sidebar({ collapsed }: { collapsed: boolean }) {

  const { user, nombre, permisos: permisosRaw } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  // 🔥 FIX CORRECTO (igual que en Listado)
  const permisos = permisosRaw as Permiso[]

  const {
    canGestionarUsuarios,
    canSubirPredicas,
    canSubirAlabanzas
  } = usePermissions(permisos)

  async function logout() {
    await supabase.auth.signOut()
    router.push("/login")
  }

  function isActive(path: string) {
    return pathname === path
  }

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>

      <div>
        <h2>{collapsed ? "A" : "Admin"}</h2>

        <nav>

          <Link href="/admin" className={isActive("/admin") ? "active" : ""}>
            {collapsed ? "D" : "Dashboard"}
          </Link>

          {canGestionarUsuarios && (
            <Link href="/admin/usuarios" className={isActive("/admin/usuarios") ? "active" : ""}>
              {collapsed ? "U" : "Usuarios"}
            </Link>
          )}

          {canSubirPredicas && (
            <Link href="/admin/predicas" className={isActive("/admin/predicas") ? "active" : ""}>
              {collapsed ? "P" : "Prédicas"}
            </Link>
          )}

          {canSubirAlabanzas && (
            <Link href="/admin/alabanzas" className={isActive("/admin/alabanzas") ? "active" : ""}>
              {collapsed ? "A" : "Alabanzas"}
            </Link>
          )}

        </nav>
      </div>

      {!collapsed && (
        <div>
          <p>{nombre || user?.email}</p>

          <button onClick={logout}>
            Cerrar sesión
          </button>
        </div>
      )}

    </div>
  )
}