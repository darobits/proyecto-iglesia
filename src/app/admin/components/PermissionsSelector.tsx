'use client'

import { PERMISOS } from "@/lib/permissions"

interface PermissionsSelectorProps {
  selected: string[]
  setSelected: (permissions: string[]) => void
}

export default function PermissionsSelector({ selected, setSelected }: PermissionsSelectorProps) {

  function toggle(permiso: string): void {
    if (selected.includes(permiso)) {
      setSelected(selected.filter((p: string) => p !== permiso))
    } else {
      setSelected([...selected, permiso])
    }
  }

  return (
    <div>
      <h3>Permisos</h3>

      {Object.values(PERMISOS).map((permiso: string) => (
        <label key={permiso} style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={selected.includes(permiso)}
            onChange={() => toggle(permiso)}
          />
          {permiso}
        </label>
      ))}
    </div>
  )
}