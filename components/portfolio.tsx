import Image from "next/image"

const builds = [
  {
    title: "Stealth Black",
    specs: "RTX 4090 | i9-14900K | 64GB DDR5",
    plan: "Extreme",
    image: "/images/black.png?height=500&width=700",
  },
  {
    title: "Arctic White",
    specs: "RTX 4080 Super | Ryzen 9 7950X | 32GB DDR5",
    plan: "Pro",
    image: "/images/white.png?height=500&width=700",
  },
  {
    title: "RGB Showcase",
    specs: "RTX 4070 Ti Super | i7-14700K | 32GB DDR5",
    plan: "Pro",
    image: "/images/rgb.png?height=500&width=700",
  },
  {
    title: "Workstation Pro",
    specs: "RTX 4080 | Ryzen 9 7950X3D | 128GB DDR5",
    plan: "Extreme",
    image: "/images/workstation.png?height=500&width=700",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 sm:py-24 lg:py-32 bg-card/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-accent mb-3 sm:mb-4 tracking-widest uppercase">Portfolio</p>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
            Builds recentes
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Cada build é tratada com o mesmo nível de cuidado e profissionalismo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {builds.map((build, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden border border-white/5 card-hover">
              <div className="aspect-[7/5] relative overflow-hidden">
                <Image
                  src={build.image || "/placeholder.svg"}
                  alt={build.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <div className="flex items-end justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-xl font-semibold text-foreground mb-0.5 sm:mb-1">{build.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground truncate">{build.specs}</p>
                  </div>
                  <span className="flex-shrink-0 px-2 sm:px-3 py-1 sm:py-1.5 bg-primary/20 text-primary text-[10px] sm:text-xs font-semibold rounded-full">
                    {build.plan}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
