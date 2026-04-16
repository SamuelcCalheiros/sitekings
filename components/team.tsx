"use client"

import Image from "next/image"
import { Instagram, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const barbers = [
  {
    name: "Carlos Silva",
    role: "Barbeiro Master",
    image: "/images/barber-1.jpg",
    instagram: "@carlos.barber",
    instagramUrl: "https://www.instagram.com/kingbarbeariia/",
    description: "10+ anos de experiencia em cortes classicos e modernos.",
    filial: "Paulista"
  },
  {
    name: "Rafael Santos",
    role: "Barbeiro Especialista",
    image: "/images/barber-2.jpg",
    instagram: "@rafa.cuts",
    instagramUrl: "https://www.instagram.com/kingbarbeariia/",
    description: "Especialista em degrades e desenhos artisticos.",
    filial: "Paulista"
  },
  {
    name: "Fernando Costa",
    role: "Barbeiro Senior",
    image: "/images/barber-3.jpg",
    instagram: "@fernando.barber",
    instagramUrl: "https://www.instagram.com/kingbarbeariia/",
    description: "Mestre em barba e tratamentos faciais premium.",
    filial: "Paulista"
  },
  {
    name: "Lucas Oliveira",
    role: "Barbeiro Criativo",
    image: "/images/barber-4.jpg",
    instagram: "@lucas.style",
    instagramUrl: "https://www.instagram.com/kingbarbeariia/",
    description: "Referencia em cortes afro e texturas naturais.",
    filial: "Paulista"
  },
  {
    name: "Diego Martinez",
    role: "Barbeiro Especialista",
    image: "/images/barber-5.jpg",
    instagram: "@diego.barber",
    instagramUrl: "https://www.instagram.com/kingbarbeariia/",
    description: "Expert em pompadours e cortes vintage.",
    filial: "Paulista"
  },
  {
    name: "Hiroshi Tanaka",
    role: "Barbeiro Tecnico",
    image: "/images/barber-6.jpg",
    instagram: "@hiroshi.cuts",
    instagramUrl: "https://www.instagram.com/kingbarbeariia/",
    description: "Precisao japonesa em cada corte.",
    filial: "Paulista"
  },
  {
    name: "Roberto Almeida",
    role: "Barbeiro Tradicional",
    image: "/images/barber-7.jpg",
    instagram: "@roberto.vintage",
    instagramUrl: "https://www.instagram.com/kingbarbeariia/",
    description: "20+ anos de experiencia em cortes classicos.",
    filial: "Paulista"
  },
  {
    name: "Ahmed Hassan",
    role: "Barbeiro Junior",
    image: "/images/barber-8.jpg",
    instagram: "@ahmed.barber",
    instagramUrl: "https://www.instagram.com/kingbarbeariia/",
    description: "Jovem talento com tecnicas inovadoras.",
    filial: "Paulista"
  },
  {
    name: "Jorge Pereira",
    role: "Barbeiro Master",
    image: "/images/barber-9.jpg",
    instagram: "@jorge.master",
    instagramUrl: "https://www.instagram.com/kingbarbeariia/",
    description: "Lenda viva da barbearia paulistana.",
    filial: "Moema"
  },
  {
    name: "Bruno Ferreira",
    role: "Barbeiro Especialista",
    image: "/images/barber-10.jpg",
    instagram: "@bruno.fade",
    instagramUrl: "https://www.instagram.com/kingbarbeariia/",
    description: "Especialista em mid e low fades.",
    filial: "Moema"
  },
  {
    name: "Ricardo Souza",
    role: "Barbeiro Senior",
    image: "/images/barber-11.jpg",
    instagram: "@ricardo.barber",
    instagramUrl: "https://www.instagram.com/kingbarbeariia/",
    description: "Referencia em cortes executivos.",
    filial: "Moema"
  },
  {
    name: "Kenji Yamamoto",
    role: "Barbeiro Criativo",
    image: "/images/barber-12.jpg",
    instagram: "@kenji.style",
    instagramUrl: "https://www.instagram.com/kingbarbeariia/",
    description: "Trendsetter de estilos asiaticos modernos.",
    filial: "Moema"
  },
  {
    name: "Thiago Campos",
    role: "Barbeiro Senior",
    image: "/images/barber-13.jpg",
    instagram: "@thiago.barber",
    instagramUrl: "https://www.instagram.com/kingbarbeariia/",
    description: "Especialista em barbas longas e estilizadas.",
    filial: "Moema"
  },
  {
    name: "Marcus Johnson",
    role: "Barbeiro Artista",
    image: "/images/barber-14.jpg",
    instagram: "@marcus.art",
    instagramUrl: "https://www.instagram.com/kingbarbeariia/",
    description: "Mestre em designs e hair tattoos.",
    filial: "Moema"
  },
  {
    name: "Gianluca Romano",
    role: "Barbeiro Especialista",
    image: "/images/barber-15.jpg",
    instagram: "@gianluca.barber",
    instagramUrl: "https://www.instagram.com/kingbarbeariia/",
    description: "Tecnicas italianas de corte e barba.",
    filial: "Moema"
  },
  {
    name: "Antonio Ribeiro",
    role: "Barbeiro Master",
    image: "/images/barber-16.jpg",
    instagram: "@antonio.classic",
    instagramUrl: "https://www.instagram.com/kingbarbeariia/",
    description: "40+ anos dedicados a arte da barbearia.",
    filial: "Pinheiros"
  },
  {
    name: "Gabriel Lima",
    role: "Barbeiro Junior",
    image: "/images/barber-17.jpg",
    instagram: "@gabriel.cuts",
    instagramUrl: "https://www.instagram.com/kingbarbeariia/",
    description: "Nova geracao de barbeiros talentosos.",
    filial: "Pinheiros"
  },
  {
    name: "Raj Patel",
    role: "Barbeiro Tecnico",
    image: "/images/barber-18.jpg",
    instagram: "@raj.barber",
    instagramUrl: "https://www.instagram.com/kingbarbeariia/",
    description: "Especialista em cortes e barbas indianas.",
    filial: "Pinheiros"
  },
  {
    name: "Patrick Murphy",
    role: "Barbeiro Senior",
    image: "/images/barber-19.jpg",
    instagram: "@patrick.barber",
    instagramUrl: "https://www.instagram.com/kingbarbeariia/",
    description: "Estilo irlandes com toque brasileiro.",
    filial: "Pinheiros"
  },
  {
    name: "Samuel Costa",
    role: "Barbeiro Criativo",
    image: "/images/barber-20.jpg",
    instagram: "@samuel.style",
    instagramUrl: "https://www.instagram.com/kingbarbeariia/",
    description: "Pioneiro em cortes cacheados e afros.",
    filial: "Pinheiros"
  },
  {
    name: "Takeshi Ito",
    role: "Barbeiro Master",
    image: "/images/barber-21.jpg",
    instagram: "@takeshi.master",
    instagramUrl: "https://www.instagram.com/kingbarbeariia/",
    description: "Precisao e arte em cada movimento.",
    filial: "Pinheiros"
  },
  {
    name: "Matheus Rocha",
    role: "Barbeiro Especialista",
    image: "/images/barber-22.jpg",
    instagram: "@matheus.barber",
    instagramUrl: "https://www.instagram.com/kingbarbeariia/",
    description: "Estilo contemporaneo e sustentavel.",
    filial: "Pinheiros"
  },
  {
    name: "William Santos",
    role: "Barbeiro Senior",
    image: "/images/barber-23.jpg",
    instagram: "@william.cuts",
    instagramUrl: "https://www.instagram.com/kingbarbeariia/",
    description: "Atendimento VIP e cortes executivos.",
    filial: "Pinheiros"
  },
]

const filiais = ["Todas", "Paulista", "Moema", "Pinheiros"]

export function Team() {
  const [selectedFilial, setSelectedFilial] = useState("Todas")
  const [currentPage, setCurrentPage] = useState(0)
  const barbersPerPage = 6

  const filteredBarbers = selectedFilial === "Todas" 
    ? barbers 
    : barbers.filter(b => b.filial === selectedFilial)

  const totalPages = Math.ceil(filteredBarbers.length / barbersPerPage)
  const paginatedBarbers = filteredBarbers.slice(
    currentPage * barbersPerPage,
    (currentPage + 1) * barbersPerPage
  )

  const handleFilialChange = (filial: string) => {
    setSelectedFilial(filial)
    setCurrentPage(0)
  }

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
            Conheca os mestres por tras de cada corte perfeito.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filiais.map((filial) => (
            <button
              key={filial}
              onClick={() => handleFilialChange(filial)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                selectedFilial === filial
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {filial === "Todas" ? "Todas as Unidades" : `Unidade ${filial}`}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {paginatedBarbers.map((barber, index) => (
            <div 
              key={index} 
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={barber.image}
                  alt={barber.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                {/* Filial Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-secondary/90 text-secondary-foreground text-xs font-medium">
                  {barber.filial}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 -mt-10 relative z-10">
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-foreground tracking-wide">
                  {barber.name}
                </h3>
                <p className="text-primary font-medium text-sm mt-1">
                  {barber.role}
                </p>
                <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                  {barber.description}
                </p>
                
                {/* Instagram Link */}
                <a 
                  href={barber.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-secondary hover:text-primary transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span className="text-sm font-medium">{barber.instagram}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-10">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="border-border hover:bg-muted"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentPage === i ? "bg-primary w-6" : "bg-muted hover:bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              className="border-border hover:bg-muted"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
