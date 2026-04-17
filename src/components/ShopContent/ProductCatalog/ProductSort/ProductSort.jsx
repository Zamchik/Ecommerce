import styles from "./ProductSort.module.css";

const ProductSort = () => {
  return (
    <>
      <div>8 products</div>
      {/* Переделать на динамическое отображение количества товаров */}
      <select className={styles.select}>
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
      </select>
    </>
  );
};

export default ProductSort;
