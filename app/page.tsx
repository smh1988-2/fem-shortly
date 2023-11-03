"use client"

import { useState } from "react";
import CardDeck from "./src/CardDeck/CardDeck";
import UrlCardDeck from "./src/CardDeck/UrlCard Deck/UrlCardDeck";
import ConversionPanel from "./src/ConversionPanel/ConversionPanel";
import Footer from "./src/Footer/Footer";
import Hero from "./src/Hero/Hero";
import NavBar from "./src/NavBar/NavBar";
import Shortener from "./src/Shortener/Shortener";

export default function Home() {

  const [success, setSuccess] = useState(false)

  return (
    <main>
      <NavBar />
      <Hero />
      <Shortener setSuccess={setSuccess} />
      <UrlCardDeck success={success} />
      <CardDeck />
      <ConversionPanel content={"Boost your links today"} />
      <Footer />
    </main>
  );
}
