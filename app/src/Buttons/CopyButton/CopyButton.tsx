"use client"

import React from "react";

import styles from "./CopyButton.module.css";

function CopyButton() {

    function handleCopyClick(e) {
        console.log(e.target.parentElement.children[0].innerText)
        console.log(e.target.parentElement.children[1].innerText)
    }
  return (
    <button type="button" className={styles.copyBtn} onClick={e => handleCopyClick(e)}>
      Copy
    </button>
  );
}

export default CopyButton;
