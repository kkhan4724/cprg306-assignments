"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const increment = () => quantity < 20 && setQuantity(quantity + 1);
  const decrement = () => quantity > 1 && setQuantity(quantity - 1);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newId = Math.floor(Math.random() * 1000000);
    const newItem = { id: newId, name, quantity, category };
    onAddItem(newItem);

    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="flex flex-col items-center p-2 border rounded-md shadow-md w-full bg-gray-800 text-white">
      <h1 className="text-lg font-semibold mb-2">Add New Item</h1>
      <form onSubmit={handleSubmit} className="w-full space-y-3">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-xs font-medium mb-1">Item Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter item name"
            className="border px-3 py-1 rounded-md focus:ring-2 focus:ring-blue-500 outline-none bg-gray-700 text-white text-sm w-full"
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="text-xs font-medium mb-1">Quantity</label>
          <div className="flex items-center">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className="px-2 py-1 bg-red-600 text-white rounded-l-md text-sm"
            >
              -
            </button>
            <span className="px-3 py-1 bg-gray-700 text-sm">{quantity}</span>
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className="px-2 py-1 bg-green-600 text-white rounded-r-md text-sm"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="category" className="text-xs font-medium mb-1">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border px-3 py-1 rounded-md focus:ring-2 focus:ring-blue-500 outline-none bg-gray-700 text-white text-sm w-full"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 text-sm"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
