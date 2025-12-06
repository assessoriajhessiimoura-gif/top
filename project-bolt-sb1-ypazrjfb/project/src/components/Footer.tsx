import { Instagram, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-stone-50 to-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent mb-4">
              Bianca Moura
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Lash Designer especializada em realçar a beleza do olhar com técnica e personalização.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="tel:+5531910288533"
                className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-green-600 transition-colors duration-300"
              >
                <Phone size={18} />
                <span>(31) 9 1028-8853</span>
              </a>
              <a
                href="https://www.instagram.com/bianca.cilioss"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-pink-600 transition-colors duration-300"
              >
                <Instagram size={18} />
                <span>@bianca.cilioss</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Horário</h4>
            <p className="text-gray-600">
              Segunda a Sábado<br />
              Agendamento via WhatsApp
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-300 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Bianca Moura - Lash Designer. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
