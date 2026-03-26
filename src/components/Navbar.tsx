"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    return pathname === href ? "active" : ""
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link href="/" className="navbar-brand">
            <Image
              src="/images/logo_iglesia.png"
              alt="Logo Iglesia Evangélica Gracia y Gloria"
              width={50}
              height={50}
              priority
            />
            <span className="glow-text d-none d-sm-inline" style={{ color: '#FDFCF8', fontWeight: 700, fontSize: '1rem' }}>
              Iglesia Evangélica Gracia y Gloria
            </span>
            <span className="glow-text d-sm-none" style={{ fontSize: '0.875rem', color: '#FDFCF8' }}>
              Gracia y Gloria
            </span>
          </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Abrir menú de navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className={`nav-link ${isActive('/')}`}>
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/predicas" className={`nav-link ${isActive('/predicas')}`}>
                Prédicas
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/alabanzas" className={`nav-link ${isActive('/alabanzas')}`}>
                Alabanzas
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/nosotros" className={`nav-link ${isActive('/nosotros')}`}>
                Nosotros
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/contacto" className={`nav-link ${isActive('/contacto')}`}>
                Contacto
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
