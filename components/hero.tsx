import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award, Clock } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 lg:pt-40 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/3 left-0 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] bg-primary/8 rounded-full blur-[80px] lg:blur-[120px] animate-pulse-glow" />
        <div
          className="absolute bottom-0 right-0 w-[250px] sm:w-[350px] lg:w-[500px] h-[250px] sm:h-[350px] lg:h-[500px] bg-accent/8 rounded-full blur-[80px] lg:blur-[120px] animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 sm:mb-8 animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground">Disponível para novos projetos</span>
            </div>

            {/* Headline */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-4 sm:mb-6 animate-fade-up text-balance"
              style={{ animationDelay: "0.1s" }}
            >
              Montagem <span className="text-gradient">premium</span> de PCs Gaming
            </h1>

            <p
              className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Traga os seus componentes e deixe a montagem connosco. Serviço especializado com atenção obsessiva ao
              detalhe, cable management impecável e garantia de qualidade.
            </p>

            {/* Trust badges */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-8 sm:mb-10 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <Shield size={16} className="text-accent flex-shrink-0" />
                <span>Garantia no serviço</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <Award size={16} className="text-accent flex-shrink-0" />
                <span>5+ anos experiência</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <Clock size={16} className="text-accent flex-shrink-0" />
                <span>Entrega 24-48h</span>
              </div>
            </div>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold gap-2" asChild>
                <Link href="#contato">
                  Solicitar Orçamento
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold bg-transparent border-white/10 hover:bg-white/5"
                asChild
              >
                <Link href="#portfolio">Ver Portfolio</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image - Removido o card flutuante "5+ anos" que estava a sobrepor a imagem */}
          <div
            className="relative animate-fade-up lg:animate-fade-in order-first lg:order-last"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative max-w-lg lg:max-w-none mx-auto">
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-3xl blur-2xl opacity-60" />

              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/14900e4090.png?height=600&width=800"
                  alt="PC Gaming de alta performance"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                {/* Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Build Recente</p>
                      <p className="text-sm font-semibold text-foreground">RTX 4090 + i9-14900K</p>
                    </div>
                    <div className="px-3 py-1.5 bg-accent/20 rounded-full">
                      <span className="text-xs font-semibold text-accent">Extreme</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row - Movido as stats para baixo do hero em vez de flutuantes */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 lg:mt-24 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">500+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Builds Completas</div>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">5+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Anos Experiência</div>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">100%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Satisfação</div>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">24-48h</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Entrega</div>
          </div>
        </div>
      </div>
    </section>
  )
}
