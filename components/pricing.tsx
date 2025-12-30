import { Check, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const plans = [
  {
    name: "Essencial",
    price: "45,99",
    description: "Para builds standard",
    features: [
      "Montagem completa",
      "Pasta térmica premium",
      "Instalação de SO + drivers",
      "Teste básico",
      "Entrega em 24h",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "95,99",
    description: "Para builds gaming",
    features: [
      "Tudo do Essencial",
      "Cable management premium",
      "Stress test completo (4h)",
      "Atualização de BIOS",
      "Otimização de performance",
      "Relatório de temperaturas",
      "Entrega em 48h",
    ],
    highlighted: true,
  },
  {
    name: "Extreme",
    price: "125,99",
    description: "Para builds enthusiast",
    features: [
      "Tudo do Pro",
      "Custom loop / AIO",
      "Config e sync de RGB",
      "Overclock assistido",
      "Stress test 8h+",
      "Suporte 30 dias",
      "Entrega em 48h",
    ],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="precos" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-accent mb-4 tracking-widest uppercase">Preços</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Planos transparentes</h2>
          <p className="text-lg text-muted-foreground">
            Preços claros sem surpresas. Escolha o plano adequado à sua build.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col h-full p-6 sm:p-8 rounded-xl border transition-all ${
                plan.highlighted
                  ? "bg-card border-primary/30 shadow-xl shadow-primary/5 lg:scale-[1.02]"
                  : "bg-card/40 border-white/5 hover:border-white/10"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full flex items-center gap-1.5">
                  <Zap size={12} />
                  Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-lg text-muted-foreground">€</span>
                </div>
              </div>

              <ul className="space-y-3.5 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-primary" size={12} />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="w-full h-12 mt-auto" variant={plan.highlighted ? "default" : "outline"}>
                <Link href="#contato">Escolher</Link>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10 max-w-xl mx-auto px-4">
          Preços podem variar para configurações especiais. Contacte-nos para orçamento personalizado.
          <p> (Envio não incluido)</p>
        </p>
      </div>
    </section>
  )
}
