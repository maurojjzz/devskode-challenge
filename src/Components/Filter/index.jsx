import styles from "./filter.module.css";
import { AddBtn } from "../Shared";
const Filter = ({
  setShowForm,
  setFoodData,
  setSelectedCategory,
  filteredData,
  setMinPrice,
  setMaxPrice,
  minPrice,
  maxPrice,
  setSearchText,
  searchText
}) => {
  return (
    <div className={` ${styles.topBox}`}>
      <div className={`d-flex justify-content-between ${styles.titleCardContainer}`}>
        <h2 className={`${styles.homeTitle}`}>Home Page</h2>
        <h2 className={`${styles.homeTitle}`}>Total Results: {filteredData.length}</h2>
      </div>
      <div
        className={`d-flex align-items-center justify-content-center rounded-2 text-uppercase d-lg-none ${styles.filterBox}`}
        onClick={() => console.log("abrir el modal de filtros")}
      >
        <img src="/assets/icons/filter.png" alt="filter icon" />
        <p className={`m-0 ${styles.filterText} `}>filter</p>
      </div>

      <div className={`d-none d-lg-flex justify-content-between align-items-center ${styles.filterBoxDesktop}`}>
        <select className={` ${styles.selectContainer}`} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option defaultValue value="all" className={`${styles.selectLabel}`}>
            Select Category
          </option>
          <option value="alphabet-asc">Name (asc)</option>
          <option value="alphabet-des">Name (des)</option>
          <option value="low">Lower price</option>
          <option value="high">Higher price</option>
          <option value="available">Available</option>
        </select>
        <div className={`d-flex gap-3 align-items-center ${styles.priceInputContainer}`}>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min"
            className={` ${styles.priceInput}`}
          />
          <span className={`text-uppercase text-dark fw-bold fs-3`}>-</span>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max"
            className={` ${styles.priceInput}`}
          />
        </div>
        <div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search"
            className={` ${styles.searchInput}`}
          />
        </div>
        <div className={styles.addBtn}>
          <AddBtn setFoodData={setFoodData} setShowForm={setShowForm} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
