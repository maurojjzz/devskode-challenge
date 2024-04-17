import styles from "./button.module.css";
const Button = () => {
  return (
    <div className={` ${styles.buttonContainer}`}>
      <button type="submit" className={`h-100 w-100 rounded-3 ${styles.buttonBox}`}>
        Create
      </button>
    </div>
  )
}

export default Button;
