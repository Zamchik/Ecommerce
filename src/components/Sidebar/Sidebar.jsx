import Brand from './Brand/Brand'
import PriceRange from './PriceRange/PriceRange'
import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
        <div className={styles.label_filters}>
            Filters
        </div>
        <div className={styles.container}>
            <Brand />
            <PriceRange />
            <button className={styles.apply_filters}>Apply Filters</button>
        </div>
    </aside>
  )
}

export default Sidebar