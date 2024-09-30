import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>James Dawson Fobes</div>
        <div className={styles.links}>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.social}>
          <div>LinkedIn</div>
          <div>Youtube</div>
          <div>Email</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
