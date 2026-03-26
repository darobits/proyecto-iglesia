"use client"

export default function DoctrináPage() {
  const creencias = [
    {
      titulo: "La Biblia",
      descripcion: "Creemos que la Biblia es la Palabra de Dios inspirada, inerrable e infalible, y es la autoridad suprema en todos los asuntos de fe y práctica.",
      ref: "2 Timoteo 3:16-17",
    },
    {
      titulo: "Un Dios Trino",
      descripcion: "Creemos en un solo Dios revelado en tres personas: Padre, Hijo y Espíritu Santo. Cada persona de la Trinidad es completamente Dios y existe eternamente.",
      ref: "1 Juan 5:7",
    },
    {
      titulo: "Jesucristo",
      descripcion: "Creemos en Jesucristo como el Hijo unigénito de Dios, concebido por el Espíritu Santo, nacido de la virgen María, murió por nuestros pecados, resucitó al tercer día y ascendió a los cielos.",
      ref: "Romanos 8:31-34",
    },
    {
      titulo: "La Salvación",
      descripcion: "Creemos que la salvación es por gracia a través de la fe en Jesucristo. Todos hemos pecado y merecemos la muerte, pero Dios nos ofrece la vida eterna como regalo.",
      ref: "Efesios 2:8-9",
    },
    {
      titulo: "El Espíritu Santo",
      descripcion: "Creemos en la continua obra del Espíritu Santo en la vida del creyente, que nos capacita, fortalece, guía y transforma a la imagen de Cristo.",
      ref: "Hechos 1:8",
    },
    {
      titulo: "La Iglesia",
      descripcion: "Creemos que la iglesia es el cuerpo de Cristo, compuesta por todos los verdaderos creyentes, cuyo propósito es glorificar a Dios y alcanzar al mundo con el evangelio.",
      ref: "Efesios 1:22-23",
    },
    {
      titulo: "Los Últimos Tiempos",
      descripcion: "Creemos en la Segunda Venida de Jesucristo, la resurrección de los muertos, el juicio final y la eternidad tanto para los creyentes como para los no creyentes.",
      ref: "Apocalipsis 21:1-4",
    },
  ]

  return (
    <div style={{ minHeight: "100vh", paddingTop: "2rem", paddingBottom: "2rem" }}>
      <div className="container">
        {/* Encabezado */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "var(--text-4xl)", fontWeight: 800, marginBottom: "1rem" }}>
            ⛪ Nuestra Doctrina
          </h1>
          <p style={{ fontSize: "var(--text-base)", color: "var(--text-soft)", maxWidth: "700px", margin: "0 auto", lineHeight: 1.8 }}>
            Estos son los principios fundamentales de nuestra fe basados en la Palabra de Dios, que nos guían como iglesia evangélica.
          </p>
        </div>

        {/* Introducción */}
        <div className="card-modern" style={{ padding: "2rem", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", color: "var(--gold)" }}>
            Fundamento de Nuestra Fe
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-soft)", marginBottom: "1rem" }}>
            La Iglesia Evangélica Gracia y Gloria se fundamenta en las enseñanzas de la Biblia y en los principios básicos de la fe evangélica protestante.
            Creemos que Jesucristo es el centro de todo lo que hacemos y enseñamos.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-soft)" }}>
            Nuestras creencias nos motivan a vivir una vida de devoción a Dios, servicio a los demás y proclamación del evangelio a todo el mundo.
          </p>
        </div>

        {/* Creencias principales */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {creencias.map((creencia, index) => (
            <div
              key={index}
              className="card-modern"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem", textAlign: "center" }}>
                {index === 0 && "📖"}
                {index === 1 && "👼"}
                {index === 2 && "🕊️"}
                {index === 3 && "💝"}
                {index === 4 && "🔥"}
                {index === 5 && "👥"}
                {index === 6 && "⭐"}
              </div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--gold)" }}>
                {creencia.titulo}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "var(--text-soft)",
                  marginBottom: "1rem",
                  flex: 1,
                }}
              >
                {creencia.descripcion}
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-muted)",
                  fontStyle: "italic",
                  marginBottom: 0,
                  paddingTop: "1rem",
                  borderTop: "1px solid rgba(232, 183, 84, 0.2)",
                }}
              >
                <strong>Referencia bíblica:</strong> {creencia.ref}
              </p>
            </div>
          ))}
        </div>

        {/* Declaración de fe */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(232, 183, 84, 0.1), rgba(232, 183, 84, 0.05))",
            borderRadius: "12px",
            border: "2px solid rgba(232, 183, 84, 0.3)",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "1.5rem", color: "var(--gold)" }}>
            ✨ Nuestra Declaración de Fe
          </h2>
          <div
            style={{
              fontSize: "1.1rem",
              lineHeight: 2,
              color: "var(--text-soft)",
              fontStyle: "italic",
              marginBottom: 0,
            }}
          >
            <p>
              "Creemos que Jesucristo es la respuesta a todos los problemas de la humanidad.<br />
              A través de Él, tenemos salvación, redención, transformación y esperanza eterna."
            </p>
            <p style={{ marginTop: "1.5rem", fontSize: "0.95rem", color: "var(--text-muted)" }}>
              Jesucristo es el mismo ayer, y hoy, y por los siglos. — Hebreos 13:8
            </p>
          </div>
        </div>

        {/* Llamado a la acción */}
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
          <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-main)" }}>
            ¿Quieres saber más?
          </h3>
          <p style={{ color: "var(--text-soft)", fontSize: "1rem", marginBottom: "1.5rem" }}>
            Si deseas profundizar más en nuestras creencias doctrinales o tienes preguntas, te invitamos a nuestras clases de estudio bíblico.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/horarios"
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
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--gold)";
                e.currentTarget.style.transform = "translateY(0)";
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
                padding: "0.65rem 1.5rem",
                borderRadius: "8px",
                fontWeight: 700,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(232, 183, 84, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              Contactarnos
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
