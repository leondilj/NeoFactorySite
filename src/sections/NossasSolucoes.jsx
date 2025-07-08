export default function NossasSolucoes() {
  return (
    <section id="solucoes" className="py-16 px-4 max-w-6xl mx-auto text-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-12">Nossas Soluções</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-slate-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-2 text-blue-400">🔧 NeoFactory Core</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-200">
            <li>Controle total da produção</li>
            <li>Rastreabilidade em tempo real</li>
            <li>Redução de desperdícios</li>
            <li>Indicadores para tomada de decisão</li>
          </ul>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-2 text-blue-400">⚙️ NeoFactory BaaS (Balança como Serviço)</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-200">
            <li>Captação automática de dados de pesagem</li>
            <li>Integração com sistemas de produção</li>
            <li>Alta precisão, menos erros, mais controle</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
