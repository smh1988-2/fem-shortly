import React from "react";
import Image from "next/image";

import styles from "./styles.module.css"

import logo from "../../../public/images/logo.svg";
import facebookIcon from "../../../public/images/icon-facebook.svg";
import twitterIcon from "../../../public/images/icon-twitter.svg";
import pinterestIcon from "../../../public/images/icon-pinterest.svg";

function Footer() {
  return (
    <section className={styles.footerSection}>
      <div className={styles.footerContainer}>
        <div>
          <Image src={logo} alt="Shortly" />
        </div>

        <nav>
          <div>
            <p>Features</p>
            <ul>
              <li>
                <a>Link Shortening</a>
              </li>
              <li>
                <a>Branded Links</a>
              </li>
              <li>
                <a>Analytics</a>
              </li>
            </ul>
          </div>

          <div>
            <p>Resources</p>
            <ul>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Developers</a>
              </li>
              <li>
                <a>Support</a>
              </li>
            </ul>
          </div>

          <div>
            <p>Company</p>
            <ul>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Our Team</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </nav>

        <div>
          <Image src={facebookIcon} alt="Shortly" />
          <Image src={twitterIcon} alt="Shortly" />
          <Image src={pinterestIcon} alt="Shortly" />
        </div>
      </div>
    </section>
  );
}

export default Footer;
