import React from "react";
import Card from "./Card/Card";

import styles from "./styles.module.css";

import brandIcon from "../../../public/images/icon-brand-recognition.svg";
import detailedRecords from "../../../public/images/icon-detailed-records.svg";
import fullyCustomizable from "../../../public/images/icon-fully-customizable.svg";

function CardDeck() {
  const cardContent = [
    {
      title: "Brand Recognition",
      content:
        "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
      icon: { ...brandIcon },
    },
    {
      title: "Detailed Records",
      content:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      icon: { ...detailedRecords },
    },
    {
      title: "Fully Customizable",
      content:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      icon: { ...fullyCustomizable },
    },
  ];

  return (
    <section className={styles.cardDeckSection}>
      <div className={styles.cardDeckContainer}>
        <div className={styles.cardDeckTextContainer}>
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className={styles.cardContainer}>
          {cardContent.map((card) => {
            return (
              <Card
                title={card.title}
                key={card.title}
                content={card.content}
                icon={card.icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CardDeck;
