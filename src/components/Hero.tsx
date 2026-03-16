import Image from "next/image"
import Link from "next/link"

export default function Hero() {

return(

<section className="hero-section">

<div className="container">

<div className="row align-items-center">

{/* TEXTO */}

<div className="col-lg-6">

<p className="hero-tag">
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

“Jesucristo es el mismo ayer, y hoy, y por los siglos.”
— Hebreos 13:8

</div>

<Link href="/predicas">

<button className="hero-button">

Ver prédicas

</button>

</Link>

</div>

{/* LOGO */}

<div className="col-lg-6 text-center">

<Image
src="/images/logo_iglesia.png"
alt="logo iglesia"
width={420}
height={420}
priority
className="hero-logo"
/>

</div>

</div>

</div>

</section>

)

}