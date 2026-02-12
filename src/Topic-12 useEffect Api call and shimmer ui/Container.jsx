import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import Card from "./Card";
import "./style.css";
import SearchBar from "./SearchBar";

const Container = () => {
  const [allProducts, setAllProducts] = useState([]);  // (01x1) [ {}, {}, {}, {}.....]
  const [displayProducts, setDisplayProducts] = useState([]);   // [] // [ {}, {}, {}, {}.....] => // [  {}, {}, {},{}]
  const [filter, setFilter] = useState(false); // false (initial)  // true
  const [sort, setSort] = useState("none");  // sort = none (initial) // sort = "highToLow" // sort = "lowToHigh"
  const [searchValue, setSearchValue] = useState("");


  useEffect(() => {
    getCrafts();
  }, []);

  // API Call Logic
  const getCrafts = async () => {
    try {
      const response = await fetch(
        "https://api.theindianhome.in/api/product/list",
      );
      if (!response.ok) throw new Error("Failed to fetch!!");

      const data = await response.json();
      setAllProducts(data.products);
    } catch (error) {
      console.log("Error:", error);
    }
  };


  useEffect(() => {
    applyFilterandSort();
  }, [allProducts, filter, sort,searchValue]);

  
  const applyFilterandSort = () => {
    let result = [...allProducts]; // (02x2) = [ {}, {}, {}, {}, {} ......], // (03x3)  [ {}, {}, {}, {}]

    if(searchValue.length > 0)
    {
     
       result = result.filter((product) =>
          product.description.toLowerCase().includes(searchValue.toLowerCase())
        )
    }

    if (filter) {
      result = result.filter((product) => product.rating > 4);
    }

    if (sort === "highToLow") 
    {
      result = result.sort((p1, p2) => p2.price - p1.price);
    } 
    else if (sort === "lowToHigh") 
    {
      result = result.sort((p1, p2) => p1.price - p2.price);
    }

    setDisplayProducts(result);
  };

  const handleTopRated = () => {
    setFilter(!filter);
  };

  const handleHighSort = () => {
    setSort(sort === "highToLow" ? "none" : "highToLow");
  };

  const handleLowSort = () => {
    setSort(sort === "lowToHigh" ? "none" : "lowToHigh");
  };

  const handleReset = () => {
    setFilter(false);
    setSort("none");
  };

  return displayProducts.length === 0 ? (
    <Shimmer />
  ) : (
    <div id="container-component">
      {/* Top */}
      <div className="top-banner">

        {/* Search Bar */}
        <SearchBar  setSearchValue={setSearchValue} />

        <button onClick={handleTopRated}>
          {filter ? "✅ Top Rated Crafts" : "Top Rated Crafts"}
        </button>

        <button onClick={handleHighSort}>
          {sort === "highToLow" ? "✅ High To Low" : "High To Low"}
        </button>

        <button onClick={handleLowSort}>
          {sort === "lowToHigh" ? "✅ Low To High" : "Low To High"}
        </button>

        <button onClick={handleReset}>Reset</button>
      </div>

      <div className="card-container">
        {
          // displayProducts = [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
          displayProducts.map((product) => (
            <Card key={product._id} {...product} />
          ))
        }
      </div>
    </div>
  );
};

export default Container;

/**
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
    setFilter("all");
    setSortOrder("none");
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

 */
