"use client"

export default function HorariosPage() {
  const horarios = [
    //{ dia: "Lunes a Vibrnes", evento: "Oración de la mañana", hora: "6:30 AM", icon: "🙏" },
    //{ dia: "Miércoles", evento: "Estudio bíblico", hora: "19:30", icon: "📖" },
    //{ dia: "Viernes", evento: "Grupo de jóvenes", hora: "19:00", icon: "👥" },
    { dia: "Sábado", evento: "Encuentro de adoración", hora: "17:30 - 19:00", icon: "⭐" },
    { dia: "Domingo", evento: "Servicio principal", hora: "9:30 - 11:00", icon: "⛪" },
    //{ dia: "Domingo", evento: "Servicio vespertino", hora: "18:00", icon: "🌙" },
  ]

  return (
    <div style={{ minHeight: "100vh", paddingTop: "2rem", paddingBottom: "2rem" }}>
      <div className="container">
        {/* Encabezado */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "var(--text-4xl)", fontWeight: 800, marginBottom: "1rem" }}>
            ⏰ Horarios de Servicios
          </h1>
          <p style={{ fontSize: "var(--text-base)", color: "var(--text-soft)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
            Aquí encontrarás los horarios de todos nuestros servicios y actividades. ¡Te esperamos!
          </p>
        </div>

        {/* Tabla de horarios */}
        <div className="card-modern" style={{ padding: "2rem", overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "1rem",
            }}
          >
            <thead>
              <tr
                style={{
                  borderBottom: "2px solid rgba(232, 183, 84, 0.3)",
                  background: "rgba(232, 183, 84, 0.08)",
                }}
              >
                <th style={{ padding: "1rem", textAlign: "left", fontWeight: 700, color: "var(--gold)" }}>
                  Icono
                </th>
                <th style={{ padding: "1rem", textAlign: "left", fontWeight: 700, color: "var(--gold)" }}>
                  Día
                </th>
                <th style={{ padding: "1rem", textAlign: "left", fontWeight: 700, color: "var(--gold)" }}>
                  Evento
                </th>
                <th style={{ padding: "1rem", textAlign: "left", fontWeight: 700, color: "var(--gold)" }}>
                  Hora
                </th>
              </tr>
            </thead>
            <tbody>
              {horarios.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    borderBottom: "1px solid rgba(232, 183, 84, 0.2)",
                    background: index % 2 === 0 ? "rgba(232, 183, 84, 0.03)" : "transparent",
                    transition: "background 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(232, 183, 84, 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = index % 2 === 0 ? "rgba(232, 183, 84, 0.03)" : "transparent";
                  }}
                >
                  <td style={{ padding: "1rem", fontSize: "1.5rem" }}>{item.icon}</td>
                  <td style={{ padding: "1rem", color: "var(--text-soft)" }}>
                    <strong>{item.dia}</strong>
                  </td>
                  <td style={{ padding: "1rem", color: "var(--text-soft)" }}>{item.evento}</td>
                  <td style={{ padding: "1rem", color: "var(--gold)", fontWeight: 700 }}>
                    {item.hora}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Información adicional */}
        <div
          style={{
            display: "grid",
            grdTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginTop: "3rem",
          }}
        >
          <div className="card-modern" style={{ padding: "2rem" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", color: "var(--gold)" }}>
              📞 ¿Preguntas?
            </h3>
            <p style={{ marginBottom: "1rem", color: "var(--text-soft)" }}>
              Si tienes dudas sobre nuestros horarios o necesitas más información, no dudes en contactarnos.
            </p>
            <a
              href="/contacto"
              style={{
                display: "inline-block",
                color: "var(--gold)",
                textDecoration: "none",
                fontWeight: 700,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateX(5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              Contáctanos →
            </a>
          </div>

          <div className="card-modern" style={{ padding: "2rem" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", color: "var(--gold)" }}>
              📍 Ubicación
            </h3>
            <p style={{ marginBottom: "0.5rem", color: "var(--text-soft)" }}>
              <strong>Roberto Arlt 3292</strong>
            </p>
            <p style={{ marginBottom: 0, color: "var(--text-soft)" }}>
              Libertad – Merlo
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
