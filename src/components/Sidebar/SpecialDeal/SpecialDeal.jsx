import styles from './SpecialDeal.module.css'
import Cross from '../assets/Cross.png'

const SpecialDeal = () => {
  return (
    <>
      <button className={styles.button}>
        <img src={Cross} alt='cross' />
      </button>
      <div className={styles.container} >
        Da
      </div>
    </>
  )
}

export default SpecialDeal