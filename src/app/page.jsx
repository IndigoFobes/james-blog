import AboutJames from "@/components/aboutJames/AboutJames";
import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";
import Subscribe from "@/components/subscribe/Subscribe";
import Tagline from "@/components/tagline/Tagline";
import Verse from "@/components/verse/Verse";
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
      <AboutJames />
      <Subscribe />
      <Verse />
    </div>
  );
}
