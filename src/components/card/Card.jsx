import Image from "next/image";
import React from "react";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/rain-drops.jpg"
          alt="rain drops"
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.dateCatWrapper}>
          <h4 className={styles.date}>date</h4>
          <span>–</span>
          <h4 className={styles.category}>category</h4>
        </div>
        <h3 className={styles.blogTitle}>Title of Blog</h3>
        {/* TODO: limit amount of words in text below */}
        <div className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
          illum voluptatem assumenda dicta ipsum nostrum et minus maiores
          magnam, quia rem repellendus sed velit, numquam officiis id! Amet,
          eaque itaque? Lorem ipsum...
        </div>
        <button className={styles.button}>Read More</button>
      </div>
    </div>
  );
};

export default Card;
