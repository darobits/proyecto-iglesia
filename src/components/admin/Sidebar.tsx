"use client"

import { usePathname, useRouter } from "next/navigation"

export default function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()

  const Item = ({ label, path }: { label: string, path: string }) => (
    <div
      onClick={() => router.push(path)}
      className={`sidebar-item ${pathname === path ? "active" : ""}`}
    >
      {label}
    </div>
  )

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Admin</h2>

      <Item label="Predicas" path="/admin/predicas" />
      <Item label="Alabanzas" path="/admin/alabanzas" />
    </aside>
  )
}