import React from "react";
import styles from "./tagline.module.css";

const Tagline = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        Tagline... What this is. What this blog is about.
      </h1>
    </div>
  );
};

export default Tagline;
