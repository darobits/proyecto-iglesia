import Image from "next/image"

interface GalleryItem {
  id: string
  src: string
  alt: string
  title?: string
  date?: string
}

interface GalleryGridProps {
  items: GalleryItem[]
  columns?: number
}

export default function GalleryGrid({
  items,
  columns = 3,
}: GalleryGridProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
        gap: '1.5rem',
        marginBottom: '2rem',
      }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            background: 'rgba(232, 183, 84, 0.08)',
            border: '1px solid rgba(232, 183, 84, 0.2)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(232, 183, 84, 0.3)';
            e.currentTarget.style.borderColor = 'rgba(232, 183, 84, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = 'rgba(232, 183, 84, 0.2)';
          }}
        >
          <div style={{ position: 'relative', width: '100%', paddingBottom: '100%' }}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              style={{
                objectFit: 'cover',
              }}
              loading="lazy"
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>

          {(item.title || item.date) && (
            <div
              style={{
                padding: '1rem',
                background: 'linear-gradient(180deg, rgba(3, 39, 121, 0.7), rgba(3, 39, 121, 0.95))',
              }}
            >
              {item.title && (
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  {item.title}
                </h3>
              )}
              {item.date && (
                <time
                  dateTime={item.date}
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-soft)',
                  }}
                >
                  {new Date(item.date).toLocaleDateString('es-AR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
