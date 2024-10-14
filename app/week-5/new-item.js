"use client";

import { useState } from 'react';

export default function NewItem() {
  // State variables
  const [name, setName] = useState('');  // Name field
  const [quantity, setQuantity] = useState(1);  // Already implemented for quantity
  const [category, setCategory] = useState('produce');  // Category field

  // Function to increment quantity
  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  // Function to decrement quantity
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();  // Prevent page reload
    const item = { name, quantity, category };
    console.log(item);  // Log the current state to the console
    alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`);

    // Reset the form fields
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-md max-w-md mx-auto bg-white">
      <h1 className="text-xl font-semibold mb-4">Add New Item</h1>

      {/* Form for adding item */}
      <form onSubmit={handleSubmit} className="w-full space-y-6">
        
        {/* Name field */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium mb-2">Item Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter item name"
            className="border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Quantity field - keeping your existing counter styling */}
        <div className="flex flex-col items-center">
          <label className="text-sm font-medium mb-2">Quantity</label>
          <div className="flex items-center">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className="px-3 py-1 bg-red-500 text-white rounded-l-md"
            >
              -
            </button>
            <span className="px-4 py-1 bg-gray-200 text-lg">{quantity}</span>
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className="px-3 py-1 bg-green-500 text-white rounded-r-md"
            >
              +
            </button>
          </div>
        </div>

        {/* Category field */}
        <div className="flex flex-col">
          <label htmlFor="category" className="text-sm font-medium mb-2">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
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

        {/* Submit button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        >
          +
        </button>
      </form>
    </div>
  );
}
