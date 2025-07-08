import BotaoWhatsApp from '../components/BotaoWhatsApp';

export default function Sobre() {
  return (
    <section id="sobre" className="py-16 px-4 max-w-5xl mx-auto text-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-6 text-white">
        Sobre a NeoFactory
      </h2>
      <p className="text-lg leading-relaxed text-gray-300">
        A NeoFactory nasceu com o propósito de modernizar a indústria brasileira, conectando equipamentos, pessoas e dados em um ecossistema inteligente. Nossa missão é levar eficiência, controle e inteligência de dados ao chão de fábrica por meio de soluções acessíveis, escaláveis e inovadoras.
      </p>

      {/* Centralizando o botão */}
      <div className="text-center mt-8">
        <BotaoWhatsApp
          mensagem="Olá, gostaria de agendar e falar com o especialista."
          texto="✉️ Fale com um Especialista"
          classe="btn-especialista"
        />
      </div>
    </section>
  );
}
