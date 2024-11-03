
// "use client";
// import { useState } from "react";
// import Item from "./item";

// export default function ItemList({ items }) {
//   const [sortBy, setSortBy] = useState("name");

//   const sortedItems = [...items].sort((a, b) => {
//     if (sortBy === "name") {
//       return a.name.localeCompare(b.name);
//     } else if (sortBy === "category") {
//       return a.category.localeCompare(b.category);
//     }
//     return 0;
//   });

//   return (
//     <div className="mt-6">
//       <div className="mb-4 flex justify-center space-x-2">
//         <button
//           onClick={() => setSortBy("name")}
//           className={`px-4 py-2 rounded ${sortBy === "name" ? "bg-orange-500 text-white" : "bg-gray-700 text-gray-300"}`}
//         >
//           Sort by Name
//         </button>
//         <button
//           onClick={() => setSortBy("category")}
//           className={`px-4 py-2 rounded ${sortBy === "category" ? "bg-orange-500 text-white" : "bg-gray-700 text-gray-300"}`}
//         >
//           Sort by Category
//         </button>
//       </div>
//       <ul>
//         {sortedItems.map((item) => (
//           <Item
//             key={item.id}
//             name={item.name}
//             quantity={item.quantity}
//             category={item.category}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }
// item-list.js
"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="mt-6">
      <div className="mb-4 flex justify-center space-x-2">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded ${sortBy === "name" ? "bg-orange-500 text-white" : "bg-gray-700 text-gray-300"}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${sortBy === "category" ? "bg-orange-500 text-white" : "bg-gray-700 text-gray-300"}`}
        >
          Sort by Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={onItemSelect}
          />
        ))}
      </ul>
    </div>
  );
}