'use client'

import { useEffect, useState, startTransition } from "react"
import { supabase } from "@/lib/supabase"
import type { UsuarioAdmin } from "@/types/usuario"
import CreateUserForm from "./CreateUserForm"
import ModalConfirm from "./ModalConfirm"

import { useAuth } from "@/hooks/useAuth"
import { usePermissions } from "@/hooks/usePermissions"
import type { Permiso } from "@/lib/permissions"

export default function ListadoUsuarios() {

  const [usuarios, setUsuarios] = useState<UsuarioAdmin[]>([])
  const [userToEdit, setUserToEdit] = useState<UsuarioAdmin | null>(null)
  const [userToDelete, setUserToDelete] = useState<UsuarioAdmin | null>(null)

  // 🔥 FIX CORRECTO (sin tocar useAuth)
  const { permisos: permisosRaw } = useAuth()
  const permisos = permisosRaw as Permiso[]

  const { canEditar, canEliminar } = usePermissions(permisos)

  async function fetchUsuarios() {
    const { data } = await supabase
      .from("usuarios_admin")
      .select("*")

    startTransition(() => {
      setUsuarios(data || [])
    })
  }

  useEffect(() => {
    fetchUsuarios()
  }, [])

  async function eliminarUsuario() {
    if (!canEliminar) {
      alert("No tenés permisos")
      return
    }

    if (!userToDelete) return

    await supabase
      .from("usuarios_admin")
      .delete()
      .eq("id", userToDelete.id)

    setUserToDelete(null)
    fetchUsuarios()
  }

  return (
    <div className="card">

      <CreateUserForm
        userToEdit={userToEdit}
        onSuccess={() => {
          setUserToEdit(null)
          fetchUsuarios()
        }}
        onCancelEdit={() => setUserToEdit(null)}
      />

      <h3 style={{ marginTop: 30 }}>Listado de usuarios</h3>

      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Permisos</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {usuarios.map(u => (
            <tr key={u.id}>
              <td>{u.nombre}</td>
              <td>{u.email}</td>
              <td>
                <span className="badge">{u.rol}</span>
              </td>
              <td>
                {(u.permisos || []).map(p => (
                  <span key={p} className="badge">{p}</span>
                ))}
              </td>
              <td>

                {canEditar && (
                  <button
                    className="btn btn-edit"
                    onClick={() => setUserToEdit(u)}
                  >
                    Editar
                  </button>
                )}

                {canEliminar && (
                  <button
                    className="btn btn-delete"
                    onClick={() => setUserToDelete(u)}
                  >
                    Eliminar
                  </button>
                )}

                {!canEditar && !canEliminar && (
                  <span className="no-perm">Sin permisos</span>
                )}

              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalConfirm
        open={!!userToDelete}
        title="Eliminar usuario"
        description="¿Estás seguro?"
        confirmText="Eliminar"
        cancelText="No"
        onConfirm={eliminarUsuario}
        onCancel={() => setUserToDelete(null)}
      />

    </div>
  )
}