import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="hero-section">

<div className="container">

        <div className="row align-items-center">
          {/* TEXTO */}
          <div className="col-lg-6">
            <p className="hero-tag" style={{ color: 'var(--text-muted)', fontWeight: 600 }}>
              SITIO OFICIAL
            </p>

            <h1 className="hero-title">
              Iglesia Evangélica Gracia y Gloria
            </h1>

            <p className="hero-description">
              Un espacio dedicado a la predicación del evangelio,
              la enseñanza de la Palabra de Dios y la edificación
              espiritual de la congregación.
            </p>

            <div className="verse-box">
              <strong>"Jesucristo es el mismo ayer, y hoy, y por los siglos."</strong>
              <br />
              <em>— Hebreos 13:8</em>
            </div>

            <Link href="/predicas">
              <button className="hero-button" aria-label="Ver las prédicas disponibles">
                Ver prédicas
              </button>
            </Link>

          </div>

          {/* LOGO */}
          <div className="col-lg-6 text-center">
            <Image
              src="/images/logo_iglesia.png"
              alt="Logo de la Iglesia Evangélica Gracia y Gloria"
              width={400}
              height={400}
              priority={false}
              loading="lazy"
              className="hero-logo"
              sizes="(max-width: 480px) 200px, (max-width: 768px) 280px, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
