import SermonCard from "@/components/SermonCard"

export default function PredicasPage() {
  // Datos de ejemplo - en el futuro virían de una base de datos
  const sermones = [
    {
      id: 1,
      title: "La fe sin obras está muerta",
      date: "2024-01-15",
      speaker: "Pastor Juan García",
      description: "Una reflexión profunda sobre la importancia de la fe activa y cómo nuestras acciones demuestran nuestra relación con Dios.",
      tags: ["Fe", "Acción", "Testimonio"],
      audioUrl: "/audios/sermon-1.mp3",
    },
    {
      id: 2,
      title: "La paz de Dios que sobrepasa todo entendimiento",
      date: "2024-01-08",
      speaker: "Pastor Carlos López",
      description: "Exploramos cómo la paz de Dios nos protege y sustenta en tiempos de dificultad.",
      tags: ["Paz", "Confianza", "Protección"],
      audioUrl: "/audios/sermon-2.mp3",
    },
    {
      id: 3,
      title: "Arrepentimiento y renovación",
      date: "2024-01-01",
      speaker: "Pastor Juan García",
      description: "Un mensaje sobre la transformación personal a través del arrepentimiento genuino.",
      tags: ["Arrepentimiento", "Transformación", "Esperanza"],
      audioUrl: "/audios/sermon-3.mp3",
    },
  ]

  return (
    <div style={{ minHeight: "100vh", paddingTop: "2rem", paddingBottom: "2rem" }}>
      <div className="container">
        {/* Encabezado */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "var(--text-4xl)", fontWeight: 800, marginBottom: "1rem", color: "var(--text-main)" }}>
            📖 Prédicas
          </h1>
          <p style={{ fontSize: "var(--text-base)", color: "var(--text-soft)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
            Accede a nuestras prédicas más recientes. Cada mensaje está diseñado para edificar tu fe
            y acercarte más a la Palabra de Dios.
          </p>
        </div>

        {/* Grid de sermones */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "2rem",
          }}
        >
          {sermones.map((sermon) => (
            <SermonCard
              key={sermon.id}
              title={sermon.title}
              date={sermon.date}
              speaker={sermon.speaker}
              description={sermon.description}
              tags={sermon.tags}
              audioUrl={sermon.audioUrl}
            />
          ))}
        </div>

        {/* Mensaje si no hay sermones */}
        {sermones.length === 0 && (
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
              Próximamente nuevas prédicas para tu edificación espiritual.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
