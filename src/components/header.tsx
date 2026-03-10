import { Instagram, MessageCircle } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white border-b z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">

        <div className="text-xl font-bold text-blue-600">
          CRIAM
        </div>

        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#inicio">Início</a>
          <a href="#especialidades">Especialidades</a>
          <a href="#espacos">Espaços</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="flex gap-4">
          <a href="https://instagram.com" target="_blank">
            <Instagram size={20}/>
          </a>

          <a href="https://wa.me/5500000000000" target="_blank">
            <MessageCircle size={20}/>
          </a>
        </div>

      </div>
    </header>
  )
}