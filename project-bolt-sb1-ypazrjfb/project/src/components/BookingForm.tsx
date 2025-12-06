import { useState } from 'react';
import { Calendar, Send } from 'lucide-react';

const procedures = [
  { name: 'Volume Brasileiro', price: 'R$ 165,00' },
  { name: 'Volume Fox', price: 'R$ 165,00' },
  { name: 'Volume Fox Marrom', price: 'R$ 165,00' },
  { name: 'Volume Europeu', price: 'R$ 165,00' },
  { name: 'Mega Volume', price: 'R$ 220,00' },
  { name: 'Manutenções', price: 'R$ 130,00' },
  { name: 'Manutenção Mega V.', price: 'R$ 180,00' },
];

export default function BookingForm() {
  const [selectedProcedure, setSelectedProcedure] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProcedure) {
      alert('Por favor, selecione um procedimento');
      return;
    }

    const message = `Olá Bianca! Quero agendar esse procedimento: ${selectedProcedure}.`;
    const whatsappUrl = `https://wa.me/5531910288533?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="agendar" className="py-20 bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Calendar className="text-amber-500" size={28} />
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
              Agendar Procedimento
            </h2>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto"></div>
          <p className="text-gray-600 mt-6 text-lg">
            Escolha seu procedimento e agende pelo WhatsApp
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 hover:shadow-3xl transition-all duration-300 animate-swing">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="procedure"
                className="block text-lg font-semibold text-gray-800 mb-4"
              >
                Selecione o procedimento desejado:
              </label>
              <select
                id="procedure"
                value={selectedProcedure}
                onChange={(e) => setSelectedProcedure(e.target.value)}
                className="w-full px-6 py-4 text-lg border-2 border-stone-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-200 transition-all duration-300 bg-white text-gray-800 cursor-pointer hover:border-amber-300"
                required
              >
                <option value="">Escolha uma opção...</option>
                {procedures.map((proc, index) => (
                  <option key={index} value={`${proc.name} ${proc.price}`}>
                    {proc.name} - {proc.price}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3"
            >
              <Send size={24} />
              Agendar via WhatsApp
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Você será redirecionado para o WhatsApp para finalizar o agendamento
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
