import Comments from "@/components/comments/Comments";
import MenuExp from "@/components/menuExp/MenuExp";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./singlePage.module.css";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backBtn}>
        back to blog
      </Link>
      <div className={styles.header}>
        <h1 className={styles.title}>Title of Blog Post</h1>
        <div className={styles.headerContent}>
          <div className={styles.imgContainer}>
            <Image
              src="/james-fobes-headshot.jpg"
              alt="James headshot"
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.headerText}>
            <h4 className={styles.author}>James Fobes</h4>
            <span className={styles.date}>date</span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <Image
            src="/umbrella.jpg"
            alt="Umbrella"
            width={600}
            height={400}
            className={styles.postImage}
          />
          <div className={styles.postText}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              dignissimos laudantium eum repellendus placeat sint, a iste saepe
              mollitia dolores sit earum perferendis eligendi vitae impedit,
              pariatur cum, quae rem. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Eveniet dignissimos laudantium eum repellendus
              placeat sint, a iste saepe mollitia dolores sit earum perferendis
              eligendi vitae impedit, pariatur cum, quae rem. Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Eveniet dignissimos
              laudantium eum repellendus placeat sint, a iste saepe mollitia
              dolores sit earum perferendis eligendi vitae impedit, pariatur
              cum, quae rem.
            </p>
            <h2>Subtitle within blog</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              dignissimos laudantium eum repellendus placeat sint, a iste saepe
              mollitia dolores sit earum perferendis eligendi vitae impedit,
              pariatur cum, quae rem. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Eveniet dignissimos laudantium eum repellendus
              placeat sint, a iste saepe mollitia dolores sit earum perferendis
              eligendi vitae impedit, pariatur cum, quae rem. Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Eveniet dignissimos
              laudantium eum repellendus placeat sint, a iste saepe mollitia
              dolores sit earum perferendis eligendi vitae impedit, pariatur
              cum, quae rem.
            </p>
            <h2>Subtitle within blog</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              dignissimos laudantium eum repellendus placeat sint, a iste saepe
              mollitia dolores sit earum perferendis eligendi vitae impedit,
              pariatur cum, quae rem. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Eveniet dignissimos laudantium eum repellendus
              placeat sint, a iste saepe mollitia dolores sit earum perferendis
              eligendi vitae impedit, pariatur cum, quae rem. Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Eveniet dignissimos
              laudantium eum repellendus placeat sint, a iste saepe mollitia
              dolores sit earum perferendis eligendi vitae impedit, pariatur
              cum, quae rem.
            </p>
            <h2>Subtitle within blog</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              dignissimos laudantium eum repellendus placeat sint, a iste saepe
              mollitia dolores sit earum perferendis eligendi vitae impedit,
              pariatur cum, quae rem. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Eveniet dignissimos laudantium eum repellendus
              placeat sint, a iste saepe mollitia dolores sit earum perferendis
              eligendi vitae impedit, pariatur cum, quae rem. Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Eveniet dignissimos
              laudantium eum repellendus placeat sint, a iste saepe mollitia
              dolores sit earum perferendis eligendi vitae impedit, pariatur
              cum, quae rem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              dignissimos laudantium eum repellendus placeat sint, a iste saepe
              mollitia dolores sit earum perferendis eligendi vitae impedit,
              pariatur cum, quae rem. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Eveniet dignissimos laudantium eum repellendus
              placeat sint, a iste saepe mollitia dolores sit earum perferendis
              eligendi vitae impedit, pariatur cum, quae rem. Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Eveniet dignissimos
              laudantium eum repellendus placeat sint, a iste saepe mollitia
              dolores sit earum perferendis eligendi vitae impedit, pariatur
              cum, quae rem.
            </p>
            <h2>Subtitle within blog</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              dignissimos laudantium eum repellendus placeat sint, a iste saepe
              mollitia dolores sit earum perferendis eligendi vitae impedit,
              pariatur cum, quae rem. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Eveniet dignissimos laudantium eum repellendus
              placeat sint, a iste saepe mollitia dolores sit earum perferendis
              eligendi vitae impedit, pariatur cum, quae rem. Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Eveniet dignissimos
              laudantium eum repellendus placeat sint, a iste saepe mollitia
              dolores sit earum perferendis eligendi vitae impedit, pariatur
              cum, quae rem. Eveniet dignissimos laudantium eum repellendus
              placeat sint, a iste saepe mollitia dolores sit earum perferendis
              eligendi vitae impedit, pariatur cum, quae rem. Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Eveniet dignissimos
              laudantium eum repellendus placeat sint, a iste saepe mollitia
              dolores sit earum perferendis eligendi vitae impedit, pariatur
              cum, quae rem.
            </p>
          </div>
          <Comments />
        </div>
        <MenuExp />
      </div>
    </div>
  );
};

export default SinglePage;
