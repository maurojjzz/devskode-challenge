import styles from "./form.module.css";
import { Input, Select, Button } from "../Shared";

const Form = () => {
  return (
    <div className={`d-flex justify-content-center align-items-center ${styles.formContainer}`}>
      <form
        className={`d-flex flex-column justify-content-center align-items-center rounded-3 position-relative ${styles.formBox}`}
      >
        <img className={`position-absolute ${styles.closeIcon}`} src="/assets/icons/close.png" alt="close icon" />
        <h1 className={`${styles.formTitle}`}>Create Product</h1>
        <div className={`d-flex flex-column flex-lg-row ${styles.inputsContainer}`}>
          <Input type={"text"} placeholder={"Name of food"} />
          <Input type={"text"} placeholder={"Ingredients"} />
        </div>
        <div className={`d-flex flex-column flex-lg-row ${styles.inputsContainer}`}>
          <Input type={"number"} placeholder={"Price"} />
          <Select title={"Stock"} data={["In Stock", "Out of Stock"]} />
        </div>
        <div className={`d-flex flex-column flex-lg-row ${styles.inputsContainer}`}>
          <Select title={"Stars"} data={[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]} />
          <Input type={"url"} placeholder={"Image URL"} />
        </div>
        <div className={` ${styles.buttonBox}`}>
          <Button  />
        </div>
      </form>
    </div>
  );
};

export default Form;
