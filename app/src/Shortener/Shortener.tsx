"use client";

import React, { useState } from "react";

import styles from "./styles.module.css";
import { Button } from "../Buttons/Button";

function Shortener() {
  const [longUrl, setLongUrl] = useState("");
  const [urlEntered, setUrlEntered] = useState(false);
  const [isValidUrl, setIsValidUrl] = useState(false);
  const [showError, setShowError] = useState(false);

  function handleSubmit(e: any) {
    e.preventDefault();
    setUrlEntered(true);

    if (checkUrl(e.target[0].value)) {
      setIsValidUrl(true);
      setShowError(false)
    } else {
      setIsValidUrl(false);
      setShowError(true)
    }

    setLongUrl(e.target[0].value);
    shortenUrl();
  }

  function checkUrl(urlString: string) {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!urlPattern.test(urlString);
  }

  function shortenUrl() {
    
  }

  return (
    <section className={styles.shortenSection}>
      <div className={styles.shortenContainer}>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.shortenForm}>
          <input
            type="text"
            placeholder="Shorten a link here..."
            className={showError ? styles.invalidUrl : styles.validUrl}
          />
          <Button
            content={"Shorten It!"}
            size="lg"
            border="squared"
            type={"submit"}
          />
        </form>
        <p
          className={showError ? styles.errorMessage : styles.hideErrorMessage}
        >
          Please add a valid link
        </p>
      </div>
    </section>
  );
}

export default Shortener;
