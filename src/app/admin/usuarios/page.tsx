'use client'

import CreateUserForm from "../components/CreateUserForm"
import ListadoUsuarios from "../components/ListadoUsuarios"

export default function UsuariosPage() {
  return (
    <div>
      <h1 style={{ marginBottom: 20 }}>Usuarios</h1>

      <div className="card">
        <CreateUserForm />
      </div>

      <div style={{ marginTop: 30 }} className="card">
        <ListadoUsuarios />
      </div>
    </div>
  )
}