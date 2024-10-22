import React from "react";
import styles from "./loginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Login</h1>
        <div className={styles.socialBtn}>Hey James! Sign in with Google.</div>
      </div>
    </div>
  );
};

export default LoginPage;
