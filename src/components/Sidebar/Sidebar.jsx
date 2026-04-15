import Brand from './Brand/Brand'
import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
        <div className={styles.label}>
            Filters
        </div>
        <div className={styles.container}>
            <Brand />
        </div>
    </aside>
  )
}

export default Sidebar