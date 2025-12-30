import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "ForgePC Gaming | Montagem Profissional de PCs Gaming",
  description:
    "Serviço especializado de montagem de computadores gaming em Portugal. Cable management premium, testes de estabilidade, garantia no serviço. Mais de 500 builds entregues com excelência.",
  keywords: [
    "montagem pc gaming",
    "pc gaming portugal",
    "montar computador",
    "forgepc",
    "pc custom",
    "montagem profissional",
  ],
  authors: [{ name: "ForgePC Gaming" }],
  openGraph: {
    title: "ForgePC Gaming | Montagem Profissional de PCs",
    description: "Especialistas em montagem de computadores gaming de alta performance em Portugal.",
    type: "website",
    locale: "pt_PT",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0a0f1a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className={inter.className}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
