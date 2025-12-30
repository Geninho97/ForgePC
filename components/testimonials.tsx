import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Miguel Santos",
    role: "Gamer Competitivo",
    content:
      "Montaram a minha build RTX 4080 de forma impecável. O cable management está perfeito e as temperaturas excelentes. Recomendo sem hesitar.",
    rating: 5,
  },
  {
    name: "Ana Rodrigues",
    role: "Content Creator",
    content:
      "Precisava de uma workstation para streaming e edição 4K. A ForgePC entregou exatamente o que precisava, dentro do prazo e com qualidade top.",
    rating: 5,
  },
  {
    name: "Pedro Costa",
    role: "Software Engineer",
    content:
      "Profissionalismo do início ao fim. Comunicação clara, trabalho de qualidade impecável e preço justo. Já recomendei a vários colegas.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testemunhos" className="py-16 sm:py-24 lg:py-32 bg-card/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-accent mb-3 sm:mb-4 tracking-widest uppercase">Testemunhos</p>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
            O que dizem os clientes
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            A satisfação dos nossos clientes é a nossa maior prioridade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <div key={index} className="relative p-5 sm:p-8 bg-card border border-white/5 rounded-xl card-hover">
              <Quote className="absolute top-4 sm:top-6 right-4 sm:right-6 text-primary/10" size={32} />

              <div className="flex gap-1 mb-4 sm:mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="text-accent fill-accent" size={14} />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-xs sm:text-sm">
                &ldquo;{t.content}&rdquo;
              </p>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="min-w-0">
                  <div className="font-semibold text-foreground text-xs sm:text-sm truncate">{t.name}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground truncate">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
