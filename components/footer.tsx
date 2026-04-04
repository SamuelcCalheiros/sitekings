import Link from "next/link"
import { Scissors, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-2">
              <Scissors className="w-6 h-6 text-primary" />
              <span className="font-[family-name:var(--font-heading)] text-xl text-foreground tracking-wider">
                KING BARBEARIA
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mt-2">
              Tradição e modernidade em cada corte.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a 
              href="https://instagram.com/kingbarbeariia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/554396663535" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} KING BARBEARIA
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
