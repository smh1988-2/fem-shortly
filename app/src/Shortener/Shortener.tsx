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
    setLongUrl(e.target[0].value);

    const newShortUrl = {
      long: longUrl,
      short: "g.com",
    };

    if (checkUrl(e.target[0].value)) {
      setIsValidUrl(true);
      setShowError(false);
      shortenUrl(newShortUrl);
    } else {
      setIsValidUrl(false);
      setShowError(true);
    }
  }

  function checkUrl(urlString: string) {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!urlPattern.test(urlString);
  }

  function shortenUrl(obj: string | object) {
    let existingEntries = JSON.parse(localStorage.getItem("localUrls"));
    if (existingEntries == null) existingEntries = [];

    existingEntries.unshift(obj);
    localStorage.setItem("localUrls", JSON.stringify(existingEntries));
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
