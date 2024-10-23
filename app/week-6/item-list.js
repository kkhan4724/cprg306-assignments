"use client";
import { useState } from "react";
import Item from "./item";
import items from "./item.json";  // Import items from JSON file

export default function ItemList() {
  // Initialize sortBy state variable with "name"
  const [sortBy, setSortBy] = useState("name");

  // Function to sort items based on the sortBy state
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="mb-4 flex justify-center">
        {/* Sort Buttons */}
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 border ${sortBy === "name" ? "bg-blue-400 text-white" : "bg-gray-100"}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 border ml-2 ${sortBy === "category" ? "bg-blue-400 text-white" : "bg-gray-100"}`}
        >
          Sort by Category
        </button>
      </div>

      <ul>
        {/* Map over the sorted items to display each one */}
        {sortedItems.map(item => (
          <Item 
            key={item.id} 
            name={item.name} 
            quantity={item.quantity} 
            category={item.category} 
          />
        ))}
      </ul>
    </div>
  );
}
