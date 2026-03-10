export function Espacos() {

  const espacos = [
    {
      title: "Sala de Terapia",
      description: "Ambiente preparado para atendimentos individuais.",
      image:
        "https://images.unsplash.com/photo-1598257006458-087169a1f08d",
    },
    {
      title: "Espaço Sensorial",
      description: "Sala com estímulos sensoriais diversos.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    },
    {
      title: "Área de Atividades",
      description: "Local para atividades em grupo e brincadeiras.",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350",
    },
    {
      title: "Recepção",
      description: "Ambiente acolhedor para famílias.",
      image:
        "https://images.unsplash.com/photo-1596464716127-f2a82984de30",
    },
  ]

  return (
    <section id="espacos" className="py-20 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            Nossos Espaços
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Ambientes cuidadosamente planejados para proporcionar conforto
            e segurança durante os atendimentos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-6">

          {espacos.map((item, index) => (
            <div key={index} className="text-center">

              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                {item.description}
              </p>

              <img
                src={item.image}
                className="rounded-lg object-cover h-40 w-full"
              />

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}