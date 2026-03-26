"use client"

import GalleryGrid from "@/components/GalleryGrid"

export default function GaleriaPage() {
  // Datos de ejemplo - en el futuro virían de una API o base de datos
  const galeryItems = [
    {
      id: "1",
      src: "/images/galeria/1.jpg",
      alt: "Servicio de culto en la iglesia",
      title: "Culto Dominical",
      date: "2024-01-21",
    },
    {
      id: "2",
      src: "/images/galeria/2.jpg",
      alt: "Grupo de alabanza cantando",
      title: "Alabanza y Adoración",
      date: "2024-01-20",
    },
    {
      id: "3",
      src: "/images/galeria/3.jpg",
      alt: "Comunidad de jóvenes en retiro",
      title: "Retiro de Jóvenes",
      date: "2024-01-15",
    },
    {
      id: "4",
      src: "/images/galeria/4.jpg",
      alt: "Evento de confraternidad",
      title: "Confraternidad",
      date: "2024-01-10",
    },
    {
      id: "5",
      src: "/images/galeria/5.jpg",
      alt: "Clase de estudio bíblico",
      title: "Estudio Bíblico",
      date: "2024-01-08",
    },
    {
      id: "6",
      src: "/images/galeria/6.jpg",
      alt: "Ministerio de bautismos",
      title: "Bautismos",
      date: "2024-01-05",
    },
  ]

  return (
    <div style={{ minHeight: "100vh", paddingTop: "2rem", paddingBottom: "2rem" }}>
      <div className="container">
        {/* Encabezado */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "var(--text-4xl)", fontWeight: 800, marginBottom: "1rem" }}>
            🖼️ Galería
          </h1>
          <p style={{ fontSize: "var(--text-base)", color: "var(--text-soft)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
            Revisa fotografías y momentos especiales de nuestros servicios, eventos y actividades.
            Cada imagen cuenta una historia de fe y comunidad.
          </p>
        </div>

        {/* Galería */}
        {galeryItems.length > 0 ? (
          <div>
            <GalleryGrid items={galeryItems} />
            <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "0.95rem" }}>
              (Las imágenes se mostrarán cuando se agreguen archivos reales)
            </p>
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "3rem",
              background: "rgba(232, 183, 84, 0.05)",
              borderRadius: "12px",
              border: "1px dashed rgba(232, 183, 84, 0.3)",
            }}
          >
            <p style={{ color: "var(--text-soft)", fontSize: "1.1rem" }}>
              Galería en construcción. Pronto compartiremos nuestros momentos especiales.
            </p>
          </div>
        )}

        {/* Invitación a compartir */}
        <div
          style={{
            marginTop: "3rem",
            padding: "2rem",
            background: "rgba(232, 183, 84, 0.08)",
            borderRadius: "12px",
            border: "1px solid rgba(232, 183, 84, 0.2)",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-main)" }}>
            📸 ¿Tienes fotos para compartir?
          </h3>
          <p style={{ color: "var(--text-soft)", fontSize: "1rem", marginBottom: "1rem" }}>
            Si tomaste fotos en alguno de nuestros eventos y deseas compartirlas, contáctanos.
          </p>
          <a
            href="/contacto"
            style={{
              display: "inline-block",
              backgroundColor: "var(--gold)",
              color: "var(--text-dark)",
              textDecoration: "none",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              fontWeight: 700,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--teal-bright)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--gold)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Contactar
          </a>
        </div>
      </div>
    </div>
  )
}
