import React from "react";

import styles from "./UrlCard.module.css";
import CopyButton from "../../Buttons/CopyButton/CopyButton";

function UrlCard(props:any) {
  return (
    <div className={styles.urlCard}>
      <p className={styles.urlLong}>{props.long}</p>
      <p className={styles.urlShort}>{props.short}</p>
      <CopyButton />
    </div>
  );
}

export default UrlCard;
