"use client";

import React, { useEffect, useState } from "react";

import styles from "./CopyButton.module.css";

function CopyButton() {
  const [copySuccess, setCopySuccess] = useState(false);

  function handleCopyClick(e: any) {
    const shortUrl = e.target.parentElement.children[1].innerText;
    navigator.clipboard.writeText(shortUrl);
    setCopySuccess(true)
  }

  useEffect(() => {
    if (copySuccess) {
      setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
    }
  }, [copySuccess]);

  return (
    <button
      type="button"
      className={`${styles.copyBtn} ${styles.other} ${copySuccess ? styles.copied : null}`}
      onClick={(e) => handleCopyClick(e)}
    >
      {copySuccess ? "Copied!" : "Copy"}
    </button>
  );
}

export default CopyButton;
