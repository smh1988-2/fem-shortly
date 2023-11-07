"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import styles from "./styles.module.css";
import { Button } from "../Buttons/Button";

function Shortener({ setSuccess }: { setSuccess:Dispatch<SetStateAction<boolean>>}) {
  const [showError, setShowError] = useState(false);


  function handleSubmit(e: any) {
    e.preventDefault();

    const newShortUrl = {
      long: e.target[0].value,
      short: "g.com" + "/" + (Math.random() + 1).toString(36).substring(7),
    };

    if (checkUrl(e.target[0].value)) {
      setShowError(false);
      shortenUrl(newShortUrl);
    } else {
      setSuccess(false)
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
    let existingEntries = JSON.parse(localStorage.getItem("localUrls") || "[]");
    if (existingEntries == null) {
      existingEntries = [];
    }

    existingEntries.unshift(obj);
    localStorage.setItem("localUrls", JSON.stringify(existingEntries));
    setSuccess(true)
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
