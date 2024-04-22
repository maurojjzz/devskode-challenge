import styles from "./button.module.css";
import { Spinner } from "../index.js";

const Button = ({isLoading}) => {
  return (
    <div className={` ${styles.buttonContainer}`}>
      <button type="submit" className={`h-100 w-100 rounded-3 ${styles.buttonBox}`}>
         {isLoading ? <Spinner /> : "Create"}
      </button>
    </div>
  );
};

export default Button;
