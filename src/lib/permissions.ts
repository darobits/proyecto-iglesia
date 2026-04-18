export const PERMISOS = {
  CREAR: "crear",
  EDITAR: "editar",
  ELIMINAR: "eliminar",
  SUBIR_PREDICAS: "subir_predicas",
  SUBIR_ALABANZAS: "subir_alabanzas",
  GESTIONAR_USUARIOS: "gestionar_usuarios",
} as const

export type Permiso = typeof PERMISOS[keyof typeof PERMISOS]