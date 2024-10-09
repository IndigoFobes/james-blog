import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./about.module.css";

const Page = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backBtn}>
        back to blog
      </Link>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>about me.</h1>
        <h2 className={styles.tag}>son. husband. brother. writer. creative.</h2>
        <div className={styles.imgContainer}>
          <Image
            src="/James-dancing.jpg"
            alt="James dancing"
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos vel,
            fugiat illo dolore corrupti laborum natus molestiae eligendi
            consectetur quaerat explicabo error? Voluptas modi dolore deleniti
            iure, perferendis culpa quibusdam. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quos vel, fugiat illo dolore corrupti
            laborum natus molestiae eligendi consectetur quaerat explicabo
            error? Voluptas modi dolore deleniti iure, perferendis culpa
            quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos vel, fugiat illo dolore corrupti laborum natus molestiae
            eligendi consectetur quaerat explicabo error? Voluptas modi dolore
            deleniti iure, perferendis culpa quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos vel,
            fugiat illo dolore corrupti laborum natus molestiae eligendi
            consectetur quaerat explicabo error? Voluptas modi dolore deleniti
            iure, perferendis culpa quibusdam. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quos vel, fugiat illo dolore corrupti
            laborum natus molestiae eligendi consectetur quaerat explicabo
            error? Voluptas modi dolore deleniti iure, perferendis culpa
            quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos vel, fugiat illo dolore corrupti laborum natus molestiae
            eligendi consectetur quaerat explicabo error? Voluptas modi dolore
            deleniti iure, perferendis culpa quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos vel,
            fugiat illo dolore corrupti laborum natus molestiae eligendi
            consectetur quaerat explicabo error? Voluptas modi dolore deleniti
            iure, perferendis culpa quibusdam. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quos vel, fugiat illo dolore corrupti
            laborum natus molestiae eligendi consectetur quaerat explicabo
            error? Voluptas modi dolore deleniti iure, perferendis culpa
            quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos vel, fugiat illo dolore corrupti laborum natus molestiae
            eligendi consectetur quaerat explicabo error? Voluptas modi dolore
            deleniti iure, perferendis culpa quibusdam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
