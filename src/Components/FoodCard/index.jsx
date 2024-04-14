import styles from "./food-card.module.css";

const FoodCard = ({ data }) => {
  return (
    <div className={`rounded-4 d-flex flex-column align-items-center ${styles.foodCardContainer}`}>
      <div className={`border-bottom border-2 d-flex justify-content-center align-items-center ${styles.picContainer}`}>
        <div className={`${styles.pic}`}>
          <img src={data.image} className={`${styles.pic}`} alt={`food image from ${data.name}`} />
        </div>
      </div>
      <div className={`flex-grow-1 d-flex flex-column justify-content-center ${styles.infoContainer}`}>
        <h1 className={styles.titleCard}>{data.name}</h1>
        <div>
          <h2>Descripcion</h2>
          <p className={styles.description}>{data.description}</p>
        </div>
        <p className="mb-0">
          <span className="fw-bold">Price:</span> ${data.price}
        </p>
        <div className={` d-flex flex-row align-items-center gap-1 ${styles.stockInfoBox}`}>
          <p className={`fw-bold ${styles.availability}`}>Availability:</p>
          <div className={` d-flex align-items-center border rounded-4 ${styles.stock} ${data.stock ? styles.stockPositive : styles.stockNegative}`}>
            {data.stock ? (
              <p className={`${styles.availability}`}>In Stock !</p>
            ) : (
              <p className={` ${styles.availability}`}>Out of Stock !</p>
            )}
          </div>
        </div>
        <div className={`d-flex justify-content-center align-items-center ${styles.starBox} `}>***** {data.rating}</div>
      </div>
    </div>
  );
};

export default FoodCard;
