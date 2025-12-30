import Image from "next/image"

const steps = [
  {
    step: "01",
    title: "Contacto",
    description: "Entre em contacto com os detalhes da build. Respondemos em menos de 24h com um orçamento.",
  },
  {
    step: "02",
    title: "Entrega",
    description: "Envie ou entregue as peças. Verificamos e documentamos tudo à chegada.",
  },
  {
    step: "03",
    title: "Montagem",
    description: "Montagem profissional com cable management premium e atenção ao detalhe.",
  },
  {
    step: "04",
    title: "Levantamento",
    description: "Após testes de estabilidade, o seu PC está pronto para levantar ou envio.",
  },
]

export function Process() {
  return (
    <section id="processo" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative order-last lg:order-first">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/details.png?height=700&width=560"
                alt="Processo de montagem ForgePC"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

              {/* Stats */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 glass rounded-xl p-4 sm:p-5">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-foreground">24-72h</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Tempo médio</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-foreground">100%</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Satisfação</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full border border-primary/10 rounded-2xl hidden sm:block" />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-accent mb-3 sm:mb-4 tracking-widest uppercase">Processo</p>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
              Simples e transparente
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12">
              Do contacto à entrega, mantemos tudo claro. Comunicação constante em cada etapa.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4 sm:gap-5 group">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-card border border-white/5 rounded-lg flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                    <span className="text-xs sm:text-sm font-bold text-primary">{step.step}</span>
                  </div>
                  <div className="pt-0.5 sm:pt-1">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
