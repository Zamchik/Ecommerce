import { useState } from "react";
import styles from "./Brand.module.css";
import products from "../../../data/products";

const Brand = () => {
  const [selectedBrand, setSelectedBrand] = useState("");

  const allBrands = products.map((product) => product.brand);
  const uniqueBrands = [...new Set(allBrands)].sort((a, b) =>
    a.localeCompare(b),
  // Почитать про Set, Map и localeCompare
  );

  const handleChange = (event) => {
    setSelectedBrand(event.target.value);
    console.log("Выбран бренд:", event.target.value);
  };

  return (
    <>
      <div className={styles.label}>Brand</div>
      <select
        id="brand"
        value={selectedBrand}
        onChange={handleChange}
        className={styles.select}
      >
        <option value="">All Brands</option>
        {uniqueBrands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </>
  );
};

export default Brand;
