export default function Hero() {
  return (
    <section id="inicio" className="pt-24 pb-16 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-2">
                Sobre mim
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Sou <span className="font-semibold text-amber-700">Bianca Moura</span>, Lash Designer especializada em realçar a beleza do olhar com técnica, segurança e personalização. Meu objetivo é entregar resultados leves, duradouros e adaptados para cada cliente.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#servicos"
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Ver Serviços
              </a>
              <a
                href="#agendar"
                className="px-8 py-3 bg-white border-2 border-amber-500 text-amber-600 rounded-full font-medium hover:bg-amber-50 transition-all duration-300 hover:scale-105"
              >
                Agendar Agora
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300/30 to-rose-300/30 rounded-3xl transform rotate-3"></div>
              <img
                src="/whatsapp_image_2025-11-29_at_21.16.18.jpeg"
                alt="Bianca Moura - Lash Designer"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
