import Header from "../components/Header/Header";
import ShopContent from "../components/ShopContent/ShopContent";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <ShopContent />
      <footer className={styles.container_footer}></footer>
    </>
  );
};

export default Home;
