'use client'

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

type Usuario = {
  id: string
  email: string
  rol: string
  permisos: string[]
}

export default function ListadoUsuarios({ tabla = "usuarios_admin" }: { tabla?: string }) {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  // 🔹 FETCH
  async function fetchUsuarios() {
    const { data, error } = await supabase
  .from(tabla)
  .select("*")

    if (error) {
      console.error(error.message)
      return
    }

    setUsuarios(data || [])
  }

  // 🔹 DELETE
  async function eliminarUsuario(id: string) {
    const confirm = window.confirm("¿Eliminar usuario?")
    if (!confirm) return

    const { error } = await supabase
      .from("usuarios_admin")
      .delete()
      .eq("id", id)

    if (error) {
      alert(error.message)
      return
    }

    // 🔥 IMPORTANTE: recargar lista correctamente
    await fetchUsuarios()
  }

  // 🔹 EFFECT LIMPIO
  useEffect(() => {
    let mounted = true

    async function load() {
      if (!mounted) return
      await fetchUsuarios()
    }

    load()

    return () => {
      mounted = false
    }
  }, [])

  return (
    <div>
      <h2>Listado de usuarios</h2>

      <table style={{ width: "100%", marginTop: 20 }}>
        <thead>
          <tr>
            <th style={{ padding: 10 }}>Email</th>
            <th style={{ padding: 10 }}>Rol</th>
            <th style={{ padding: 10 }}>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td style={{ padding: 10 }}>{u.email}</td>
              <td style={{ padding: 10 }}>{u.rol}</td>
              <td style={{ padding: 10 }}>
                <button onClick={() => eliminarUsuario(u.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}