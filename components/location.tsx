import { MapPin, Clock, Phone, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Location() {
  return (
    <section id="localizacao" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-secondary font-medium tracking-widest mb-2 text-sm">
            VENHA NOS VISITAR
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wider">
            LOCALIZAÇÃO
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <div className="relative h-80 lg:h-full min-h-[400px] rounded-xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.449043154022!2d-51.16844972373264!3d-23.299461052024416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb44bbcf1c1a6f%3A0x92d2b4d7d4ccbc72!2sR.%20Araguaia%2C%20340%20-%20Jardim%20Agari%2C%20Londrina%20-%20PR%2C%2086025-720!5e0!3m2!1spt-BR!2sbr!4v1775157624287!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Barbearia"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold text-lg mb-1">Endereço</h3>
                <p className="text-muted-foreground">
                  R. Araguaia, 340 <br />
                  Jardim Agari, Londrina - PR<br />
                  CEP: 86025-720
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold text-lg mb-1">Horário de Funcionamento</h3>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 10:00 - 19:00<br />
                  Sábado: 09:00 - 17:00<br />
                  Domingo e Feriados: Fechado
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold text-lg mb-1">Contato</h3>
                <p className="text-muted-foreground">
                  (43) 99666-3535<br />
                </p>
              </div>
            </div>

            {/* Instagram CTA */}
            <div className="pt-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
              >
                <a 
                  href="https://instagram.com/kingbarbeariia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  Siga @kingbarbeariia
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
