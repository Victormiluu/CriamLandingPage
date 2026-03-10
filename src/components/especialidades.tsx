import { Card, CardContent } from "./ui/card"
import { Brain, Speech, BookOpen, Activity, HeartHandshake } from "lucide-react"

const especialidades = [
  {
    icon: HeartHandshake,
    title: "Psicologia Infantil",
    description:
      "Acompanhamento psicológico especializado para o desenvolvimento emocional e comportamental da criança.",
  },
  {
    icon: Activity,
    title: "Terapia Ocupacional",
    description:
      "Desenvolvimento de habilidades motoras, sensoriais e de autonomia para as atividades do dia a dia.",
  },
  {
    icon: Speech,
    title: "Fonoaudiologia",
    description:
      "Avaliação e tratamento de distúrbios da comunicação, fala e linguagem.",
  },
  {
    icon: BookOpen,
    title: "Psicopedagogia",
    description:
      "Intervenção especializada para dificuldades de aprendizagem e desenvolvimento cognitivo.",
  },
  {
    icon: Brain,
    title: "Neuropsicologia",
    description:
      "Avaliação neuropsicológica completa para compreensão do funcionamento cerebral e cognitivo.",
  },
]

export function Especialidades() {
  return (
    <section id="especialidades" className="py-20 bg-blue-100">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold text-center mb-12">
          Nossas Especialidades
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {especialidades.map((item, index) => {
            const Icon = item.icon

            return (
              <Card
                key={index}
                className="text-center bg-white border-blue-100"
              >
                <CardContent className="p-6 flex flex-col items-center">

                  <div className="text-blue-500 mb-4">
                    <Icon size={32} />
                  </div>

                  <h3 className="font-semibold text-lg mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {item.description}
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