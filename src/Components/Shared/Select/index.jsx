import styles from "./select.module.css";
const Select = ({ title, data, register, name, values, errors }) => {
  return (
    <div className={`position-relative  ${styles.selectContainer}`}>
      <label className={`form-label position-absolute ${styles.selectLabel}`} htmlFor="defaultSelect">
        {title}
      </label>
      <select
        {...register(name, { required: true, message: "Required field" })}
        className={`h-100 w-100 form-select ${styles.selectBox}`}
        aria-label="Default select example"
      >
        {data.map((item, index) => (
          <option key={index} value={values[index]}>
            {item}
          </option>
        ))}
      </select>
      {errors && <p className={`text-danger text-center ${styles.error}`}>{errors}</p>}
    </div>
  );
};

export default Select;
