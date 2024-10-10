import React from "react";
import styles from "./comments.module.css";

const Comments = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.title}>Comments</h3>
        <div className={styles.form}>
          <div className={styles.input}>
            <p className={styles.inputTitle}>first name</p>
            <input className={styles.firstName}></input>
          </div>
          <div className={styles.input}>
            <p className={styles.inputTitle}>last name</p>
            <input className={styles.lastName}></input>
          </div>
          <div className={styles.input}>
            <p className={styles.inputTitle}>email address</p>
            <input className={styles.email}></input>
          </div>
          <div className={styles.input}>
            <p className={styles.inputTitle}>comment</p>
            <input className={styles.commentText}></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
