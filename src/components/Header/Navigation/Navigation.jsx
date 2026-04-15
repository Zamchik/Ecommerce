import styles from './Navigation.module.css'
import CartIcon from '../assets/Cart.png'
import ProfileIcon from '../assets/Profile.png'
import ButtonTechStore from './ButtonTechStore'

const Navigation = () => {
    return (
        <nav className={styles.container_header}>
            <div className={styles.navigation_left}>
                <ButtonTechStore />
                <a className={styles.tv}>TV</a>
                <a className={styles.phone}>Phone</a>
                <a className={styles.laptop}>Laptop</a>
            </div>
            <div className={styles.navigation_right}>
                <button className={styles.button}>
                <img src={CartIcon} alt='cart' />
            </button>
            <button className={styles.button}>
                <img src={ProfileIcon} alt='profile' />
            </button>
            </div>
        </nav>

    )
}

export default Navigation