import { supabase } from "./supabase"

export type UsuarioAdmin = {
  nombre: string | null
  rol: string | null
  permisos: string[]
}

export async function getUserWithRole() {
  const { data: userData } = await supabase.auth.getUser()

  if (!userData.user) return null

  const { data } = await supabase
    .from("usuarios_admin")
    .select("nombre, rol, permisos")
    .eq("id", userData.user.id)
    .single()

  return {
    user: userData.user,
    nombre: data?.nombre || null,
    rol: data?.rol || null,
    permisos: data?.permisos || []
  }
}