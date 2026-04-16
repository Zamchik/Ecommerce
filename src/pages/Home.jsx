import Sidebar from '../components/Sidebar/Sidebar'
import styles from './Home.module.css'

const Home = () => {
  return (
    <>
      <div className={styles.container_home}>
        <Sidebar />
      </div>
      <footer className={styles.container_footer}>
        
      </footer>
    </>
  )
}

export default Home