"use client";

import React, { useState } from "react";

import styles from "./styles.module.css";
import { Button } from "../Buttons/Button";

function Shortener() {
  const [longUrl, setLongUrl] = useState("");
  const [validUrl, setValidUrl] = useState(false)

  function handleSubmit(e: any) {
    e.preventDefault();

    if (isValidUrl(e.target[0].value)) {
      setValidUrl(true)
      console.log("true!");
    } else {
      setValidUrl(false)
      console.log("false");
    }

    setLongUrl(e.target[0].value);
    shortenUrl();
  }

  function isValidUrl(urlString: string) {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!urlPattern.test(urlString);
  }

  function shortenUrl() {}

  return (
    <section className={styles.shortenSection}>
      <div className={styles.shortenContainer}>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.shortenForm}>
          <input type="text" placeholder="Shorten a link here..." 
          className={ validUrl ? styles.validUrl : styles.invalidUrl} />
          <Button
            content={"Shorten It!"}
            size="lg"
            border="squared"
            type={"submit"}
          />
        </form>
        <p className={styles.errorMessage}>Please add a valid link</p>
      </div>
    </section>
  );
}

export default Shortener;
