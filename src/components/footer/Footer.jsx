import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logoDesc}>
          <h2 className={styles.logo}>James Dawson Fobes</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            dignissimos. Consectetur natus expedita tempore saepe obcaecati?
            Corrupti, ex nesciunt at quas quod dolores illo fugiat nihil,
            possimus explicabo nam quasi.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.linksWrapper}>
            <h4>Links</h4>
            <div className={styles.links}>
              <Link className={styles.link} href="/">
                Blog
              </Link>
              <Link className={styles.link} href="/about">
                About
              </Link>
              <Link className={styles.link} href="/">
                Contact
              </Link>
            </div>
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
            <Link
              href="mailto:jdfobes@gmail.com"
              className={styles.socialIcons}
            >
              <Image src="/email-icon.png" width={25} height={25} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
