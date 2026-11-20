import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const MenuSection = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const Base_url="https://mie-lora-a-bakery-shop.vercel.app/";

  useEffect(() => {
    fetch(`${Base_url}/data.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  const categories = ["All", "Pastries", "Cakes", "Cupcakes", "Cookies", "Breads"];


  const filteredProducts = products.filter((item) => {
    const matchCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    const query = (searchQuery || "").toLowerCase();
    const matchSearch =
      !query ||
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query);

    return matchCategory && matchSearch;
  });

  return (
    <section id="menu" className="py-16 sm:py-24 bg-black text-white">
      <div id="specials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3 animate-fade-up">
          <span className="text-xs uppercase tracking-[0.25em] text-yellow-400 font-semibold">
            Fresh From The Oven
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
            Our Signature Menu
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Explore our handcrafted selection of daily baked treats.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`btn btn-sm rounded-full px-5 transition-all duration-300 ${
                selectedCategory === category
                  ? "border-none bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 text-black font-bold shadow-md shadow-yellow-500/20"
                  : "bg-neutral-900 border border-yellow-500/30 text-neutral-300 hover:border-yellow-400 hover:text-yellow-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-neutral-400">
            No items found matching your search.
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;