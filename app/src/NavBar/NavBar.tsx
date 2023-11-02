import React from "react";
import Image from "next/image";

import logo from "../../../public/images/logo.svg";

import styles from "./NavBar.module.css";
import { Button } from "../Buttons/Button";

function NavBar() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoMenuContainer}>
        <Image src={logo} alt="Shortly" />
        <nav className={styles.primaryNavigation}>
          <ul>
            <li>
              <a href="#" className={styles.primaryNavigationLink}>Features</a>
            </li>
            <li>
              <a href="#" className={styles.primaryNavigationLink}>Pricing</a>
            </li>
            <li>
              <a href="#" className={styles.primaryNavigationLink}>Resources</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.navButtonsContainer}>
        <a href="#">Login</a>
        <Button content={"Sign up"} size="lg" border="squared" />
      </div>
    </header>
  );
}

export default NavBar;
