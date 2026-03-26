import AudioPlayer from "@/components/AudioPlayer"

export default function AlabanzasPage() {
  // Datos de ejemplo - en el futuro virían de una API o base de datos
  const alabanzas = [
    {
      id: 1,
      title: "Tu Gracia me Sustenta",
      artist: "Coro de la Iglesia Evangélica Gracia y Gloria",
      date: "2024-01-20",
      audioUrl: "/audios/alabanza-1.mp3",
      description: "Una hermosa alabanza que expresa nuestra dependencia de la gracia de Dios en todo momento.",
    },
    {
      id: 2,
      title: "Gloria a Dios en las Alturas",
      artist: "Conjunto de Alabanza",
      date: "2024-01-15",
      audioUrl: "/audios/alabanza-2.mp3",
      description: "Alabanza clásica que exalta la grandeza y majestad de nuestro Señor.",
    },
    {
      id: 3,
      title: "Jesús, Luz del Mundo",
      artist: "Coro de la Iglesia Evangélica Gracia y Gloria",
      date: "2024-01-10",
      audioUrl: "/audios/alabanza-3.mp3",
      description: "Una composición contemporánea que celebra a Jesús como la luz que nos guía.",
    },
  ]

  return (
    <div style={{ minHeight: "100vh", paddingTop: "2rem", paddingBottom: "2rem" }}>
      <div className="container">
        {/* Encabezado */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "var(--text-4xl)", fontWeight: 800, marginBottom: "1rem", color: "var(--text-main)" }}>
            🎵 Alabanzas
          </h1>
          <p style={{ fontSize: "var(--text-base)", color: "var(--text-soft)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
            Disfruta de nuestras alabanzas y coros. Cada canción es una expresión de amor y devoción
            hacia nuestro Señor Jesús.
          </p>
        </div>

        {/* Grid de alabanzas */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
            gap: "2rem",
          }}
        >
          {alabanzas.map((alabanza) => (
            <AudioPlayer
              key={alabanza.id}
              title={alabanza.title}
              artist={alabanza.artist}
              date={alabanza.date}
              audioUrl={alabanza.audioUrl}
              description={alabanza.description}
            />
          ))}
        </div>

        {/* Mensaje si no hay alabanzas */}
        {alabanzas.length === 0 && (
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
              Próximamente nuevas alabanzas para tu deleite espiritual.
            </p>
          </div>
        )}

        {/* Info adicional */}
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
          <p style={{ color: "var(--text-soft)", fontSize: "0.95rem", marginBottom: 0 }}>
            Todas nuestras alabanzas son para glorificar a Dios. Si deseas colaborar con nuevas composiciones
            o quieres formar parte de nuestro coro, contacta con nosotros.
          </p>
        </div>
      </div>
    </div>
  )
}
