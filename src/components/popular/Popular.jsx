import React from "react";
import styles from "./popular.module.css";

const Popular = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Most Popular</h3>
      <div className={styles.wrapper}>
        <div>Blog post</div>
        <div>Blog post</div>
        <div>Blog post</div>
        <div>Blog post</div>
      </div>
    </div>
  );
};

export default Popular;
