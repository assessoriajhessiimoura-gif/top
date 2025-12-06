import { RefreshCw } from 'lucide-react';

export default function Maintenance() {
  return (
    <section id="manutencao" className="py-20 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <RefreshCw className="text-amber-500" size={28} />
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
              Manutenção
            </h2>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto"></div>
          <p className="text-gray-600 mt-6 text-lg">
            Mantenha seus cílios sempre perfeitos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="group bg-gradient-to-br from-white to-stone-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-swing">
            <div className="relative overflow-hidden aspect-square">
              <img
                src="/whatsapp_image_2025-11-29_at_21.16.18.jpeg"
                alt="Manutenções dos volumes"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                Manutenções dos volumes
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-green-600">
                  R$ 130,00
                </span>
                <span className="text-amber-500 text-sm font-medium px-4 py-2 bg-amber-50 rounded-full">
                  Agendar
                </span>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-white to-stone-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-swing">
            <div className="relative overflow-hidden aspect-square">
              <img
                src="/whatsapp_image_2025-11-29_at_21.16.18.jpeg"
                alt="Manutenção Mega Volume"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                Manutenção Mega Volume
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-green-600">
                  R$ 180,00
                </span>
                <span className="text-amber-500 text-sm font-medium px-4 py-2 bg-amber-50 rounded-full">
                  Agendar
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
