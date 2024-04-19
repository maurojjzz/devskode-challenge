import { useState, useEffect } from "react";
import styles from "./home.module.css";
import FoodCard from "../FoodCard";
import Form from "../Form";
import Filter from "../Filter";
import { AddBtn, Modal } from "../Shared";

function Home() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [foodData, setFoodData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);

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

  const handleUpdateItem = (updatedData) => {
    setData(data.map((item) => (item.id === updatedData.id ? updatedData : item)));
  };

  const handleAddItem = (newData) => {
    setData([...data, newData]);
  };

  return (
    <div className={`d-flex flex-column align-items-center  ${styles.containerHome}`}>
      <Filter data={data} setShowForm={setShowForm} setFoodData={setFoodData} />
      <div
        className={`d-flex flex-wrap justify-content-center gap-5 flex-md-row flex-lg-column justify-content-md-center  align-items-center ${styles.cardsContainer}`}
      >
        {data.map((item) => (
          <FoodCard
            key={item.id}
            data={item}
            setShowForm={setShowForm}
            setFoodData={setFoodData}
            handleDeleteItem={handleDeleteItem}
            setShowModal={setShowModal}
            setIdToDelete={setIdToDelete}
          />
        ))}
      </div>
      <div className="d-lg-none">
        <AddBtn setShowForm={setShowForm} setFoodData={setFoodData} />
      </div>
      {showForm && (
        <Form
          foodData={foodData}
          id={foodData.id}
          setShowForm={setShowForm}
          handleUpdateItem={handleUpdateItem}
          handleAddItem={handleAddItem}
        />
      )}
      {showModal && <Modal setShowModal={setShowModal} idToDelete={idToDelete} handleDeleteItem={handleDeleteItem} />}
    </div>
  );
}

export default Home;
