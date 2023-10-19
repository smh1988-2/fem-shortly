import CardDeck from "./src/CardDeck/CardDeck";
import ConversionPanel from "./src/ConversionPanel/ConversionPanel";
import Footer from "./src/Footer/Footer";
import Hero from "./src/Hero/Hero";
import NavBar from "./src/NavBar/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <CardDeck />
      <ConversionPanel content={"Boost your links today"} />
      <Footer />
    </main>
  );
}
