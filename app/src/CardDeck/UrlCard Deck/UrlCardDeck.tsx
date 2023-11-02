"use client";

import React from "react";

import UrlCard from "./UrlCard";
import styles from "./UrlCardDeck.module.css";

function UrlCardDeck() {
  let localUrls = JSON.parse(localStorage.getItem("localUrls"));

  return (
    localUrls ? (
    <section className={styles.urlCardDeckSection}>
      {localUrls.map((card: any) => {
        return (
          <div>
            <UrlCard card={card} />
          </div>
        );
      })}
    </section>
  ) : null
  )
}

export default UrlCardDeck;
