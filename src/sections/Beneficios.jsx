export default function Beneficios() {
  const items = [
    "Maior eficiência operacional",
    "Controle do uso de matéria-prima",
    "Produção rastreável de ponta a ponta",
    "Relatórios estratégicos para decisões ágeis",
    "Integração com sistemas já utilizados (ERP, BI, etc.)",
    "Redução de perdas e aumento de margem"
  ];

  return (
    <section id="beneficios" className="py-16 px-4 max-w-4xl mx-auto text-gray-100">      
      <h2 className="text-3xl font-semibold text-center mb-10 text-white">
        Benefícios Reais para sua Indústria
      </h2>
      <ul className="grid gap-4 text-lg list-none">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-400 mr-2">✅</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>    
    </section>
  );
}
