import { useState } from "react";
import styles from "./modal.module.css";
import ModalButtons from "./ModalButtons";
import { Spinner } from "../index.js";

const Modal = ({ setShowModal, idToDelete, handleDeleteItem }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/food/${idToDelete}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        console.log("Error erasing food");
      } else {
        console.log("Successfully deleted food");
        handleDeleteItem(idToDelete);
        setShowModal(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`d-flex justify-content-center align-items-center ${styles.modalContainer}`}>
      <div
        className={`position-relative d-flex flex-column justify-content-between align-items-center ${styles.modalBox}`}
      >
        <img
          className={`position-absolute ${styles.closeIcon}`}
          src="/assets/icons/close.png"
          alt="close icon"
          onClick={() => setShowModal(false)}
        />
        <div className={styles.imageDelete}>
          <img src="/assets/icons/delete.png" alt="delete image" />
        </div>
        <h1 className={` text-center ${styles.modalTitle}`}>Are you sure you want to delete this item?</h1>
        <div className={`d-flex flex-column flex-lg-row ${styles.buttonsContainer}`}>
          {isLoading ? (
            <Spinner type={"dark"}/>
          ) : (
            <>
              <ModalButtons type={"delete"} actionClick={() => handleDelete()} />
              <ModalButtons type={"cancel"} actionClick={() => setShowModal(false)} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
