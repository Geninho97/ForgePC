import { Cpu, Cable, Gauge, Thermometer, Monitor, ArrowUpCircle, Sparkles, Droplets } from "lucide-react"

const services = [
  {
    icon: Cpu,
    title: "Montagem Completa",
    description: "Montagem profissional de todos os componentes com máximo cuidado e precisão técnica.",
  },
  {
    icon: Cable,
    title: "Cable Management",
    description: "Organização premium de cabos para melhor airflow e estética impecável.",
  },
  {
    icon: Gauge,
    title: "Testes de Estabilidade",
    description: "Stress tests completos de CPU, GPU e RAM para garantir estabilidade total.",
  },
  {
    icon: Thermometer,
    title: "Pasta Térmica Premium",
    description: "Aplicação profissional de pasta térmica de alta qualidade.",
  },
  {
    icon: Monitor,
    title: "Instalação de Sistema",
    description: "Windows/Linux com drivers atualizados e otimizações de performance.",
  },
  {
    icon: ArrowUpCircle,
    title: "Upgrades",
    description: "Instalação de novos componentes em PCs existentes.",
  },
  {
    icon: Sparkles,
    title: "Configuração RGB",
    description: "Sincronização completa de toda a iluminação RGB.",
  },
  {
    icon: Droplets,
    title: "Custom Loops",
    description: "Montagem de sistemas de refrigeração líquida.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-accent mb-3 sm:mb-4 tracking-widest uppercase">Serviços</p>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
            Tudo o que precisa para a build perfeita
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Serviços especializados para garantir máxima performance e longevidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-5 sm:p-6 bg-card/40 border border-white/5 rounded-xl card-hover hover:border-primary/20 hover:bg-card/60"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={20} />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
