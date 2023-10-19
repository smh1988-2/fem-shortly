import React from "react";
import styles from "./styles.module.css";

function Card({ ...props }) {
  console.log("icon", props.icon);
  return (
    <div className={styles.card}>
      <div
        className={styles.iconContainer}
        style={{ backgroundImage: `url(${props.icon.src})` }}
      ></div>

      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default Card;
