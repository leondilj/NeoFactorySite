import BotaoWhatsApp from '../components/BotaoWhatsApp'; // ajuste o caminho conforme a estrutura

export default function HeroSection() {
  return (
    <section className="py-20 text-center bg-transparent text-gray-100">
      <h1 className="text-4xl font-bold mb-4">
        Transformamos a Indústria com Tecnologia e Inteligência
      </h1>
      <p className="text-xl mb-6 max-w-3xl mx-auto text-gray-300">
        Soluções digitais para controle total da produção, rastreabilidade e decisões estratégicas baseadas em dados.
      </p>
      <BotaoWhatsApp
        mensagem="Olá, gostaria de agendar uma conversa com a NeoFactory."
        texto="Solicite uma Demonstração"
        classe="btn-agendar"
      />
    </section>
  );
}
