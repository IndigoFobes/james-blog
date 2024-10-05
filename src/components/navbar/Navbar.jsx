import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthLinks from "../authLinks/AuthLinks";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>James Dawson Fobes</div>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>
            Blog
          </Link>
          <Link href="/about" className={styles.link}>
            About
          </Link>
          <Link href="/" className={styles.link}>
            Contact
          </Link>
          <AuthLinks />
        </div>
        <div className={styles.social}>
          <Link
            href="https://www.linkedin.com/in/james-dawson-fobes/"
            target="_blank"
            className={styles.socialIcons}
          >
            <Image src="/linkedin-icon.png" width={25} height={25} />
          </Link>
          <Link href="/" className={styles.socialIcons}>
            <Image src="/youtube-icon.png" width={25} height={25} />
          </Link>
          <Link href="mailto:jdfobes@gmail.com" className={styles.socialIcons}>
            <Image src="/email-icon.png" width={25} height={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
