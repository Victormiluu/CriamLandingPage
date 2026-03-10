import { Contato } from "./components/contato";
import { Espacos } from "./components/espacos";
import { Especialidades } from "./components/especialidades";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { HeroCarousel } from "./components/hero-carousel";
import { Sobre } from "./components/sobre";
import { Valores } from "./components/valores";

export default function App() {

  return (
    <>
      <Header/>

      <HeroCarousel/>

      

      <Especialidades/>

      <Espacos/>

      <Sobre/>

      <Contato/>

      <Footer/>
    </>
  )
}