export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl logo-text hover:opacity-80 transition">
          NeoFactory
        </a>
        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="#solucoes" className="hover:text-blue-600 scroll-smooth">Soluções</a>
          <a href="#beneficios" className="hover:text-blue-600 scroll-smooth">Benefícios</a>
          <a href="#sobre" className="hover:text-blue-600 scroll-smooth">Sobre Nós</a>
          <a href="#contato" className="hover:text-blue-600 scroll-smooth">Contato</a>
        </nav>
      </div>
    </header>
  );
}
