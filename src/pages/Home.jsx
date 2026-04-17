import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ShopContent from "../components/ShopContent/ShopContent";
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container_home}>
      <Header />
      <ShopContent />
      <Footer />
    </div>
  );
};

export default Home;
