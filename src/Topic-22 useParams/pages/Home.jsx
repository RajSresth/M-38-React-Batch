import { useState, useEffect } from "react";
import style from "./Home.module.css";

import Card from "../components/Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import { categoryArray } from "../constants/constant.js";
import { useCart } from "../../Topic-26 Advanced useReducer ContextAPI/CartContext.jsx";

const Home = () => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        "https://api.theindianhome.in/api/product/list",
      );
      const data = await response.json();
      setResponse(data.products);
    };
    getProducts();
  }, []);

  
//  const {state} = useCart(); 

  
  return response.length === 0 ? (
    <Shimmer />
  ) : (
    <div className={style.home}>
      <div className={style.centerContainer}>
        <div className={style["category-container"]}>
          {categoryArray.map((singleCategory) => (
            <CategoryCard key={singleCategory.id} {...singleCategory} />
          ))}
        </div>

        <h2 className={style.title}>Shop All</h2>
        <div className={style.cardContainer}>
          {response.map((element) => {
              return  <Card key={element._id} {...style} element={element}  />
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;







/**
 * {response.map((element) => (
            <Link key={element._id} to={`products/${element._id}`}>
              <Card {...style} {...element} />
            </Link>
          ))}
 */