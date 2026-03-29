"use client"

import Link from "next/link"
import { Mail } from "lucide-react"
import { FaYoutube, FaWhatsapp } from "react-icons/fa"

export default function Footer() {

  return (

    <footer className="site-footer">

      <div className="container">

        <div className="row g-4">

          {/* =========================
              SOBRE NOSOTROS
          ========================= */}
          <div className="col-md-6 col-lg-3">

            <h3 className="footer-title">
              Iglesia Evangélica Gracia y Gloria
            </h3>

            <p className="footer-text">
              Un espacio dedicado a la predicación del evangelio,
              la enseñanza de la Palabra de Dios y la edificación
              espiritual de la congregación.
            </p>

            <p className="footer-text-small">
              <strong>Registro Nacional de Cultos:</strong> N° 8671
            </p>

          </div>


          {/* =========================
              UBICACIÓN
          ========================= */}
          <div className="col-md-6 col-lg-3">

            <h3 className="footer-title">Ubicación</h3>

            <p className="footer-text">
              Roberto Arlt 3292 <br />
              Libertad – Merlo <br />
              Provincia de Buenos Aires
            </p>

          </div>


          {/* =========================
              ENLACES
          ========================= */}
          <div className="col-md-6 col-lg-3">

            <h3 className="footer-title">Enlaces</h3>

            <ul className="footer-links">

              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/predicas">Prédicas</Link></li>
              <li><Link href="/alabanzas">Alabanzas</Link></li>
              <li><Link href="/nosotros">Sobre Nosotros</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
              <li><Link href="/anuncios">Anuncios</Link></li>

            </ul>

          </div>


          {/* =========================
              REDES
          ========================= */}
          <div className="col-md-6 col-lg-3">

            <h3 className="footer-title">Conéctate</h3>

            <p className="footer-text">
              Podés comunicarte con nosotros a través de los siguientes medios
            </p>

            <div className="footer-socials">

  {/* YOUTUBE */}
  <a
    href="https://youtube.com"
    target="_blank"
    rel="noopener noreferrer"
    title="YouTube"
    className="social-icon youtube"
  >
    <FaYoutube size={20} />
  </a>

  {/* WHATSAPP */}
  <a
    href="https://wa.me/5491126295207"
    target="_blank"
    rel="noopener noreferrer"
    title="WhatsApp"
    className="social-icon whatsapp"
  >
    <FaWhatsapp size={20} />
  </a>

  {/* EMAIL */}
  <a
    href="https://mail.google.com/mail/?view=cm&to=iglesiaevangelica.graciaygloria@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    title="Email"
    className="social-icon gmail"
  >
    <Mail size={20} />
  </a>

</div>

          </div>

        </div>


        {/* =========================
            VERSÍCULO
        ========================= */}
        <div className="footer-verse">

          <p className="footer-verse-text">
            “Jesucristo es el mismo ayer, y hoy, y por los siglos.”
          </p>

          <p className="footer-verse-ref">
            — Hebreos 13:8
          </p>

        </div>


        {/* =========================
            COPYRIGHT
        ========================= */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Iglesia Evangélica Gracia y Gloria
          </p>

          <p className="footer-copy-small">
            Diseñado para la gloria de Dios
          </p>

        </div>

      </div>

    </footer>

  )
}