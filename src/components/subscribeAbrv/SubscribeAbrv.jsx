import Image from "next/image";
import React from "react";
import styles from "./subscribeAbrv.module.css";

const SubscribeAbrv = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h3 className={styles.title}>Subscribe</h3>
          <p className={styles.text}>
            Wanna get updates? Fill out your info below, and I'll be in touch!
          </p>
          {/* TODO: setup email subscription form */}
        </div>
      </div>
    </div>
  );
};

export default SubscribeAbrv;
