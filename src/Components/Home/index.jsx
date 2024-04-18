import { useState, useEffect } from "react";
import FoodCard from "../FoodCard";
import styles from "./home.module.css";
import Form from "../Form";
import AddBtn from "../Shared/AddBtn";
import Modal from "../Shared/Modal";

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
          setShowModal={setShowModal}
          setIdToDelete={setIdToDelete}
        />
      ))}
      <AddBtn setShowForm={setShowForm} setFoodData={setFoodData} />
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
