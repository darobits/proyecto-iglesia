'use client'

import { PERMISOS, type Permiso } from "@/lib/permissions"

type Props = {
  selected: Permiso[]
  setSelected: (permissions: Permiso[]) => void
}

const labels: Record<Permiso, string> = {
  crear: "Puede crear usuarios",
  editar: "Puede editar prédicas y alabanzas",
  eliminar: "Puede eliminar prédicas y alabanzas",
  subir_predicas: "Puede subir prédicas",
  subir_alabanzas: "Puede subir alabanzas",
  gestionar_usuarios: "Puede editar y eliminar usuarios"
}

export default function PermissionsSelector({ selected, setSelected }: Props) {

  function toggle(p: Permiso) {
    const has = selected.includes(p)

    let next: Permiso[]

    if (has) {
      // ❌ QUITAR
      next = selected.filter(x => x !== p)

      // 🔗 reglas de dependencia
      if (p === PERMISOS.CREAR) {
        next = next.filter(x => x !== PERMISOS.GESTIONAR_USUARIOS)
      }

      if (p === PERMISOS.GESTIONAR_USUARIOS) {
        next = next.filter(x => x !== PERMISOS.CREAR)
      }

    } else {
      // ➕ AGREGAR (sin duplicar)
      next = [...selected, p]

      if (p === PERMISOS.CREAR && !next.includes(PERMISOS.GESTIONAR_USUARIOS)) {
        next = [...next, PERMISOS.GESTIONAR_USUARIOS]
      }

      if (p === PERMISOS.GESTIONAR_USUARIOS && !next.includes(PERMISOS.CREAR)) {
        next = [...next, PERMISOS.CREAR]
      }
    }

    // 🧼 limpiar duplicados por seguridad
    const unique = Array.from(new Set(next))

    setSelected(unique)
  }

  return (
    <div className="permisos-grid">
      {Object.values(PERMISOS).map((p) => (
        <label key={p} className="perm-item">
          <input
            type="checkbox"
            checked={selected.includes(p)}
            onChange={() => toggle(p)}
          />
          <span>{labels[p]}</span>
        </label>
      ))}
    </div>
  )
}