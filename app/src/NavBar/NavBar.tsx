"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import logo from "../../../public/images/logo.svg";

import styles from "./NavBar.module.css";
import { Button } from "../Buttons/Button";

function NavBar() {
  const [showNav, setShowNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  function handleClick() {
    setShowNav(!showNav);
  }

  useEffect(() => {
    showNav && isMobile && (document.body.style.overflow = "hidden");
    !showNav && (document.body.style.overflow = "unset");
  }, [showNav, isMobile]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setShowNav(true);
        setIsMobile(false);
      } else if (window.innerWidth < 991) {
        setShowNav(false);
        setIsMobile(true);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoMenuContainer}>
        <Image src={logo} alt="Shortly" />
        <nav
          id="primaryNavigation"
          className={`${styles.primaryNavigation} ${
            showNav ? null : styles.hidden
          }`}
        >
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

          <div className={styles.mobileNavButtonsContainer}>
            <a href="#" className={styles.primaryNavigationLink}>
              Login
            </a>
            <Button content={"Sign up"} size="lg" border="rounded" />
          </div>
        </nav>
      </div>

      <div className={styles.navButtonsContainer}>
        <a href="#" className={styles.primaryNavigationLink}>
          Login
        </a>
        <Button content={"Sign up"} size="lg" border="rounded" />
      </div>

      <button
        className={styles.menuIcon}
        onClick={handleClick}
        aria-controls="primaryNavigation"
      >
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="8"></rect>
          <rect y="30" width="100" height="8"></rect>
          <rect y="60" width="100" height="8"></rect>
        </svg>
      </button>
    </header>
  );
}

export default NavBar;
