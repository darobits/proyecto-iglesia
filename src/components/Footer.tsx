"use client"

export default function Footer() {
  return (
    <footer className="footer-dark">
      <div className="container">
        <div className="footer-content">
          {/* Sección: Sobre Nosotros */}
          <div className="footer-section">
            <h3 style={{ color: '#2EC4B6', fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>
              ✨ Iglesia Evangélica Gracia y Gloria
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#D1D5DB', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Un espacio dedicado a la predicación del evangelio, la enseñanza de la Palabra de Dios y la edificación espiritual de la congregación.
            </p>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#9CA3AF' }}>
              <strong style={{ color: '#D1D5DB' }}>Registro Nacional de Cultos:</strong> N° 8671
            </p>
          </div>

          {/* Sección: Ubicación y Contacto */}
          <div className="footer-section">
            <h3 style={{ color: '#2EC4B6', fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>
              📍 Ubicación
            </h3>
            <p style={{ color: '#D1D5DB', fontSize: '0.95rem', lineHeight: 1.7 }}>
              <strong style={{ color: '#9CA3AF' }}>Dirección:</strong>
              <br />
              <span style={{ color: '#D1D5DB' }}>Roberto Arlt 3292</span>
              <br />
              <span style={{ color: '#D1D5DB' }}>Libertad – Merlo, Buenos Aires</span>
            </p>
          </div>

          {/* Sección: Enlaces Rápidos */}
          <div className="footer-section">
            <h3 style={{ color: '#2EC4B6', fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>
              🔗 Enlaces
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="/" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#2EC4B6'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>Inicio</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="/predicas" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#2EC4B6'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>Prédicas</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="/alabanzas" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#2EC4B6'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>Alabanzas</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="/nosotros" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#2EC4B6'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>Sobre Nosotros</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="/contacto" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#2EC4B6'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>Contacto</a></li>
              <li><a href="/anuncios" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#2EC4B6'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>Anuncios</a></li>
            </ul>
          </div>

          {/* Sección: Redes Sociales */}
          <div className="footer-section">
            <h3 style={{ color: '#2EC4B6', fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>
              🌐 Conéctate
            </h3>
            <p style={{ color: '#9CA3AF', fontSize: '0.95rem', marginBottom: '1rem' }}>
              Síguenos en nuestras redes sociales
            </p>
            <div style={{ display: 'flex', gap: '1.2rem', marginTop: '1rem' }}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(232, 183, 84, 0.15)',
                  color: '#2EC4B6',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  fontSize: '1.2rem',
                  fontWeight: 'bold'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(232, 183, 84, 0.3)';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(232, 183, 84, 0.15)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                f
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(232, 183, 84, 0.15)',
                  color: '#2EC4B6',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  fontSize: '1.2rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(232, 183, 84, 0.3)';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(232, 183, 84, 0.15)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                📷
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(232, 183, 84, 0.15)',
                  color: '#2EC4B6',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  fontSize: '1.2rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(232, 183, 84, 0.3)';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(232, 183, 84, 0.15)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                ▶️
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(232, 183, 84, 0.15)',
                  color: '#2EC4B6',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  fontSize: '1.2rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(232, 183, 84, 0.3)';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(232, 183, 84, 0.15)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                💬
              </a>
            </div>
          </div>
        </div>

        {/* Verso inspirador */}
        <div
          style={{
            marginTop: '2.5rem',
            padding: '1.5rem',
            borderTop: '1px solid rgba(232, 183, 84, 0.3)',
            borderRadius: '10px',
            background: 'rgba(232, 183, 84, 0.08)',
            textAlign: 'center',
          }}
        >
          <p style={{ 
            fontSize: '1rem',
            fontWeight: 600,
            color: '#2EC4B6',
            marginBottom: '0.5rem',
            lineHeight: 1.6
          }}>
            "Jesucristo es el mismo ayer, y hoy, y por los siglos."
          </p>
          <p style={{ 
            fontSize: '0.9rem',
            color: '#9CA3AF',
            marginBottom: 0 
          }}>
            — Hebreos 13:8
          </p>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <p style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            © {new Date().getFullYear()} Iglesia Evangélica Gracia y Gloria. Todos los derechos reservados.
          </p>
          <p style={{ fontSize: '0.85rem', marginBottom: 0, color: '#6B7280' }}>
            Diseñado con ❤️ para la gloria de Dios
          </p>
        </div>
      </div>
    </footer>
  )
}
