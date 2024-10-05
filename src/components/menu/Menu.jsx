import React from "react";
import EditorsPick from "../editorsPick/EditorsPick";
import Popular from "../popular/Popular";
import styles from "./menu.module.css";

const Menu = () => {
  return (
    <div className={styles.container}>
      <Popular />
      <EditorsPick />
    </div>
  );
};

export default Menu;
