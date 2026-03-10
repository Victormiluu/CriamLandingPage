import { Button } from "./ui/button"
import { MapPin, Phone, Mail } from "lucide-react"

export function Contato() {
  return (
    <section id="contato" className="py-20">

      <div className="max-w-6xl mx-auto px-6">

        {/* Título */}
        <div className="text-center mb-12">

          <h2 className="text-3xl font-semibold mb-4">
            Entre em Contato
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atender você e sua família. Entre em contato
            conosco para agendar uma avaliação.
          </p>

        </div>

        {/* Conteúdo */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Coluna esquerda */}
          <div className="space-y-6">

            {/* Endereço */}
            <div className="flex gap-3">
              <MapPin className="text-blue-500 mt-1" size={20} />

              <div>
                <h3 className="font-semibold">Endereço</h3>

                <p className="text-sm text-gray-600">
                  Rua das Flores, 123 - Centro
                </p>

                <p className="text-sm text-gray-600">
                  São Paulo - SP, 01234-567
                </p>
              </div>
            </div>

            {/* Telefone */}
            <div className="flex gap-3">
              <Phone className="text-blue-500 mt-1" size={20} />

              <div>
                <h3 className="font-semibold">Telefone</h3>

                <p className="text-sm text-gray-600">
                  (11) 9999-9999
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-3">
              <Mail className="text-blue-500 mt-1" size={20} />

              <div>
                <h3 className="font-semibold">E-mail</h3>

                <p className="text-sm text-gray-600">
                  contato@criam.com.br
                </p>
              </div>
            </div>

            {/* Botão */}
            <div className="pt-4">
              <Button className="bg-green-600 hover:bg-green-700">
                Fale conosco no WhatsApp
              </Button>
            </div>

          </div>

          {/* Mapa */}
          <div className="w-full h-[300px] rounded-lg overflow-hidden border">

            <iframe
              src="https://www.google.com/maps?q=São%20Paulo%20SP&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />

          </div>

        </div>

      </div>

    </section>
  )
}