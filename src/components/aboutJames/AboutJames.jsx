import Image from "next/image";
import React from "react";
import styles from "./aboutJames.module.css";

const AboutJames = () => {
  return (
    <div className={styles.container}>
      <hr className={styles.line}></hr>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <Image
            src="/james-fobes-headshot.jpg"
            alt="James Headshot"
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h3>About James</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            ipsam molestiae dolor, aliquam in doloremque error, excepturi
            pariatur impedit facilis dolores atque corporis deleniti, nobis
            cupiditate? Suscipit eaque nihil eius.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
      <hr className={styles.line}></hr>
    </div>
  );
};

export default AboutJames;
