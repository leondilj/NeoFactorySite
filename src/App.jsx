
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./sections/HeroSection";
import PropostaDeValor from "./sections/PropostaDeValor";
import NossasSolucoes from "./sections/NossasSolucoes";
import Beneficios from "./sections/Beneficios";
import Depoimento from "./sections/Depoimento";
import Sobre from "./sections/Sobre";

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <PropostaDeValor />
      <NossasSolucoes />
      <Beneficios />      
      <Depoimento />
      <Sobre />
      <Footer />
    </>
  );
}
