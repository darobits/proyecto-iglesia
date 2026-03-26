"use client"

export default function NosotrosPage() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: "2rem", paddingBottom: "2rem" }}>
      <div className="container">
        {/* Encabezado */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "var(--text-4xl)", fontWeight: 800, marginBottom: "1rem", color: "var(--text-main)" }}>
            👥 Sobre Nosotros
          </h1>
          <p style={{ fontSize: "var(--text-base)", color: "var(--text-soft)", maxWidth: "700px", margin: "0 auto", lineHeight: 1.8 }}>
            Conoce la historia, misión y actividades de la Iglesia Evangélica Gracia y Gloria.
          </p>
        </div>

        {/* Sección: Nuestra Historia */}
        <div style={{ marginBottom: "3rem" }}>
          <div className="card-modern" style={{ padding: "2rem" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1.5rem", color: "var(--gold)" }}>
              📖 Origen y Fundación
            </h2>
            
            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--text-main)" }}>
                El Comienzo en Kansas City (Siglo XX)
              </h3>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-soft)" }}>
                La historia de la Iglesia Gracia y Gloria comienza a principios del siglo XX en Kansas City, Missouri (EE. UU.), bajo el liderazgo del hermano Albert Sidney Copley, fervoroso predicador del evangelio. Copley recibió una visión clara de parte de Dios: edificar un ministerio espiritual fundado en la predicación con autoridad y la manifestación del Espíritu Santo.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--text-main)" }}>
                Una Prueba de Fe Divina (Julio 1, 1922)
              </h3>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-soft)" }}>
                Una severa tormenta eléctrica ocurrió en Kansas City la noche del 1 de julio de 1922, justo después de la llegada de instrumentos y recursos para la iglesia. Sin embargo, en la mañana siguiente se encontró que todo estaba intacto — el edificio y los instrumentos permanecieron sin daños significativos, con excepción de agua en el sótano. Este evento se presentó como una prueba de la protección divina y fue confirmado por sanidades y salvaciones, evidenciando que la obra fue edificada bajo la unción del Espíritu Santo.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--text-main)" }}>
                Expansión a Latinoamérica
              </h3>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-soft)", marginBottom: "1rem" }}>
                Copley fundó junto a Mary M. Bodie una Escuela Bíblica para formar líderes y misioneros. Desde esta institución, salieron misioneros a diferentes partes del mundo.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-soft)", marginBottom: "1rem" }}>
                El mensaje de Gracia y Gloria llegó a Las Lomitas, Formosa (Argentina), y luego a Villarrica, Paraguay, donde en 1949, el pastor José Ullón y la misionera Loida de Estados Unidos fundaron otra iglesia. Desde allí, se levantó otra Escuela Bíblica con la misma enseñanza.
              </p>
            
            </div>
          </div>
        </div>

        {/* Sección: Nuestras Creencias */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center", color: "var(--gold)" }}>
            ✨ Declaración de Fe
          </h2>
          
          <div className="card-modern" style={{ padding: "2rem", marginBottom: "2rem" }}>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-soft)", marginBottom: "1.5rem" }}>
              Creemos en el único Dios eterno, creador del universo. Reconocemos la Trinidad de la Deidad: Padre, Hijo y Espíritu Santo, cada uno con su función pero uno en naturaleza y propósito.
            </p>

            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-main)" }}>
                Creencias Fundamentales:
              </h3>
              <ul style={{ listStyle: "none", padding: 0, color: "var(--text-soft)", lineHeight: 1.9 }}>
                <li>✓ En el Señor Jesucristo, el Hijo unigénito del Padre, concebido por obra del Espíritu Santo</li>
                <li>✓ En la obra perfecta y consumada de la cruz, como fundamento de la salvación</li>
                <li>✓ Que Jesucristo es el único medio de salvación, no las obras propias</li>
                <li>✓ En la naturaleza pecaminosa heredada y la necesidad del Nuevo Nacimiento en Cristo</li>
                <li>✓ Que la salvación es por gracia, mediante la fe, independiente de las obras (Efesios 2:8-9)</li>
                <li>✓ En la seguridad eterna: que el nuevo nacimiento es irreversible</li>
                <li>✓ Que el creyente recibe una nueva vida que le capacita para andar en la voluntad de Dios</li>
                <li>✓ En el alto llamamiento de Dios en Cristo Jesús</li>
                <li>✓ En la preparación de la Esposa de Cristo mediante el mensaje de la gracia</li>
                <li>✓ En la venida de Jesús y el arrebatamiento de la Esposa (Ap. 3:10)</li>
                <li>✓ En la Sanidad Divina como obra exclusiva del Espíritu Santo</li>
                <li>✓ En la existencia del infierno, el cielo y la comunión eterna con Dios</li>
                <li>✓ Que el Bautismo en agua y la Cena del Señor son ordenanzas simbólicas</li>
                <li>✓ Que todo creyente debe ser lleno del Espíritu Santo (Hechos 2:4)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sección: Actividades */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center", color: "var(--gold)" }}>
            📅 Nuestras Actividades
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            {[
              { icon: "📚", titulo: "Escuela Dominical", desc: "Enseñanza bíblica para niños y adolescentes por niveles de comprensión" },
              { icon: "📖", titulo: "Estudio Bíblico", desc: "Reuniones semanales de profundización doctrinal sobre libros y temas de la Biblia" },
              { icon: "🙏", titulo: "Reunión de Oración", desc: "Espacios dedicados a la oración y ministración del Espíritu Santo" },
              { icon: "👨‍🏫", titulo: "Cursillos de Pastores", desc: "Formación de pastores, obreros y futuros colaboradores en la Escuela Bíblica de Paraguay" },
              { icon: "👨‍🏫", titulo: "Cursillos de Iglesias", desc: "Encuentro de enseñanza bíblica que se realiza de jueves a domingo (aprovechando feriados), con jornadas intensivas de formación, doctrina y crecimiento espiritual" },
              { icon: "👥", titulo: "Encuentros de Jóvenes", desc: "Culto general para jóvenes con alabanzas y múltiples prédica" },
              { icon: "🎉", titulo: "Culto General", desc: "Reuniones de adoración, alabanza y predicación expositiva" },
            ].map((actividad) => (
              <div
                key={actividad.titulo}
                className="card-modern"
                style={{ padding: "1.5rem" }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem", textAlign: "center" }}>
                  {actividad.icon}
                </div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--text-main)", textAlign: "center" }}>
                  {actividad.titulo}
                </h4>
                <p style={{ fontSize: "0.95rem", color: "var(--text-soft)", marginBottom: 0, textAlign: "center" }}>
                  {actividad.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sección: Ceremonias y Ordenanzas */}
        <div style={{ marginBottom: "3rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            <div className="card-modern" style={{ padding: "2rem" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem", color: "var(--gold)" }}>
                ⛪ Ceremonias
              </h3>
              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--text-main)" }}>
                  👶 Presentación de Niños
                </h4>
                <p style={{ fontSize: "0.95rem", color: "var(--text-soft)", marginBottom: 0 }}>
                  Acto de consagración de los niños a Dios, conforme a la enseñanza bíblica.
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--text-main)" }}>
                  💍 Casamientos
                </h4>
                <p style={{ fontSize: "0.95rem", color: "var(--text-soft)", marginBottom: 0 }}>
                  Celebración del matrimonio conforme al diseño bíblico, con bendición pastoral y oración comunitaria.
                </p>
              </div>
            </div>

            <div className="card-modern" style={{ padding: "2rem" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem", color: "var(--gold)" }}>
                📜 Ordenanzas
              </h3>
              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--text-main)" }}>
                  💧 Bautismo en Agua
                </h4>
                <p style={{ fontSize: "0.95rem", color: "var(--text-soft)", marginBottom: 0 }}>
                  Realizado por inmersión, simboliza la identificación del creyente con la muerte y resurrección de Cristo. No es medio de salvación sino una declaración de fe.
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--text-main)" }}>
                  🍇 Cena del Señor
                </h4>
                <p style={{ fontSize: "0.95rem", color: "var(--text-soft)", marginBottom: 0 }}>
                  Celebración simbólica en memoria de la muerte de Cristo, con pan y jugo de uva. Se realiza el primer domingo de cada mes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección: Horarios */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center", color: "var(--gold)" }}>
            ⏰ Horarios de Reuniones
          </h2>
          
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              { dia: "Domingos", evento: "Reunión General / Escuela Dominical", hora: "09:30 h" },
              //{ dia: "Martes", evento: "Estudio Bíblico", hora: "18:00 h" },
              //{ dia: "Jueves", evento: "Día de Oración y Culto", hora: "18:00 h" },
              { dia: "Sábados", evento: "Reunión de Jóvenes", hora: "17:30 h" },
            ].map((horario) => (
              <div
                key={horario.evento}
                className="card-modern"
                style={{ padding: "1.5rem", textAlign: "center" }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>📅</div>
                <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--gold)", marginBottom: "0.5rem" }}>
                  {horario.dia}
                </p>
                <p style={{ fontSize: "0.9rem", color: "var(--text-soft)", marginBottom: "0.5rem" }}>
                  {horario.evento}
                </p>
                <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-main)", marginBottom: 0 }}>
                  {horario.hora}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sección: Información de Contacto */}
        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "2rem", textAlign: "center", color: "var(--gold)" }}>
            📋 Información de la Iglesia
          </h2>
          <div
            style={{
              background: "linear-gradient(135deg, rgba(232, 183, 84, 0.1), rgba(232, 183, 84, 0.05))",
              borderRadius: "12px",
              border: "1px solid rgba(232, 183, 84, 0.2)",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "2rem",
              }}
            >
              <div>
                <p style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>📍</p>
                <p style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem", color: "var(--text-main)" }}>
                  Ubicación
                </p>
                <p style={{ color: "var(--text-soft)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                  Barrio La Argentina<br />
                  Roberto Arlt 3292, Libertad, Merlo, Buenos Aires<br />
                  Argentina
                </p>
              </div>
              <div>
                <p style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>📞</p>
                <p style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem", color: "var(--text-main)" }}>
                  Teléfono
                </p>
                <p style={{ color: "var(--gold)", fontSize: "0.95rem", fontWeight: 600, lineHeight: 1.6 }}>
                  Para más información<br />
                  Contáctanos por la web
                </p>
              </div>
              <div>
                <p style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>📜</p>
                <p style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem", color: "var(--text-main)" }}>
                  Registro
                </p>
                <p style={{ color: "var(--text-soft)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                  Reg. Nacional Nº 8671
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
