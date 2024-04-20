import styles from "./header.module.css";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

  return (
    <div className={`d-flex justify-content-between align-items-center ${styles.headerContainer}`}>
      <div className={`d-flex align-items-center ms-2 ${styles.headerTitle}`}
        onClick={() => history.push("/home")}>
        <h1>Coding Challenge</h1>
      </div>
      <div className="d-flex gap-3 me-2 align-items-center ">
        <div className={`d-flex align-items-center gap-1 ${styles.boxIcon}`} 
            onClick={() => history.push("/home")}>
                <img className={`${styles.headerIcon}`} src={`/assets/icons/home.png`} alt="trash icon" />
                Home
        </div>
        <div className={`d-flex align-items-center gap-1 ${styles.boxIcon}`} 
            onClick={() => history.push("/about")}>
                <img className={`${styles.headerIcon}`} src={`/assets/icons/about.png`} alt="trash icon" />
                About
        </div>
      </div>
    </div>
  );
}

export default Header;
