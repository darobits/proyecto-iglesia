"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  })

  const [enviado, setEnviado] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_AUTOREPLY!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      setEnviado(true)
      setFormData({ nombre: "", email: "", asunto: "", mensaje: "" })

      setTimeout(() => setEnviado(false), 5000)

    } catch (error) {
      console.error("Error enviando email:", error)
      alert("Hubo un error al enviar el mensaje")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: "100vh", paddingTop: "2rem", paddingBottom: "2rem" }}>
      <div className="container">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>

          {/* Encabezado */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h1 style={{ fontSize: "var(--text-4xl)", fontWeight: 800, marginBottom: "1rem", color: "var(--text-main)" }}>
              ✉️ Contacto
            </h1>
            <p style={{ fontSize: "var(--text-base)", color: "var(--text-soft)", lineHeight: 1.8 }}>
              ¿Tienes una pregunta o deseas comunicarte con nosotros?
              <br />
              Utiliza el formulario a continuación y nos pondremos en contacto pronto.
            </p>
          </div>

          {/* Info */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            <div className="card-modern">
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>📍 Ubicación</h3>
              <p style={{ marginBottom: 0, color: "var(--text-soft)" }}>
                Roberto Arlt 3292<br />
                Libertad – Merlo
              </p>
            </div>

            <div className="card-modern">
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>📞 Teléfono</h3>
              <p style={{ marginBottom: 0, color: "var(--text-soft)" }}>
                <a href="tel:+541126295207" style={{ color: "var(--gold)", textDecoration: "none" }}>
                  +54 11 2629-5207
                </a>
              </p>
            </div>

            <div className="card-modern" style={{ minHeight: "130px", alignItems: "flex-start", gap: "0.5rem" }}>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>📧 Email</h3>
              <p style={{ marginBottom: 0, color: "var(--text-soft)", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
                <a href="mailto:contacto@iglesiagraciagloria.org" style={{ color: "var(--gold)", textDecoration: "none" }}>
                  iglesiaevangelica.graciaygloria@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Formulario */}
          <div className="card-modern" style={{ padding: "2rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", fontWeight: 700, color: "var(--gold)" }}>
              Envíanos un mensaje
            </h2>

            {enviado && (
              <div
                style={{
                  background: "rgba(97, 243, 126, 0.1)",
                  border: "1px solid rgba(97, 243, 126, 0.3)",
                  color: "var(--teal-bright)",
                  padding: "1rem",
                  borderRadius: "8px",
                  marginBottom: "1.5rem",
                }}
              >
                ✅ ¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.
              </div>
            )}

            <form onSubmit={handleSubmit}>

              {/* NOMBRE */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, color: "var(--text-main)" }}>
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    border: "1px solid rgba(232, 183, 84, 0.3)",
                    borderRadius: "8px",
                    background: "rgba(9, 53, 100, 0.5)",
                    color: "var(--text-main)",
                  }}
                />
              </div>

              {/* EMAIL */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, color: "var(--text-main)" }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    border: "1px solid rgba(232, 183, 84, 0.3)",
                    borderRadius: "8px",
                    background: "rgba(9, 53, 100, 0.5)",
                    color: "var(--text-main)",
                  }}
                />
              </div>

              {/* ASUNTO */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, color: "var(--text-main)" }}>
                  Asunto
                </label>
                <input
                  type="text"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    border: "1px solid rgba(232, 183, 84, 0.3)",
                    borderRadius: "8px",
                    background: "rgba(9, 53, 100, 0.5)",
                    color: "var(--text-main)",
                  }}
                />
              </div>

              {/* MENSAJE */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, color: "var(--text-main)" }}>
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  rows={6}
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    border: "1px solid rgba(232, 183, 84, 0.3)",
                    borderRadius: "8px",
                    background: "rgba(9, 53, 100, 0.5)",
                    color: "var(--text-main)",
                  }}
                />
              </div>

              {/* BOTÓN */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  padding: "1rem",
                  background: "var(--gold)",
                  color: "var(--text-dark)",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {loading ? "Enviando..." : "📤 Enviar Mensaje"}
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}