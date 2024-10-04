import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";
import Tagline from "@/components/tagline/Tagline";
import Link from "next/link";
import styles from "./homepage.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Tagline />
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}