import '../app/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import LayoutClient from "@/components/LayoutClient"

export const metadata = {
  title: "Iglesia Evangélica Gracia y Gloria | Predicas y Alabanzas",
  description: "Sitio oficial de la Iglesia Evangélica Gracia y Gloria. Accede a predicas, alabanzas, horarios de servicio y más. Ubicada en Merlo, Libertad.",
  keywords: "iglesia evangélica, predicas, alabanzas, fe religiosa, Merlo, Libertad",
  creator: "Iglesia Evangélica Gracia y Gloria",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
  themeColor: "#2362c1",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://iglesiagraciagloria.org",
    siteName: "Iglesia Evangélica Gracia y Gloria",
    title: "Iglesia Evangélica Gracia y Gloria",
    description: "Sitio oficial de la Iglesia Evangélica Gracia y Gloria. Accede a predicas, alabanzas, horarios de servicio y más.",
    images: [
      {
        url: "/images/logo_iglesia.png",
        width: 1200,
        height: 630,
        alt: "Logo Iglesia Evangélica Gracia y Gloria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iglesia Evangélica Gracia y Gloria",
    description: "Sitio oficial de la Iglesia Evangélica Gracia y Gloria",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/logo_iglesia.png" />
        <link rel="canonical" href="https://iglesiaevangelicagraciagloria.com.ar" />
      </head>

      <body>
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  )
}