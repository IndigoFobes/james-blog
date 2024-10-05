import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./categoryList.module.css";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Categories</h3>
        <div className={styles.categories}>
          <Link href="/" className={styles.link}>
            <div className={styles.imgWrapper}>
              <Image src="/umbrella.jpg" fill className={styles.image} />
              <div className={styles.catTitle}>faith</div>
            </div>
          </Link>
          <Link href="/" className={styles.link}>
            <div className={styles.imgWrapper}>
              <Image src="/apple.jpg" fill className={styles.image} />
              <div className={styles.catTitle}>joy</div>
            </div>
          </Link>
          <Link href="/" className={styles.link}>
            <div className={styles.imgWrapper}>
              <Image src="/trees.jpg" fill className={styles.image} />
              <div className={styles.catTitle}>fear</div>
            </div>
          </Link>
          <Link href="/" className={styles.link}>
            <div className={styles.imgWrapper}>
              <Image src="/mountains.jpg" fill className={styles.image} />
              <div className={styles.catTitle}>wisdom</div>
            </div>
          </Link>
          <Link href="/" className={styles.link}>
            <div className={styles.imgWrapper}>
              <Image src="/coffee.jpg" fill className={styles.image} />
              <div className={styles.catTitle}>life</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
