import AnnouncementCard from "@/components/AnnouncementCard"

export default function AnunciosPage() {
  // Datos de ejemplo - en el futuro virían de una base de datos
  const anuncios = [
    {
      id: 1,
      title: "Servicio especial de alabanza este domingo",
      date: "2024-01-25",
      category: "Evento",
      icon: "🎉",
      content: "Te invitamos a un servicio especial de alabanza este domingo a las 18:00. Nuestro coro presentará canciones especiales de adoración. ¡No te lo pierdas!",
      link: "/contacto",
      linkText: "Obtener más información",
    },
    {
      id: 2,
      title: "Clases de estudio bíblico entre semana",
      date: "2024-01-20",
      category: "Educación",
      icon: "📚",
      content: "Iniciamos nuevas clases de estudio bíblico los miércoles a las 19:30. Serán sesiones interactivas donde profundizaremos en la Wordode Dios. Todos son bienvenidos.",
      link: "/contacto",
      linkText: "Inscríbete",
    },
    {
      id: 3,
      title: "Campaña de ayuda a la comunidad",
      date: "2024-01-18",
      category: "Comunidad",
      icon: "🤝",
      content: "Estamos recolectando alimentos y útiles escolares para familias en necesidad. Si deseas contribuir, contacta con nosotros. Juntos podemos hacer la diferencia.",
      link: "/contacto",
      linkText: "Participar",
    },
    {
      id: 4,
      title: "Retiro de jóvenes en la montaña",
      date: "2024-01-15",
      category: "Retiro",
      icon: "⛰️",
      content: "Los jóvenes de 15 a 25 años están invitados a nuestro retiro especial el fin de semana del 3 y 4 de febrero. Un fin de semana de crecimiento espiritual, amistad y diversión.",
      link: "/contacto",
      linkText: "Registrarse",
    },
  ]

  return (
    <div style={{ minHeight: "100vh", paddingTop: "2rem", paddingBottom: "2rem" }}>
      <div className="container">
        {/* Encabezado */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "var(--text-4xl)", fontWeight: 800, marginBottom: "1rem" }}>
            📢 Anuncios
          </h1>
          <p style={{ fontSize: "var(--text-base)", color: "var(--text-soft)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
            Mantente informado sobre los eventos y actividades más importantes de nuestra iglesia.
            Aquí encontrarás todo lo que necesitas saber.
          </p>
        </div>

        {/* Lista de anuncios */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "2rem",
          }}
        >
          {anuncios.map((anuncio) => (
            <AnnouncementCard
              key={anuncio.id}
              title={anuncio.title}
              date={anuncio.date}
              content={anuncio.content}
              category={anuncio.category}
              icon={anuncio.icon}
              link={anuncio.link}
              linkText={anuncio.linkText}
            />
          ))}
        </div>

        {/* Mensaje si no hay anuncios */}
        {anuncios.length === 0 && (
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
              No hay anuncios en este momento. Suscríbete a nuestro boletín para estar siempre informado.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
