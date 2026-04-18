'use client'

import { PERMISOS, type Permiso } from "@/lib/permissions"

export function usePermissions(userPermisos: Permiso[]) {

  function has(p: Permiso): boolean {
    return userPermisos.includes(p)
  }

  return {
    canCrearUsuarios: has(PERMISOS.CREAR),
    canGestionarUsuarios: has(PERMISOS.GESTIONAR_USUARIOS),
    canEditar: has(PERMISOS.EDITAR),
    canEliminar: has(PERMISOS.ELIMINAR),
    canSubirPredicas: has(PERMISOS.SUBIR_PREDICAS),
    canSubirAlabanzas: has(PERMISOS.SUBIR_ALABANZAS),
  }
}