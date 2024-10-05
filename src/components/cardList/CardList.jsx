import React from "react";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";

const CardList = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Recent Posts</h3>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
