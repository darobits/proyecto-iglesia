'use client'

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import type { FormEvent } from "react"

export default function CreateUserForm() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [rol, setRol] = useState<string>("editor")
  const [permisos, setPermisos] = useState<string[]>([])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })

    if (error) {
      alert(error.message)
      return
    }

    const userId = data.user?.id

    if (!userId) {
      alert("Error creando usuario")
      return
    }

    const { error: insertError } = await supabase
      .from("usuarios_admin")
      .insert({
        id: userId,
        email,
        rol,
        permisos
      })

    if (insertError) {
      alert(insertError.message)
      return
    }

    alert("Usuario creado correctamente")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Usuario</h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      <select value={rol} onChange={(e) => setRol(e.target.value)}>
        <option value="editor">Editor</option>
        <option value="admin">Admin</option>
      </select>

      <button type="submit">Crear usuario</button>
    </form>
  )
}