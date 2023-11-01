import CardDeck from "./src/CardDeck/CardDeck";
import ConversionPanel from "./src/ConversionPanel/ConversionPanel";
import Footer from "./src/Footer/Footer";
import Hero from "./src/Hero/Hero";
import NavBar from "./src/NavBar/NavBar";
import Shortener from "./src/Shortener/Shortener";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Shortener />
      <CardDeck />
      <ConversionPanel content={"Boost your links today"} />
      <Footer />
    </main>
  );
}
