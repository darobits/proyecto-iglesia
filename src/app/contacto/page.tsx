"use client"

import { useState } from "react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  })

  const [enviado, setEnviado] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el email/guardar en una base de datos
    console.log("Formulario enviado:", formData)
    setEnviado(true)
    setFormData({ nombre: "", email: "", asunto: "", mensaje: "" })
    setTimeout(() => setEnviado(false), 5000)
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

          {/* Información de contacto rápida */}
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
                <a href="tel:+541123456789" style={{ color: "var(--gold)", textDecoration: "none" }}>
                  +54 11 2345-6789
                </a>
              </p>
            </div>

            <div className="card-modern">
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>📧 Email</h3>
              <p style={{ marginBottom: 0, color: "var(--text-soft)" }}>
                <a href="mailto:contacto@iglesiagraciagloria.org" style={{ color: "var(--gold)", textDecoration: "none" }}>
                  contacto@iglesia...
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
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  htmlFor="nombre"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: 600,
                    color: "var(--text-main)",
                  }}
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
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
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--gold)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(232, 183, 84, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(232, 183, 84, 0.3)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: 600,
                    color: "var(--text-main)",
                  }}
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
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
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--gold)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(232, 183, 84, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(232, 183, 84, 0.3)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  htmlFor="asunto"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: 600,
                    color: "var(--text-main)",
                  }}
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="asunto"
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
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--gold)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(232, 183, 84, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(232, 183, 84, 0.3)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  htmlFor="mensaje"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: 600,
                    color: "var(--text-main)",
                  }}
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
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
                    fontSize: "1rem",
                    fontFamily: "inherit",
                    resize: "vertical",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--gold)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(232, 183, 84, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(232, 183, 84, 0.3)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "1rem",
                  background: "var(--gold)",
                  color: "var(--text-dark)",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--teal-bright)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(97, 243, 126, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--gold)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                📤 Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
