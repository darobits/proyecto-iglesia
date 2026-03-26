interface AnnouncementCardProps {
  title: string
  date: string
  content: string
  category?: string
  icon?: string
  link?: string
  linkText?: string
}

export default function AnnouncementCard({
  title,
  date,
  content,
  category = "Anuncio",
  icon = "📢",
  link,
  linkText = "Más información",
}: AnnouncementCardProps) {
  return (
    <div className="card-modern">
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1rem',
          marginBottom: '1rem',
        }}
      >
        <div style={{ fontSize: '2rem' }}>{icon}</div>
        <div style={{ flex: 1 }}>
          <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: 700 }}>
            {title}
          </h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(232, 183, 84, 0.15)',
                color: 'var(--gold)',
                padding: '0.25rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 600,
              }}
            >
              {category}
            </span>
            <time
              dateTime={date}
              style={{
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
              }}
            >
              {new Date(date).toLocaleDateString('es-AR', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </time>
          </div>
        </div>
      </div>

      <p style={{ marginBottom: '1rem', lineHeight: 1.6, color: 'var(--text-soft)' }}>
        {content}
      </p>

      {link && (
        <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(232, 183, 84, 0.2)' }}>
          <a
            href={link}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--gold)',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(232, 183, 84, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            {linkText} →
          </a>
        </div>
      )}
    </div>
  )
}
