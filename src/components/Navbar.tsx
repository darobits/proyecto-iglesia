"use client"

import Link from "next/link"
import Image from "next/image"

export default function Navbar(){

return(

<nav className="navbar navbar-expand-lg navbar-dark">

<div className="container">

<Image
src="/images/logo_iglesia.png"
alt="logo iglesia"
width={60}
height={60}
/>

<span className="ms-3 fw-bold glow-text">
Iglesia Evangélica Gracia y Gloria
</span>

<button
className="navbar-toggler"
data-bs-toggle="collapse"
data-bs-target="#menu"
>
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="menu">

<ul className="navbar-nav ms-auto">

<li className="nav-item">
<Link href="/" className="nav-link">Inicio</Link>
</li>

<li className="nav-item">
<Link href="/predicas" className="nav-link">Predicas</Link>
</li>

<li className="nav-item">
<Link href="/alabanzas" className="nav-link">Alabanzas</Link>
</li>

<li className="nav-item">
<Link href="/nosotros" className="nav-link">Nosotros</Link>
</li>

<li className="nav-item">
<Link href="/contacto" className="nav-link">Contacto</Link>
</li>

</ul>

</div>

</div>

</nav>

)

}