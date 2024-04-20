import styles from "./addBtn.module.css";

const AddBtn = ({setShowForm, setFoodData}) => {

    const handleClick =  () => {
        setFoodData({});
        setShowForm(true);
    }
    
  return (
    <div
      className={` rounded-circle d-flex justify-content-center align-items-center ${styles.btnContainer}`}
      onClick={() => handleClick()}
    >
      +
    </div>
  );
};

export default AddBtn;
