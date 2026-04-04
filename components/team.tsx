import Image from "next/image"
import { Instagram } from "lucide-react"

const barbers = [
  {
    name: "Diego Diniz",
    image: "/images/barber-1.jpg",
    unidade: "Londrina-Centro",
    instagram: "@carlos.barber",
    instagramUrl: "https://instagram.com/dinizbarber01",
  },
  {
    name: "Andrey Araújo",
    image: "/images/barber-2.jpg",
    unidade: "Londrina-Centro",
    instagram: "@dreybarbero",
    instagramUrl: "https://instagram.com/dreybarbero",
  },
  {
    name: "João Mendes",
    image: "/images/barber-3.jpg",
    unidade: "Londrina-Centro",
    instagram: "@joaomendesbarbeiro",
    instagramUrl: "https://instagram.com/joaomendesbarbeiro",
  },
]

export function Team() {
  return (
    <section id="equipe" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-secondary font-medium tracking-widest mb-2 text-sm">
            PROFISSIONAIS
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wider">
            NOSSA EQUIPE
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Conheça os mestres por trás de cada corte perfeito. Anos de experiência e paixão pelo que fazem.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {barbers.map((barber, index) => (
            <div 
              key={index} 
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={barber.image}
                  alt={barber.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 -mt-12 relative z-10">
                <h3 className="font-[family-name:var(--font-heading)] text-2xl text-foreground tracking-wide">
                  {barber.name}
                </h3>
                
                {/* Instagram Link */}
                <a 
                  href={barber.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-secondary hover:text-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm font-medium">{barber.instagram}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
