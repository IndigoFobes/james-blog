import React from "react";
import styles from "./comments.module.css";

const Comments = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Comments</h3>
      <div className={styles.form}>
        <div className={`${styles.input} ${styles.firstName}`}>
          <p className={styles.inputTitle}>first name</p>
          <input></input>
        </div>
        <div className={`${styles.input} ${styles.lastName}`}>
          <p className={styles.inputTitle}>last name</p>
          <input></input>
        </div>
        <div className={`${styles.input} ${styles.email}`}>
          <p className={styles.inputTitle}>email address</p>
          <input></input>
        </div>
        <div className={`${styles.input} ${styles.message}`}>
          <p className={styles.inputTitle}>comment</p>
          <textarea></textarea>
        </div>
        <button className={styles.button}>Send comment</button>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.commentInfo}>
            <span className={styles.commentName}>Winnie Pooh</span>
            <span className={styles.commentDate}>09.25.24</span>
          </div>
          <p className={styles.commentText}>
            Wow. I love this blog. What a gift to the world. I am so encouraged.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.commentInfo}>
            <span className={styles.commentName}>Winnie Pooh</span>
            <span className={styles.commentDate}>09.25.24</span>
          </div>
          <p className={styles.commentText}>
            I love CS Lewis. So glad this blog exists... I want more people to
            talk about CS Lewis. James is doing such good stuff. Not many bears
            out there writing content THIS good.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.commentInfo}>
            <span className={styles.commentName}>Winnie Pooh</span>
            <span className={styles.commentDate}>09.25.24</span>
          </div>
          <p className={styles.commentText}>
            Wow. I love this blog. What a gift to the world. I am so encouraged.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.commentInfo}>
            <span className={styles.commentName}>Winnie Pooh</span>
            <span className={styles.commentDate}>09.25.24</span>
          </div>
          <p className={styles.commentText}>
            Wow. I love this blog. What a gift to the world. I am so encouraged.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
