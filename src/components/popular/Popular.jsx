import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./popular.module.css";

const Popular = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Most Popular</h3>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.link}>
          <div className={`${styles.category} ${styles.joy}`}>joy</div>
          <div className={styles.textContainer}>
            <h4 className={styles.blogTitle}>Title of Popular Blog Post</h4>
            <p className={styles.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              expedita...
            </p>
            <span className={styles.date}>04.24.24</span>
          </div>
        </Link>
        <Link href="/" className={styles.link}>
          <div className={`${styles.category} ${styles.faith}`}>faith</div>
          <div className={styles.textContainer}>
            <h4 className={styles.blogTitle}>Title of Popular Blog Post</h4>
            <p className={styles.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              expedita...
            </p>
            <span className={styles.date}>04.24.24</span>
          </div>
        </Link>
        <Link href="/" className={styles.link}>
          <div className={`${styles.category} ${styles.life}`}>life</div>
          <div className={styles.textContainer}>
            <h4 className={styles.blogTitle}>Title of Popular Blog Post</h4>
            <p className={styles.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              expedita...
            </p>
            <span className={styles.date}>04.24.24</span>
          </div>
        </Link>
        <Link href="/" className={styles.link}>
          <div className={`${styles.category} ${styles.fear}`}>fear</div>
          <div className={styles.textContainer}>
            <h4 className={styles.blogTitle}>Title of Popular Blog Post</h4>
            <p className={styles.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              expedita...
            </p>
            <span className={styles.date}>04.24.24</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Popular;
