import React from "react";
import Image from "next/image";

import styles from "./styles.module.css"

function Card({ ...props }) {

    console.log("icon", props.icon)
  return (
    <div className={styles.card}>
      <Image src={props.icon.src} alt="" width={50} height={50} />
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default Card;
