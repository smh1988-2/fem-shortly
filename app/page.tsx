import ConversionPanel from "./src/ConversionPanel/ConversionPanel";
import Hero from "./src/Hero/Hero";
import NavBar from "./src/NavBar/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <ConversionPanel content={"Boost your links today"} />
    </main>
  );
}
