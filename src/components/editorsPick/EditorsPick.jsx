import React from "react";
import styles from "./editorsPick.module.css";

const EditorsPick = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Editor's Pick</h3>
      <div className={styles.wrapper}>
        <div>Blog post</div>
        <div>Blog post</div>
        <div>Blog post</div>
        <div>Blog post</div>
      </div>
    </div>
  );
};

export default EditorsPick;
