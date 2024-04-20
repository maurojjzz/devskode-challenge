import styles from "./modalButtons.module.css";
const ModalButtons = ({ type, actionClick }) => {
  return (
    <div className={` ${styles.buttonContainer}`}>
      <button onClick={actionClick} className={`${styles.buttonBox} ${type === "delete" ? styles.deleteButton : styles.cancelButton} `}>
        {type === "delete" ? "Delete" : "Cancel"}
      </button>
    </div>
  );
};

export default ModalButtons;
