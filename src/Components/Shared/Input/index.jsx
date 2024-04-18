import styles from "./input.module.css";

const Input = ({ type, placeholder, register, name, errors }) => {
  return (
    <div className={` ${styles.inputContainer}`}>
      <input
        className={` w-100 h-100 ${styles.inputBox} ${errors && styles.inputBoxError}`}
        type={type}
        placeholder={placeholder}
        {...register(name, { required: true, message: "Required field" })}
      />
      {errors && <p className={`text-danger text-center ${styles.error}`}>{errors}</p>}
    </div>
  );
};

export default Input;
