'use client'

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import type { User } from "@supabase/supabase-js"

type UsuarioAdmin = {
  rol: string | null
  permisos: string[] | null
}

type AuthState = {
  user: User | null
  rol: string | null
  permisos: string[]
  loading: boolean
}

export function useAuth(): AuthState {
  const [user, setUser] = useState<User | null>(null)
  const [rol, setRol] = useState<string | null>(null)
  const [permisos, setPermisos] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  async function loadUser() {
    try {
      const { data: userData, error: userError } = await supabase.auth.getUser()

      if (userError || !userData.user) {
        setUser(null)
        setRol(null)
        setPermisos([])
        setLoading(false)
        return
      }

      const userId = userData.user.id

      const { data, error } = await supabase
        .from("usuarios_admin")
        .select("rol, permisos")
        .eq("id", userId)
        .maybeSingle<UsuarioAdmin>() // 👈 CLAVE

      if (error) {
        console.error("Error obteniendo rol:", error.message)
      }

      setUser(userData.user)
      setRol(data?.rol ?? null)
      setPermisos(data?.permisos ?? [])
      setLoading(false)

    } catch (err) {
      console.error("Error inesperado:", err)
      setUser(null)
      setRol(null)
      setPermisos([])
      setLoading(false)
    }
  }

  useEffect(() => {
  let isMounted = true

  async function init() {
    try {
      const { data: userData, error: userError } = await supabase.auth.getUser()

      if (!isMounted) return

      if (userError || !userData.user) {
        setUser(null)
        setRol(null)
        setPermisos([])
        setLoading(false)
        return
      }

      const userId = userData.user.id

      const { data, error } = await supabase
        .from("usuarios_admin")
        .select("rol, permisos")
        .eq("id", userId)
        .maybeSingle()

      if (!isMounted) return

      if (error) {
        console.error(error.message)
      }

      setUser(userData.user)
      setRol(data?.rol ?? null)
      setPermisos(data?.permisos ?? [])
      setLoading(false)

    } catch (err) {
      console.error(err)

      if (isMounted) {
        setUser(null)
        setRol(null)
        setPermisos([])
        setLoading(false)
      }
    }
  }

  init()

  const { data: listener } = supabase.auth.onAuthStateChange(() => {
    init()
  })

  return () => {
    isMounted = false
    listener.subscription.unsubscribe()
  }
}, [])

  return { user, rol, permisos, loading }
}