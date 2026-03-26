"use client"

interface AudioPlayerProps {
  title: string
  artist?: string
  audioUrl: string
  date?: string
  description?: string
}

export default function AudioPlayer({
  title,
  artist = "Iglesia Evangélica Gracia y Gloria",
  audioUrl,
  date,
  description,
}: AudioPlayerProps) {
  return (
    <div className="card-modern">
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: 700 }}>
          {title}
        </h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-soft)', marginBottom: '0.25rem' }}>
          <strong>{artist}</strong>
        </p>
        {date && (
          <time
            dateTime={date}
            style={{
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              display: 'block',
            }}
          >
            {new Date(date).toLocaleDateString('es-AR', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        )}
      </div>

      {description && (
        <p style={{ marginBottom: '1rem', fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-soft)' }}>
          {description}
        </p>
      )}

      <div style={{ marginBottom: '1.5rem' }}>
        <audio
          style={{
            width: '100%',
            height: '50px',
            borderRadius: '8px',
            background: 'rgba(232, 183, 84, 0.1)',
          }}
          controls
          controlsList="nodownload"
        >
          <source src={audioUrl} type="audio/mpeg" />
          Tu navegador no soporta reproducción de audio.
        </audio>
      </div>

      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center' }}>
        <p style={{ marginBottom: 0 }}>🎧 Usa los controles para reproducir, pausar y ajustar el volumen</p>
      </div>
    </div>
  )
}
