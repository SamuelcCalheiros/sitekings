import Image from "next/image"

const galleryImages = [
  {
    src: "/images/barbershop-interior.jpg",
    alt: "Interior aconchegante da barbearia",
    className: "col-span-2 row-span-2"
  },
  {
    src: "/images/barbershop-work.jpg",
    alt: "Barbeiro em ação",
    className: "col-span-1 row-span-1"
  },
  {
    src: "/images/barbershop-detail.jpg",
    alt: "Ferramentas de barbearia",
    className: "col-span-1 row-span-1"
  },
]

export function Gallery() {
  return (
    <section id="galeria" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-secondary font-medium tracking-widest mb-2 text-sm">
            CONHEÇA
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wider">
            NOSSO ESPAÇO
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
        </div>        

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-primary text-2xl font-bold">01</span>
            </div>
            <h3 className="text-foreground font-semibold text-lg mb-2">Ambiente Premium</h3>
            <p className="text-muted-foreground text-sm">
              Espaço confortável e sofisticado para você relaxar enquanto cuida do visual.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-secondary text-2xl font-bold">02</span>
            </div>
            <h3 className="text-foreground font-semibold text-lg mb-2">Produtos de Qualidade</h3>
            <p className="text-muted-foreground text-sm">
              Utilizamos apenas as melhores marcas do mercado para cuidar do seu cabelo e barba.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-primary text-2xl font-bold">03</span>
            </div>
            <h3 className="text-foreground font-semibold text-lg mb-2">Atendimento Exclusivo</h3>
            <p className="text-muted-foreground text-sm">
              Cada cliente é único. Atendimento personalizado do início ao fim.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
