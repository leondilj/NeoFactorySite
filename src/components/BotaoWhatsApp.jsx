export default function BotaoWhatsApp({ mensagem, texto, classe = "" }) {
  const numero = "5541985300512";

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={classe}
    >
      {texto}
    </a>
  );
}
