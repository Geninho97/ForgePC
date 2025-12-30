import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    servicos: [
      { label: "Montagem Completa", href: "#servicos" },
      { label: "Cable Management", href: "#servicos" },
      { label: "Custom Loops", href: "#servicos" },
      { label: "Upgrades", href: "#servicos" },
    ],
    empresa: [
      { label: "Portfolio", href: "#portfolio" },
      { label: "Testemunhos", href: "#testemunhos" },
      { label: "Preços", href: "#precos" },
      //{ label: "Contacto", href: "#contato" },
    ],
  }

  return (
    <footer className="border-t border-white/5 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="py-10 sm:py-16 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4 sm:mb-6">
              <Image
                src="/images/logo-forgepc.png"
                alt="ForgePC Gaming"
                width={200}
                height={75}
                className="h-16 sm:h-20 w-auto"
              />
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
              Especialistas em montagem de PCs gaming em Portugal.
            </p>
            
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm">Serviços</h4>
            <ul className="space-y-2 sm:space-y-3">
              {links.servicos.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm">Empresa</h4>
            <ul className="space-y-2 sm:space-y-3">
              {links.empresa.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm">Contacto</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
              <li>+351 935628272</li>
              <li className="pt-2">
                <span className="text-foreground">Horário:</span>
                <br />
                Seg - Sex: 9h - 18h
              </li>
            </ul>
          </div>
        </div>

        <div className="py-4 sm:py-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} ForgePC Gaming. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacidade
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
