'use client'

import { useState } from "react"
import Sidebar from "./components/Sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="admin-container">

      <Sidebar collapsed={collapsed} />

      {/* BOTÓN */}
      <button
        className={`toggle-btn ${collapsed ? "collapsed" : ""}`}
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? "➡️" : "⬅️"}
      </button>

      {/* CONTENIDO */}
      <div className={`admin-content ${collapsed ? "collapsed" : ""}`}>
        {children}
      </div>

    </div>
  )
}