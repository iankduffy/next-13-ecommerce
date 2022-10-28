import { Header } from "@components/shared/header"
import { Footer } from '@components/shared/footer'
import '../../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body className="bg-white text-black">
        <Header />
          {children}
        <Footer />
        </body>
    </html>
  )
}
