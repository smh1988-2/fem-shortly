"use client";

import React, { useState } from "react";

import styles from "./CopyButton.module.css";

function CopyButton() {
  const [copySuccess, setCopySuccess] = useState(false);

  function handleCopyClick(e: any) {
    const shortUrl = e.target.parentElement.children[1].innerText;
    navigator.clipboard.writeText(shortUrl);
    setCopySuccess(true);
  }

  return (
    <button
      type="button"
      className={`${styles.copyBtn} ${styles.other}`}
      onClick={(e) => handleCopyClick(e)}
    >
      {copySuccess ? "Copied" : "Copy"}
    </button>
  );
}

export default CopyButton;
