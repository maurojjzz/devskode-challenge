import { useState, useEffect } from 'react';
import FoodCard from '../FoodCard';
import styles from './home.module.css';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(import.meta.env.VITE_API_URL);
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);
  
  return (
    <div className={`d-flex flex-column flex-md-row flex-lg-column justify-content-md-center flex-wrap align-items-center gap-5 ${styles.containerHome}`}>
      {data.map((item) => (
        <FoodCard key={item.id} data={item} />
      ))}
    </div>
  )
}

export default Home;
