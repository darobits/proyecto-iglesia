'use client'

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import type { User } from "@supabase/supabase-js"

type UsuarioAdmin = {
  nombre: string | null
  rol: string | null
  permisos: string[] | null
}

type AuthState = {
  user: User | null
  nombre: string | null
  rol: string | null
  permisos: string[]
  loading: boolean
}

// ⏱️ CONFIGURACIÓN
const SESSION_TIMEOUT = 30 * 60 * 1000 // 30 minutos

export function useAuth(): AuthState {
  const [user, setUser] = useState<User | null>(null)
  const [nombre, setNombre] = useState<string | null>(null)
  const [rol, setRol] = useState<string | null>(null)
  const [permisos, setPermisos] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    let isMounted = true

    // 🟢 Guarda actividad
    function resetTimer() {
      localStorage.setItem("last_activity", Date.now().toString())
    }

    // 🔴 Verifica expiración
    async function checkSession() {
      const last = localStorage.getItem("last_activity")

      if (!last) return

      const diff = Date.now() - parseInt(last)

      if (diff > SESSION_TIMEOUT) {
        await supabase.auth.signOut()
        localStorage.removeItem("last_activity")
        window.location.href = "/login"
      }
    }

    async function load() {
      try {
        const { data: userData, error: userError } = await supabase.auth.getUser()

        if (!isMounted) return

        if (userError || !userData.user) {
          setUser(null)
          setNombre(null)
          setRol(null)
          setPermisos([])
          setLoading(false)
          return
        }

        const userId = userData.user.id

        const { data, error } = await supabase
          .from("usuarios_admin")
          .select("nombre, rol, permisos")
          .eq("id", userId)
          .maybeSingle<UsuarioAdmin>()

        if (!isMounted) return

        if (error) {
          console.error("Error obteniendo usuario_admin:", error.message)
        }

        setUser(userData.user)
        setNombre(data?.nombre ?? null)
        setRol(data?.rol ?? null)
        setPermisos(data?.permisos ?? [])
        setLoading(false)

        // 🔥 INICIALIZA actividad al cargar usuario
        resetTimer()

      } catch (err) {
        console.error("Error inesperado:", err)

        if (isMounted) {
          setUser(null)
          setNombre(null)
          setRol(null)
          setPermisos([])
          setLoading(false)
        }
      }
    }

    load()

    // 🔁 Listener auth
    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      load()
    })

    // 🖱️ Eventos de actividad
    const events = ["click", "keydown", "mousemove"]

    events.forEach((event) => {
      window.addEventListener(event, resetTimer)
    })

    // ⏱️ Intervalo de chequeo
    const interval = setInterval(checkSession, 60000)

    return () => {
      isMounted = false
      listener.subscription.unsubscribe()

      events.forEach((event) => {
        window.removeEventListener(event, resetTimer)
      })

      clearInterval(interval)
    }

  }, [])

  return { user, nombre, rol, permisos, loading }
}