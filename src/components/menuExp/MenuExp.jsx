import Image from "next/image";
import React from "react";
import EditorsPick from "../editorsPick/EditorsPick";
import Popular from "../popular/Popular";
import styles from "./menuExp.module.css";

const MenuExp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <div className={styles.imgContainer}>
          <Image
            src="/james-fobes-headshot.jpg"
            alt=""
            fill
            className={styles.image}
          />
        </div>
        <h4 className={styles.title}>About James</h4>
        <p className={styles.text}>
          Hi, I'm James. I'm a writer and creative etc etc etc. Hi, I'm James.
          I'm a writer and creative etc etc etc. Hi, I'm James. I'm a writer and
          creative etc etc etc.
        </p>
        <button className={styles.button}>Learn More</button>
      </div>
      <Popular />
      <EditorsPick />
    </div>
  );
};

export default MenuExp;
