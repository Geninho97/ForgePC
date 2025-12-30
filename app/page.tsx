import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Portfolio } from "@/components/portfolio"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
//import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  )
}
