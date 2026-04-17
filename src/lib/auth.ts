import { supabase } from "./supabase"

export async function getUserWithRole() {
  const { data: userData } = await supabase.auth.getUser()

  if (!userData.user) return null

  const { data } = await supabase
    .from("usuarios_admin")
    .select("rol, permisos")
    .eq("id", userData.user.id)
    .single()

  return {
    user: userData.user,
    rol: data?.rol,
    permisos: data?.permisos || []
  }
}