import styles from "./select.module.css";
const Select = ({ title, data }) => {
  return (
    <div className={`position-relative  ${styles.selectContainer}`}>
      <label className={`form-label position-absolute ${styles.selectLabel}`} htmlFor="defaultSelect">
        {title}
      </label>
      <select className={`h-100 w-100 form-select ${styles.selectBox}`} aria-label="Default select example">
        {data.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
