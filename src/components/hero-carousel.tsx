import { Card, CardContent } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import { Heart, Users, Sparkles } from "lucide-react"

export function HeroCarousel() {

  const images = [
    "https://images.unsplash.com/photo-1588072432836-e10032774350",
  ]

  const items = [
    {
      icon: Heart,
      title: "Acolhimento",
      text: "Cada criança é única e merece um cuidado personalizado e afetuoso."
    },
    {
      icon: Users,
      title: "Família",
      text: "Trabalhamos em parceria com as famílias para resultados duradouros."
    },
    {
      icon: Sparkles,
      title: "Desenvolvimento",
      text: "Estimulamos o potencial de cada criança de forma lúdica e eficaz."
    }
  ]

  return (
    <section id="inicio" className="pt-20 pb-20">

      {/* CAROUSEL */}
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <img
                src={img}
                className="w-full h-[400px] object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* TITULO */}
      <div className="max-w-4xl mx-auto text-center mt-14 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Bem-vindo à <span className="text-blue-500">CRIAM</span>
        </h2>

        {/* TEXTO */}
        <p className="text-lg text-gray-600">
          Na CRIAM, cuidamos do desenvolvimento e bem-estar de crianças
          neurodivergentes por meio de diversas especialidades terapêuticas.
          Nossa equipe é formada por profissionais qualificados que trabalham
          com dedicação para oferecer um ambiente acolhedor, seguro e
          estimulante para cada criança e sua família.
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mt-12 px-6">

        {items.map((item, index) => {

          const Icon = item.icon

          return (
            <Card
              key={index}
              className="bg-blue-50 border-blue-100 text-center "
            >
              <CardContent className="p-5 flex flex-col items-center">

                <div className="mb-3 text-blue-500">
                  <Icon size={28}/>
                </div>

                <h3 className="font-semibold text-base mb-1">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {item.text}
                </p>

              </CardContent>
            </Card>
          )
        })}

      </div>

    </section>
  )
}