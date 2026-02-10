import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import Card from "./Card";
import "./style.css";

const Container = () => {
  const [response, setResponse] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const list = await fetch("https://api.theindianhome.in/api/product/list");

      if (!list.ok) throw new Error("Something went wrong");

      const data = await list.json();
      // data = {success: true, products: 18 []}

      setResponse(data.products);
      setDisplayProducts(data.products);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleClick = () => {
    const filteredCrafts = displayProducts.filter(
      (element) => element.rating === 5,
    ); // [] (04x4)

    setDisplayProducts(filteredCrafts);
    setFilter(filter === "all" ? "Top Rated Crafts" : "all");
  };

  // high to low sorting
  const highToLow = () => {
    const sortedList = [...displayProducts].sort(
      (e1, e2) => e2.price - e1.price,
    ); // [] (04x4)
    setDisplayProducts(sortedList);
    setSortOrder((sortOrder) =>
      sortOrder === "highToLow" ? "none" : "highToLow",
    );
  };

  // low to high sorting
  const lowToHigh = () => {
    const sortedList = [...displayProducts].sort(
      (e1, e2) => e1.price - e2.price,
    );

    setDisplayProducts(sortedList);
    setSortOrder(sortOrder === "lowToHigh" ? "none" : "lowToHigh");
  };

  const resetAll = () => {
    setDisplayProducts(response);
  };

  return displayProducts.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="top-banner">
        <button onClick={handleClick}>
          {filter === "all" ? "Top Rated Crafts" : "✅ Top Rated Crafts"}
        </button>
        <button onClick={highToLow}>
          {sortOrder === "highToLow" ? "✅ High To Low" : "High To Low"}
        </button>
        <button onClick={lowToHigh}>
          {sortOrder === "lowToHigh" ? "✅ Low To High" : "Low To High"}
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>

      <div className="card-container">
        {displayProducts.map((element) => (
          <Card key={element._id} {...element} />
        ))}
      </div>
    </div>
  );
};

export default Container;

/**
 * element = {
 *  id:
 *  description:,
 *  price:
 *  ratings:
 *  category:
 *  image: []
 *
 * }
 */
