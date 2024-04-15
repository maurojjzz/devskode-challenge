import styles from "./star-rating.module.css";

function StarRating({ rating }) {
  let fullStars = Math.floor(rating);
  let halfStars = rating.toString().includes(".") ? 1 : 0;
  let emptyStars = 5 - fullStars - halfStars;

  const f_star = "/assets/icons/full_star.png";
  const h_star= "/assets/icons/half_star.png";
  const e_star= "/assets/icons/empty_star.png";

  return (
    <div className={` ${styles.starBox} `}>
      {rating <= 5 ? 
      (
        <>
          {Array.from({ length: fullStars }).map((_, index) => (
            <img key={index} className={styles.star} src={f_star} alt="full star" />
          ))}
          {Array.from({ length: halfStars }).map((_, index) => (
            <img key={`half-${index}`} className={styles.star} src={h_star} alt="half star" />
          ))}
          {Array.from({ length: emptyStars }).map((_, index) => (
            <img key={`empty-${index}`} className={styles.star} src={e_star} alt="empty star" />
          ))}
        </>
      ) : (
        <div className={styles.ratingError}>rating error</div>
      )}
    </div>
  );
}

export default StarRating;
