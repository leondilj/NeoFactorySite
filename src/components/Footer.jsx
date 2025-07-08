export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 text-center text-sm text-gray-600 mt-16">
      <p className="mb-2 font-semibold text-gray-800">NeoFactory © 2025</p>
      <p className="mb-2">📍 Curitiba – PR | 🌐 www.neofactory.com.br</p>
      <p className="mb-4">📧 leondilribeiro@neofactory.com.br | ☎ (41) 98530-0512</p>
      <div className="space-x-4">
        <a href="https://www.linkedin.com" target="_blank" className="hover:text-blue-600">LinkedIn</a>
        <a href="https://www.instagram.com" target="_blank" className="hover:text-pink-500">Instagram</a>
        <a href="#" className="hover:underline">Política de Privacidade</a>
      </div>
    </footer>
  );
}