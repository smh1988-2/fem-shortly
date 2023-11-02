import React from "react";

import styles from "./UrlCard.module.css";
import { Button } from "../../Buttons/Button";
import CopyButton from "../../Buttons/CopyButton/CopyButton";

function UrlCard({ card }) {
  return (
    <div className={styles.urlCard}>
      {card.long && <p className={styles.urlLong}>{card.long}</p>}
      <p className={styles.urlShort}>{card.short}</p>
      <CopyButton />
    </div>
  );
}

export default UrlCard;
