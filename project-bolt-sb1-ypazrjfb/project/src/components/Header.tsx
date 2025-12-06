import { Instagram } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
            Bianca Moura
          </h1>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              className="text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium"
            >
              Início
            </a>
            <a
              href="#servicos"
              className="text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium"
            >
              Serviços
            </a>
            <a
              href="#manutencao"
              className="text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium"
            >
              Manutenção
            </a>
            <a
              href="#agendar"
              className="text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium"
            >
              Agendar
            </a>
          </nav>

          <a
            href="https://www.instagram.com/bianca.cilioss"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Instagram size={20} />
            <span className="hidden sm:inline text-sm font-medium">Instagram</span>
          </a>
        </div>
      </div>
    </header>
  );
}
