import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/barbershop-interior.jpg"
          alt="Interior da Barbearia KING BARBEARIA"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-secondary font-medium tracking-widest mb-4 text-sm md:text-base">
            BEM-VINDO À
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 tracking-wider text-balance">
            KING
            <span className="block text-primary">BARBEARIA</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Tradição e modernidade em cada corte. Nossa equipe de profissionais está pronta para transformar seu visual com técnicas clássicas e contemporâneas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
            >
              <a href="https://instagram.com/kingbarbeariia" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-2" />
                Agende seu Horário
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-6"
            >
              <a href="#equipe">
                Conheça a Equipe
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
