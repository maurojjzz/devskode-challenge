import { useState, useEffect } from "react";
import FoodCard from "../FoodCard";
import styles from "./home.module.css";
import Form from "../Form";

function Home() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [foodData, setFoodData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/food`);
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  const handleDeleteItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div
      className={`d-flex flex-column flex-md-row flex-lg-column justify-content-md-center flex-wrap align-items-center gap-5 ${styles.containerHome}`}
    >
      {data.map((item) => (
        <FoodCard
          key={item.id}
          data={item}
          setShowForm={setShowForm}
          setFoodData={setFoodData}
          handleDeleteItem={handleDeleteItem}
        />
      ))}
      {showForm && <Form foodData={foodData} id={foodData.id} setShowForm={setShowForm} />}
    </div>
  );
}

export default Home;
