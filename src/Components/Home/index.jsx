import { useState, useEffect } from "react";
import styles from "./home.module.css";
import FoodCard from "../FoodCard";
import Form from "../Form";
import Filter from "../Filter";
import { AddBtn, Modal, Spinner } from "../Shared";

function Home() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [foodData, setFoodData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/food`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
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

  let filteredData;

  if (selectedCategory !== "all") {
    switch (selectedCategory) {
      case "alphabet-asc": {
        const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
        filteredData = sortedData;
        break;
      }
      case "alphabet-des": {
        const sortedData = [...data].sort((a, b) => b.name.localeCompare(a.name));
        filteredData = sortedData;
        break;
      }
      case "low": {
        const sortedData = [...data].sort((a, b) => a.price - b.price);
        filteredData = sortedData;
        break;
      }
      case "high": {
        const sortedData = [...data].sort((a, b) => b.price - a.price);
        filteredData = sortedData;
        break;
      }
      case "available": {
        filteredData = data.filter((item) => item.stock);
        break;
      }
      default: {
        filteredData = data;
        break;
      }
    }
  } else {
    filteredData = data;
  }

  if (minPrice !== "" && maxPrice !== "") {
    filteredData = filteredData.filter((item) => item.price >= minPrice && item.price <= maxPrice);
  }

  if (searchText) {
    filteredData = filteredData.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()));
  }

  return (
    <div className={`d-flex flex-column align-items-center  ${styles.containerHome}`}>
      <Filter
        setShowForm={setShowForm}
        setFoodData={setFoodData}
        setSelectedCategory={setSelectedCategory}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        setSearchText={setSearchText}
        filteredData={filteredData}
        minPrice={minPrice}
        maxPrice={maxPrice}
        searchText={searchText}
      />
      <div
        className={`d-flex flex-wrap justify-content-center gap-5 flex-md-row flex-lg-column justify-content-md-center  align-items-center ${styles.cardsContainer}`}
      >
        {isLoading ? (
          <Spinner type={"dark"}/>
        ) : (
          filteredData.map((item) => (
            <FoodCard
              key={item.id}
              data={item}
              setShowForm={setShowForm}
              setFoodData={setFoodData}
              handleDeleteItem={handleDeleteItem}
              setShowModal={setShowModal}
              setIdToDelete={setIdToDelete}
            />
          ))
        )}
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
