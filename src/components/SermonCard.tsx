interface SermonCardProps {
  title: string
  date: string
  speaker: string
  description: string
  audioUrl?: string
  tags?: string[]
}

export default function SermonCard({
  title,
  date,
  speaker,
  description,
  audioUrl,
  tags = [],
}: SermonCardProps) {
  return (
    <div className="card-modern">
      <div style={{ marginBottom: '1rem' }}>
        <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: 700 }}>
          📖 {title}
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: 0 }}>
          <strong>{speaker}</strong> •{' '}
          <time dateTime={date}>
            {new Date(date).toLocaleDateString('es-AR', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </p>
      </div>

      <p style={{ marginBottom: '1rem', lineHeight: 1.6, color: 'var(--text-soft)' }}>
        {description}
      </p>

      {tags.length > 0 && (
        <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                display: 'inline-block',
                background: 'rgba(232, 183, 84, 0.15)',
                color: 'var(--gold)',
                padding: '0.35rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {audioUrl && (
        <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(232, 183, 84, 0.2)' }}>
          <audio
            style={{ width: '100%', height: '40px' }}
            controls
            controlsList="nodownload"
          >
            <source src={audioUrl} type="audio/mpeg" />
            Tu navegador no soporta reproducción de audio.
          </audio>
        </div>
      )}
    </div>
  )
}
