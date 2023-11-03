"use client";

import React, { useEffect, useState } from "react";

import UrlCard from "./UrlCard";
import styles from "./UrlCardDeck.module.css";

function UrlCardDeck({ success }: { success: any }) {
  const [localUrls, setLocalUrls] = useState(
    JSON.parse(localStorage.getItem("localUrls"))
  );

  useEffect(() => {
    setLocalUrls(JSON.parse(localStorage.getItem("localUrls")));
  }, [success]);

  return localUrls ? (
    <section className={styles.urlCardDeckSection}>
      <div className={styles.urlCardDeckContainer}>
        {localUrls.map((card: { long?: string; short?: string }) => {
          return (
            <div>
              <UrlCard {...card} />
            </div>
          );
        })}
      </div>
    </section>
  ) : null;
}

export default UrlCardDeck;
