"use client"

import { MapPin, Clock, Phone, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const filiais = [
  {
    id: "paulista",
    name: "Unidade Paulista",
    address: "Av. Paulista, 1000 - Sala 301",
    neighborhood: "Bela Vista, Sao Paulo - SP",
    cep: "CEP: 01310-100",
    phone: "(11) 99999-1111",
    email: "paulista@kingbarbearia.com.br",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975904633!2d-46.65342708447757!3d-23.564611684680994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1635959481019!5m2!1spt-BR!2sbr",
    hours: {
      weekdays: "09:00 - 20:00",
      saturday: "09:00 - 18:00",
      sunday: "Fechado"
    },
    barbers: 8
  },
  {
    id: "moema",
    name: "Unidade Moema",
    address: "Av. Ibirapuera, 2500 - Loja 15",
    neighborhood: "Moema, Sao Paulo - SP",
    cep: "CEP: 04028-001",
    phone: "(11) 99999-2222",
    email: "moema@kingbarbearia.com.br",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5029123456789!2d-46.66123456789012!3d-23.59123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a123456789%3A0xabcdef123456789!2sAv.%20Ibirapuera%2C%20Moema%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1635959481019!5m2!1spt-BR!2sbr",
    hours: {
      weekdays: "10:00 - 21:00",
      saturday: "10:00 - 19:00",
      sunday: "10:00 - 16:00"
    },
    barbers: 7
  },
  {
    id: "pinheiros",
    name: "Unidade Pinheiros",
    address: "Rua dos Pinheiros, 800 - Terreo",
    neighborhood: "Pinheiros, Sao Paulo - SP",
    cep: "CEP: 05422-001",
    phone: "(11) 99999-3333",
    email: "pinheiros@kingbarbearia.com.br",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8029123456789!2d-46.68123456789012!3d-23.56123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5789abcdef12%3A0x123456789abcdef!2sR.%20dos%20Pinheiros%2C%20Pinheiros%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1635959481019!5m2!1spt-BR!2sbr",
    hours: {
      weekdays: "09:00 - 21:00",
      saturday: "09:00 - 20:00",
      sunday: "11:00 - 17:00"
    },
    barbers: 8
  }
]

export function Location() {
  const [selectedFilial, setSelectedFilial] = useState(filiais[0])

  return (
    <section id="localizacao" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-secondary font-medium tracking-widest mb-2 text-sm">
            VENHA NOS VISITAR
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wider">
            NOSSAS UNIDADES
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            3 unidades estrategicamente localizadas em Sao Paulo para sua comodidade.
          </p>
        </div>

        {/* Location Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filiais.map((filial) => (
            <button
              key={filial.id}
              onClick={() => setSelectedFilial(filial)}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                selectedFilial.id === filial.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <span className="block">{filial.name}</span>
              <span className="text-xs opacity-75">{filial.barbers} barbeiros</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <div className="relative h-80 lg:h-full min-h-[400px] rounded-xl overflow-hidden border border-border">
            <iframe
              src={selectedFilial.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Localizacao ${selectedFilial.name}`}
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Branch Name */}
            <div className="mb-2">
              <h3 className="font-[family-name:var(--font-heading)] text-3xl text-primary tracking-wide">
                {selectedFilial.name}
              </h3>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-foreground font-semibold text-lg mb-1">Endereco</h4>
                <p className="text-muted-foreground">
                  {selectedFilial.address}<br />
                  {selectedFilial.neighborhood}<br />
                  {selectedFilial.cep}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="text-foreground font-semibold text-lg mb-1">Horario de Funcionamento</h4>
                <p className="text-muted-foreground">
                  Segunda a Sexta: {selectedFilial.hours.weekdays}<br />
                  Sabado: {selectedFilial.hours.saturday}<br />
                  Domingo: {selectedFilial.hours.sunday}
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-foreground font-semibold text-lg mb-1">Contato</h4>
                <p className="text-muted-foreground">
                  {selectedFilial.phone}<br />
                  {selectedFilial.email}
                </p>
              </div>
            </div>

            {/* Instagram CTA */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a 
                  href="https://www.instagram.com/kingbarbeariia/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  Siga @kingbarbeariia
                </a>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10"
              >
                <a 
                  href={`https://wa.me/55${selectedFilial.phone.replace(/\D/g, '')}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Agendar via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* All Branches Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filiais.map((filial) => (
            <div 
              key={filial.id}
              onClick={() => setSelectedFilial(filial)}
              className={`p-6 rounded-xl border cursor-pointer transition-all ${
                selectedFilial.id === filial.id 
                  ? "border-primary bg-primary/5" 
                  : "border-border hover:border-primary/50"
              }`}
            >
              <h4 className="font-[family-name:var(--font-heading)] text-xl text-foreground tracking-wide mb-2">
                {filial.name}
              </h4>
              <p className="text-muted-foreground text-sm mb-3">
                {filial.address}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-secondary">{filial.barbers} barbeiros</span>
                <span className="text-muted-foreground">{filial.phone}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
