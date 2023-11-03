import Image from "next/image";
import React from "react";

import styles from "./styles.module.css";

import heroImage from "../../../public/images/illustration-working.svg";
import { Button } from "../Buttons/Button";

function Hero() {
  return (
    <header className={styles.hero}>
      <Image
        src={heroImage}
        alt="Hero illustration"
        className={styles.heroImage}
        priority
      />

      <hgroup className={styles.heroTextContainer}>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand&apos;s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button border={"rounded"} size={"lg"} content={"Get Started"} />
      </hgroup>
    </header>
  );
}

export default Hero;
