'use client'

import { useAuth } from "@/hooks/useAuth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { PERMISOS } from "@/lib/permissions"
import ListadoUsuarios from "../components/ListadoUsuarios"

export default function UsuariosPage() {
  const { permisos, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !permisos.includes(PERMISOS.GESTIONAR_USUARIOS)) {
      router.push("/admin")
    }
  }, [permisos, loading, router])

  if (loading) return <p style={{ color: "white" }}>Cargando...</p>

  return <ListadoUsuarios />
}