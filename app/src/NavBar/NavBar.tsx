import React, { useState } from "react";
import Image from "next/image";

import logo from "../../../public/images/logo.svg";

import styles from "./NavBar.module.css";
import { Button } from "../Buttons/Button";

function NavBar() {

  const [showNav, setShowNav] = useState(false)

  function handleClick() {
    setShowNav(!showNav)
    console.log("clicked")
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoMenuContainer}>
        <Image src={logo} alt="Shortly" />
        <nav className={`${styles.primaryNavigation} ${showNav ? null : styles.hidden}`}>
          <ul>
            <li>
              <a href="#" className={styles.primaryNavigationLink}>
                Features
              </a>
            </li>
            <li>
              <a href="#" className={styles.primaryNavigationLink}>
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className={styles.primaryNavigationLink}>
                Resources
              </a>
            </li>
          </ul>
        </nav>

        
      </div>

      <div className={styles.navButtonsContainer}>
        <a href="#" className={styles.primaryNavigationLink}>
          Login
        </a>
        <Button content={"Sign up"} size="lg" border="rounded" />
      </div>

      <button className={styles.menuIcon} onClick={handleClick}>
          <svg viewBox="0 0 10 8" width="40">
            <path
              d="M1 1h8M1 4h 8M1 7h8"
              stroke="var(--grayish-violet)"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </button>
    </header>
  );
}

export default NavBar;
