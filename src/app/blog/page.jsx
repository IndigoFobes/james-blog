import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import MenuExp from "@/components/menuExp/MenuExp";
import SubscribeAbrv from "@/components/subscribeAbrv/SubscribeAbrv";
import Image from "next/image";
import Link from "next/link";
import styles from "./blogPage.module.css";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      {/* TODO make component for hero image/title so that it only shows u on proper pages, but it spans the whole page width */}
      <div className={styles.hero}>
        <div className={styles.imgContainer}>
          <Image src="/umbrella.jpg" alt="" fill className={styles.image} />
        </div>
        <h1 className={styles.header}>faith blog</h1>
      </div>
      <div className={styles.spacer}></div>
      <Link href="/" className={styles.backBtn}>
        back to blog
      </Link>
      <div className={styles.wrapper}>
        <CardList />
        <MenuExp />
      </div>
      <SubscribeAbrv />
    </div>
  );
};

export default BlogPage;
