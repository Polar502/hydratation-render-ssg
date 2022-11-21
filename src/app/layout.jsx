import '../styles/globals.css'
import { Navigation } from '../components/Navigation'
import { Providers } from '../components/Providers'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head />
      <body className="bg-gray-100 h-screen w-screen max-w-4xl">
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  )
}
