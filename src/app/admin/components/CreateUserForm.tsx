'use client'

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import PermissionsSelector from "./PermissionsSelector"

export default function CreateUserForm() {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [permisos, setPermisos] = useState<string[]>([])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!nombre || !email || !password) {
      alert("Completar todos los campos")
      return
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })

    if (error) return alert(error.message)

    const userId = data.user?.id
    if (!userId) return alert("Error creando usuario")

    const { error: insertError } = await supabase
      .from("usuarios_admin")
      .insert({
        id: userId,
        email,
        nombre,
        permisos
      })

    if (insertError) return alert(insertError.message)

    alert("Usuario creado correctamente")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Usuario</h2>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="email"
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

      <PermissionsSelector
        selected={permisos}
        setSelected={setPermisos}
      />

      <button type="submit">Crear usuario</button>
    </form>
  )
}