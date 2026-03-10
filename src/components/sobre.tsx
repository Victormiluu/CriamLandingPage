import { Card, CardContent } from "./ui/card"
import { Target, Eye, Heart } from "lucide-react"

const sobreItems = [
  {
    icon: Target,
    title: "Missão",
    text: "Promover o desenvolvimento integral de crianças neurodivergentes, oferecendo atendimento especializado e humanizado que respeita a individualidade de cada criança."
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Ser referência em atendimento multidisciplinar infantil, reconhecida pela excelência no cuidado e pelos resultados positivos no desenvolvimento das crianças."
  },
  {
    icon: Heart,
    title: "Propósito",
    text: "Transformar vidas através do cuidado dedicado, criando oportunidades para que cada criança alcance seu pleno potencial em um ambiente acolhedor e seguro."
  }
]

export function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-blue-100">

      <div className="max-w-6xl mx-auto px-6">

        {/* Título */}
        <div className="text-center mb-12">

          <h2 className="text-3xl font-semibold mb-4">
            Sobre a CRIAM
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Somos um centro de referência dedicado ao atendimento de crianças
            neurodivergentes, oferecendo suporte integral para seu
            desenvolvimento e bem-estar.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {sobreItems.map((item, index) => {

            const Icon = item.icon

            return (
              <Card key={index} className="border-blue-100">

                <CardContent className="p-6">

                  <div className="flex items-center gap-2 mb-3">

                    <Icon className="text-blue-500" size={20} />

                    <h3 className="font-semibold text-lg">
                      {item.title}
                    </h3>

                  </div>

                  <p className="text-sm text-gray-600">
                    {item.text}
                  </p>

                </CardContent>

              </Card>
            )
          })}

        </div>

      </div>

    </section>
  )
}