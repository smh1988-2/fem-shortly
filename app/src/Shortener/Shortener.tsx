"use client";

import React, { Dispatch, SetStateAction, useState } from "react";

import styles from "./styles.module.css";
import { Button } from "../Buttons/Button";

function Shortener({
  setSuccess,
}: {
  setSuccess: Dispatch<SetStateAction<boolean>>;
}) {
  const [showError, setShowError] = useState(false);

  function handleSubmit(e: any) {
    e.preventDefault();

    const Url = e.target[0].value;

    if (checkUrl(Url)) {
      setShowError(false);
      shortenUrl(Url);
    } else {
      setSuccess(false);
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

  const API_KEY =`${process.env.REACT_APP_API_KEY}`

  console.log("key", `${process.env.REACT_APP_API_KEY}`)

  function shortenUrl(url: string) {
    let existingEntries = JSON.parse(localStorage.getItem("localUrls") || "[]");
    if (existingEntries == null) {
      existingEntries = [];
    }

    let body = {
      url: url,
      domain: `tinyurl.com`,
      expires_at: null,
    };

    fetch(
      `https://api.tinyurl.com/create?api_token=${API_KEY}
    `,
      {
        method: `POST`,
        headers: {
          "Content-Type": `application/json`,
        },
        body: JSON.stringify(body),
      }
    )
      .then((response) => {
        if (response.status != 200)
          throw `There was a problem with the fetch operation. Status Code: ${response.status}`;
        return response.json();
      })
      .then((data) => {
        const newUrl = {
          long: data.data.url,
          short: data.data.tiny_url,
        };

        existingEntries.unshift(newUrl);
        localStorage.setItem("localUrls", JSON.stringify(existingEntries));
        setSuccess(true);
      })
      .catch((error) => console.error("error", error));
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
