import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./editorsPick.module.css";

const EditorsPick = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Editor's Pick</h3>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.link}>
          <div className={styles.imgContainer}>
            <Image
              src="/coffee.jpg"
              alt="Cup of coffee."
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <h4 className={styles.blogTitle}>Title of Popular Blog Post</h4>

            <span className={styles.date}>04.24.24</span>
          </div>
        </Link>
        <Link href="/" className={styles.link}>
          <div className={styles.imgContainer}>
            <Image
              src="/coffee.jpg"
              alt="Cup of coffee."
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <h4 className={styles.blogTitle}>Title of Popular Blog Post</h4>

            <span className={styles.date}>04.24.24</span>
          </div>
        </Link>
        <Link href="/" className={styles.link}>
          <div className={styles.imgContainer}>
            <Image
              src="/coffee.jpg"
              alt="Cup of coffee."
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <h4 className={styles.blogTitle}>Title of Popular Blog Post</h4>

            <span className={styles.date}>04.24.24</span>
          </div>
        </Link>
        <Link href="/" className={styles.link}>
          <div className={styles.imgContainer}>
            <Image
              src="/coffee.jpg"
              alt="Cup of coffee."
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <h4 className={styles.blogTitle}>Title of Popular Blog Post</h4>

            <span className={styles.date}>04.24.24</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default EditorsPick;
