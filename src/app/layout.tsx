import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Iglesia Evangélica Gracia y Gloria",
  description: "Sitio oficial de la iglesia"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

return (

<html lang="es">

<body>

<Navbar/>

{children}

<Footer/>

</body>

</html>

)

}