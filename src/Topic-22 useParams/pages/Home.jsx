import { useEffect, useMemo, useState } from "react";
import Card from "../components/Card";
import Shimmer from "./Shimmer";
import { categoryArray } from "../constants/constant.js";

const quickStats = [
  { value: "10 min", label: "delivery promise" },
  { value: "7000+", label: "products ready" },
  { value: "4.8/5", label: "customer happiness" },
];

const filterTabs = [
  { id: "all", label: "All products" },
  { id: "topRated", label: "Top rated" },
  { id: "budget", label: "Under Rs. 500" },
  { id: "premium", label: "Premium picks" },
];

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          "https://api.theindianhome.in/api/product/list",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }

        const data = await response.json();
        setProducts(data.products || []);
      } catch (error) {
        setErrorMessage(error.message || "Unable to load products right now.");
      }
    };

    getProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchValue.trim()) {
      const normalizedSearch = searchValue.toLowerCase();
      result = result.filter((product) => {
        const description = product.description?.toLowerCase() || "";
        const category = product.category?.toLowerCase() || "";
        return (
          description.includes(normalizedSearch) ||
          category.includes(normalizedSearch)
        );
      });
    }

    if (activeFilter === "topRated") {
      result = result.filter((product) => Number(product.rating) >= 4.5);
    }

    if (activeFilter === "budget") {
      result = result.filter((product) => Number(product.price) <= 500);
    }

    if (activeFilter === "premium") {
      result = result.filter((product) => Number(product.price) >= 1200);
    }

    if (sortBy === "priceLow") {
      result.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortBy === "priceHigh") {
      result.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (sortBy === "rating") {
      result.sort((a, b) => Number(b.rating) - Number(a.rating));
    }

    return result;
  }, [activeFilter, products, searchValue, sortBy]);

  const spotlightProducts = filteredProducts.slice(0, 8);

  if (!products.length && !errorMessage) {
    return <Shimmer />;
  }

  return (
    <div className="bg-[#f8f9ee] pb-14">
      <section className="border-b border-[#d8dfb0] bg-[radial-gradient(circle_at_top_right,#fef08a_0%,#f5f7dc_35%,#f8f9ee_70%)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:px-8 lg:py-14">
          <div>
            <span className="inline-flex rounded-full border border-[#adc95a] bg-[#eef8c8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#26410f]">
              Blinkit-style storefront
            </span>

            <h1 className="mt-5 max-w-2xl text-4xl font-black tracking-tight text-[#1f2a12] sm:text-5xl lg:text-6xl">
              Groceries, essentials and everyday picks delivered with a faster,
              sharper first impression.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#4c5b32] sm:text-lg">
              Build the feel of a modern quick-commerce homepage with bright
              visuals, high-trust cards, and product discovery that feels easy
              from the first second.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div className="flex flex-1 items-center rounded-2xl border border-[#d5deb5] bg-white px-4 py-4 shadow-sm shadow-[#c9d58b]/30">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search groceries, home decor, gifts..."
                  className="w-full bg-transparent text-sm text-[#24330e] outline-none placeholder:text-[#7b8b61]"
                />
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-2xl border border-[#d5deb5] bg-white px-4 py-4 text-sm font-medium text-[#24330e] outline-none shadow-sm shadow-[#c9d58b]/30"
              >
                <option value="popular">Sort: Popular</option>
                <option value="rating">Sort: Rating</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
              </select>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeFilter === tab.id
                      ? "bg-[#1f7a24] text-white shadow-lg shadow-[#a3d17a]/60"
                      : "border border-[#ccd7a6] bg-white text-[#41532a] hover:border-[#9db858]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-[2rem] bg-[#f9d748] p-6 text-[#1d1d1d] shadow-[0_24px_50px_rgba(186,151,16,0.2)]">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#635100]">
                Delivery
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight">
                In minutes, not in moods.
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#5b4b02]">
                A bright hero card inspired by quick-commerce apps, tuned for
                trust, speed and strong callouts.
              </p>
            </div>

            <div className="grid gap-4 rounded-[2rem] border border-[#d8dfb0] bg-white p-5 shadow-sm shadow-[#dce6ae]/50 sm:col-span-2 lg:grid-cols-3">
              {quickStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-[#f4f8df] p-4 text-center"
                >
                  <p className="text-2xl font-black text-[#21310d]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-[#607147]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#68813b]">
              Shop by category
            </p>
            <h2 className="mt-2 text-2xl font-black text-[#202d14] sm:text-3xl">
              Everyday essentials, arranged cleanly
            </h2>
          </div>
          <p className="hidden max-w-md text-sm leading-6 text-[#61714b] md:block">
            Use strong imagery and simple sections to recreate the fast-scanning
            experience users expect from apps like Blinkit.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {categoryArray.map((category, index) => (
            <article
              key={category.id}
              className={`overflow-hidden rounded-[2rem] border border-[#d8dfb0] bg-white shadow-sm shadow-[#dce6ae]/50 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex h-full flex-col justify-between gap-5 p-5 sm:flex-row sm:items-center">
                <div className="max-w-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#73884c]">
                    Featured lane
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-[#203012]">
                    {category.query.split(" ")[0].toUpperCase()}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#61714b]">
                    Curated tiles that make the homepage feel alive, fast and
                    ready for browsing.
                  </p>
                  <button
                    type="button"
                    className="mt-4 rounded-full bg-[#1f7a24] px-4 py-2 text-sm font-semibold text-white"
                  >
                    Explore section
                  </button>
                </div>
                <div className="overflow-hidden rounded-[1.5rem] bg-[#f7f9ea] p-3">
                  <img
                    src={category.image}
                    alt={category.query}
                    className="h-40 w-full object-cover sm:w-64"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#68813b]">
              Popular now
            </p>
            <h2 className="mt-2 text-2xl font-black text-[#202d14] sm:text-3xl">
              Products customers are likely to add quickly
            </h2>
          </div>
          <div className="rounded-full border border-[#d5deb5] bg-white px-4 py-2 text-sm text-[#5d6d46]">
            Showing {filteredProducts.length} products
          </div>
        </div>

        {errorMessage ? (
          <div className="rounded-[2rem] border border-red-200 bg-red-50 p-6 text-red-700">
            {errorMessage}
          </div>
        ) : spotlightProducts.length === 0 ? (
          <div className="rounded-[2rem] border border-[#d8dfb0] bg-white p-10 text-center shadow-sm shadow-[#dce6ae]/50">
            <h3 className="text-2xl font-bold text-[#21310d]">
              No products matched that search
            </h3>
            <p className="mt-3 text-sm text-[#61714b]">
              Try a different keyword or switch filters to bring more items
              back.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {spotlightProducts.map((element) => (
              <Card key={element._id} element={element} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
