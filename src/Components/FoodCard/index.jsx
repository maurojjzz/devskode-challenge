import { useState } from "react";
import styles from "./food-card.module.css";
import StarRating from "./StarRating";

const FoodCard = ({ data, setShowForm, setFoodData }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`rounded-4 d-flex flex-column flex-lg-row align-items-center ${styles.foodCardContainer}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`d-flex justify-content-center align-items-center ${styles.picContainer}`}>
        <div className={`${styles.pic}`}>
          <img src={data.image} className={`${styles.pic}`} alt={`food image from ${data.name}`} />
        </div>
      </div>
      <div className={`flex-grow-1 d-flex flex-column justify-content-center px-lg-4 ${styles.infoContainer}`}>
        <div className={`d-flex align-items justify-content-between ${styles.titleCardContainer}`}>
          <h1 className={styles.titleCard}>{data.name}</h1>
          {isHovered && (
            <div className={`d-flex align-items-center gap-2 ${styles.boxIconApi}`}>
              <img
                src="/assets/icons/edit.png"
                alt="edit icon"
                className={styles.pointer}
                onClick={() => {
                  setShowForm(true);
                  setFoodData(data);
                }}
              />
              <img
                src="/assets/icons/trash.png"
                alt="delete icon"
                className={styles.pointer}
                onClick={() => console.log("DELETE")}
              />
            </div>
          )}
        </div>
        <div>
          <h2>Description</h2>
          <p className={styles.description}>{data.description}</p>
        </div>
        <div className="d-flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center">
          <p className="mb-0">
            <span className="fw-bold">Price:</span> ${data.price}
          </p>
          <div className={` d-flex flex-row align-items-center gap-1 ${styles.stockInfoBox}`}>
            <p className={`fw-bold ${styles.availability}`}>Availability:</p>
            <div
              className={` d-flex align-items-center border rounded-4 ${styles.stock} ${
                data.stock ? styles.stockPositive : styles.stockNegative
              }`}
            >
              {data.stock ? (
                <p className={`${styles.availability}`}>In Stock !</p>
              ) : (
                <p className={` ${styles.availability}`}>Out of Stock !</p>
              )}
            </div>
          </div>
          <div className={`d-flex justify-content-center align-items-center mt-2 ${styles.starBox} `}>
            <StarRating rating={data.rating} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
