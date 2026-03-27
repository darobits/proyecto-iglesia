"use client"

import Hero from "@/components/Hero"

export default function Home() {
  const caracteristicas = [
    {
      icon: "",
      titulo: "Predicación Bíblica",
      descripcion: "Enseñanza profunda y relevante de la Palabra de Dios en cada servicio"
    },
    {
      icon: "",
      titulo: "Alabanza Genuina",
      descripcion: "Adoración sincera con coros y música que glorifican a Dios"
    },
    {
      icon: "",
      titulo: "Comunidad Acogedora",
      descripcion: "Un lugar donde todos son bienvenidos y amados por igual"
    },
    {
      icon: "",
      titulo: "Oración Efectiva",
      descripcion: "Se intercede mediante la Oración por las necesidades de los congregados y la comunidad"
    },
  ]

  return (
    <>
      <Hero />

      {/* Sección de Características */}
      <section style={{ paddingTop: "3rem", paddingBottom: "3rem", background: "linear-gradient(180deg, rgba(23, 74, 160, 0.1), rgba(232, 183, 84, 0.05))" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "var(--text-3xl)", fontWeight: 800, marginBottom: "1rem", color: "var(--text-main)" }}>
              ¡Bienvenido a Nuestra Iglesia!
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--text-soft)", maxWidth: "600px", margin: "0 auto" }}>
              Aquí encontrarás un lugar donde se predica la Sana Doctrina para el crecimiento espiritual y mayor comunión con el Señor.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {caracteristicas.map((feature) => (
              <div key={feature.titulo} className="card-modern" style={{ padding: "2rem", textAlign: "center" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                  {feature.titulo}
                </h3>
                <p style={{ color: "var(--text-soft)", lineHeight: 1.6, marginBottom: 0 }}>
                  {feature.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de CTA */}
      <section style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="container">
          <div
            style={{
              background: "linear-gradient(135deg, rgba(232, 183, 84, 0.1), rgba(232, 183, 84, 0.05))",
              borderRadius: "16px",
              border: "2px solid rgba(232, 183, 84, 0.3)",
              padding: "3rem",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "var(--text-2xl)", fontWeight: 800, marginBottom: "1.5rem", color: "var(--text-main)" }}>
              ¡Te Invitamos a Visitarnos!
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-soft)", marginBottom: "2rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
              Nos reunimos todos los domingos a las 9:30 AM y los sábados a las 6:00 PM. 
              Si es tu primera vez, te recibiremos con los brazos abiertos.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="/horarios"
                style={{
                  display: "inline-block",
                  backgroundColor: "var(--gold)",
                  color: "var(--text-dark)",
                  textDecoration: "none",
                  padding: "1rem 2rem",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--teal-bright)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 15px 40px rgba(97, 243, 126, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--gold)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Ver Horarios
              </a>
              <a
                href="/contacto"
                style={{
                  display: "inline-block",
                  border: "2px solid var(--gold)",
                  color: "var(--gold)",
                  textDecoration: "none",
                  padding: "0.85rem 2rem",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(232, 183, 84, 0.15)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Contactarnos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Últimos Contenidos */}
      <section style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="container">
          <h2 style={{ fontSize: "var(--text-3xl)", fontWeight: 800, marginBottom: "2rem", textAlign: "center", color: "var(--text-main)" }}>
            Exploración de Contenidos
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              { titulo: "Prédicas", descripcion: "Predicas con audio para descargar", link: "/predicas" },
              { titulo: "Alabanzas", descripcion: "Alabanzas para adoración", link: "/alabanzas" },
              { titulo: "Doctrina", descripcion: "Nuestras creencias fundamentales", link: "/doctrina" },
            ].map((item) => (
              <a
                key={item.titulo}
                href={item.link}
                style={{
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
              >
                <div className="card-modern" style={{ padding: "1.5rem", textAlign: "center", height: "100%" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--text-main)" }}>
                    {item.titulo}
                  </h3>
                  <p style={{ color: "var(--text-soft)", fontSize: "0.95rem", marginBottom: 0 }}>
                    {item.descripcion}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
