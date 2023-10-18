import Image from "next/image";
import React from "react";

import styles from "./styles.module.css";

import heroImage from "../../../public/images/illustration-working.svg";

function  Hero() {
  return (
    <header className={styles.hero}>
      <Image src={heroImage} alt="Hero illustration" className={styles.heroImage} />

      <hgroup className={styles.heroTextContainer}>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button>Get started</button>
      </hgroup>
    </header>
  );
}

export default Hero;
