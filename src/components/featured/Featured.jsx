import Image from "next/image";
import React from "react";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <Image src="/rain-drops.jpg" fill className={styles.image} />
        </div>
        <div className={styles.textWrapper}>
          <h3 className={styles.title}>Title of Blog</h3>
          {/* TODO: limit amount of words in text below */}
          <div className={styles.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
            illum voluptatem assumenda dicta ipsum nostrum et minus maiores
            magnam, quia rem repellendus sed velit, numquam officiis id! Amet,
            eaque itaque? Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Soluta, illum voluptatem assumenda dicta ipsum nostrum et
            minus maiores magnam, quia rem repellendus sed velit, numquam
            officiis id! Amet, eaque itaque?
          </div>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
