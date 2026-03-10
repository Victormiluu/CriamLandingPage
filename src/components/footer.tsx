import { Instagram, MessageCircle } from "lucide-react"

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Espacos", href: "#espacos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <a href="#inicio" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-card">CRIAM</span>
            </a>
            <p className="text-card/70 leading-relaxed">
              Centro de Referencia em Atendimento Infantil Multidisciplinar para criancas neurodivergentes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-card mb-4">Links Rapidos</h3>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-card/70 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-card mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/criam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card/10 rounded-full flex items-center justify-center text-card/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card/10 rounded-full flex items-center justify-center text-card/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-card/10 pt-8 text-center">
          <p className="text-card/50 text-sm">
            {new Date().getFullYear()} CRIAM - Centro de Referencia em Atendimento Infantil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
