import Hero from "./src/Hero/Hero";
import NavBar from "./src/NavBar/NavBar";

import styles from './styles.module.css'


export default function Home() {
  return (
    <main className={styles.container}>
      <NavBar />
      <Hero />
    </main>
  );
}
