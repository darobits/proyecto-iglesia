export type UsuarioAdmin = {
  id: string
  nombre: string | null
  email: string
  rol: string | null
  permisos: string[]
}