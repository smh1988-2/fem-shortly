import React from "react";
import UrlCard from "./UrlCard";

import styles from "./UrlCardDeck.module.css";

function UrlCardDeck() {
  const shortenUrls = [
    { long: "https://www.google.com", short: "https://g.co" },
    { long: "https://www.google.com", short: "https://g.co" },
  ];

  return (
    <section className={styles.urlCardDeckSection}>
      {shortenUrls.map((card) => {
        return (
          <div>
            <UrlCard card={card} />
          </div>
        );
      })}
    </section>
  );
}

export default UrlCardDeck;
