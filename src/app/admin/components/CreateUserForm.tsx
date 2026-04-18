'use client'

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import PermissionsSelector from "./PermissionsSelector"
import type { UsuarioAdmin } from "@/types/usuario"
import type { Permiso } from "@/lib/permissions"

import { useAuth } from "@/hooks/useAuth"
import { usePermissions } from "@/hooks/usePermissions"

type Props = {
  userToEdit?: UsuarioAdmin | null
  onSuccess: () => void
  onCancelEdit?: () => void
}

export default function CreateUserForm({
  userToEdit,
  onSuccess,
  onCancelEdit
}: Props) {

  const [nombre, setNombre] = useState(userToEdit?.nombre ?? "")
  const [email, setEmail] = useState(userToEdit?.email ?? "")
  const [password, setPassword] = useState("")
  const [permisos, setPermisos] = useState<Permiso[]>(
    (userToEdit?.permisos as Permiso[]) ?? []
  )

  const { permisos: userPermisosRaw } = useAuth()

  const userPermisos = userPermisosRaw as Permiso[]

  const { canGestionarUsuarios } = usePermissions(userPermisos)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!canGestionarUsuarios) {
      alert("No tenés permisos para gestionar usuarios")
      return
    }

    if (!nombre || !email) {
      alert("Completar todos los campos")
      return
    }

    if (userToEdit) {
      const { error } = await supabase
        .from("usuarios_admin")
        .update({ nombre, email, permisos })
        .eq("id", userToEdit.id)

      if (error) return alert(error.message)

      alert("Usuario actualizado")
    } else {
      if (!password) return alert("Password obligatorio")

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
          nombre,
          email,
          rol: "usuario",
          permisos
        })

      if (insertError) return alert(insertError.message)

      alert("Usuario creado")
    }

    onSuccess()
  }

  return (
    <div className="card">
      <h3>{userToEdit ? "Editar usuario" : "Crear usuario"}</h3>

      <form onSubmit={handleSubmit} className="form">

        <div className="form-grid">
          <input value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" />
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />

          {!userToEdit && (
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
          )}
        </div>

        <div className="permisos">
          <PermissionsSelector
            selected={permisos}
            setSelected={setPermisos}
          />
        </div>

        <div className="form-actions">
          <button className="btn btn-edit" type="submit">
            {userToEdit ? "Editar usuario" : "Crear usuario"}
          </button>

          {userToEdit && (
            <button type="button" onClick={onCancelEdit} className="btn btn-delete">
              Cancelar
            </button>
          )}
        </div>

      </form>
    </div>
  )
}