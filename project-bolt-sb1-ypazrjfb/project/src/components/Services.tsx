import { Sparkles } from 'lucide-react';

const services = [
  {
    name: 'Volume Brasileiro',
    price: 'R$ 165,00',
    image: 'whatsapp_image_2025-11-29_at_20.21.37.jpeg',
  },
  {
    name: 'Volume Fox',
    price: 'R$ 165,00',
    image: 'whatsapp_image_2025-11-29_at_20.21.38.jpeg',
  },
  {
    name: 'Volume Fox Marrom',
    price: 'R$ 165,00',
    image: 'whatsapp_image_2025-11-29_at_20.21.38_(1).jpeg',
  },
  {
    name: 'Volume Europeu',
    price: 'R$ 165,00',
    image: 'whatsapp_image_2025-11-29_at_20.21.38_(2).jpeg',
  },
  {
    name: 'Mega Volume',
    price: 'R$ 220,00',
    image: 'whatsapp_image_2025-11-29_at_20.21.39_(1).jpeg',
  },
  {
    name: 'Mega Volume',
    price: 'R$ 220,00',
    image: '/whatsapp_image_2025-11-29_at_20.21.39.jpeg',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-amber-500" size={28} />
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
              Procedimentos
            </h2>
            <Sparkles className="text-amber-500" size={28} />
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto"></div>
          <p className="text-gray-600 mt-6 text-lg">
            Técnicas especializadas para realçar sua beleza natural
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-swing"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 bg-gradient-to-br from-stone-50 to-white">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {service.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">
                    {service.price}
                  </span>
                  <span className="text-amber-500 text-sm font-medium px-3 py-1 bg-amber-50 rounded-full">
                    Agendar
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
