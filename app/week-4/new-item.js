"use client";

import {useState} from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);


    // Function to increment quantity
    const increment = () => {
        if (quantity <20) {
            setQuantity(quantity+1);
        }
    };

    // Function decrement quantity
    const decrement = () => {
        if (quantity >1) {
            setQuantity(quantity-1);
        }
    };

    return (
      <div className="flex flex-col items-center p-4 border rounded-lg shadow-md max-w-xs mx-auto">
        <h1 className="text-lg font-semibold mb-2">Quantity</h1>
        <div className="flex items-center">
          <button
            onClick={decrement}
            disabled={quantity === 1}
            className="px-3 py-1 bg-red-500 text-white rounded-l-md"
          >
            -
          </button>
          <span className="px-4 py-1 bg-gray-200 text-lg">{quantity}</span>
          <button
            onClick={increment}
            disabled={quantity === 20}
            className="px-3 py-1 bg-green-500 text-white rounded-r-md"
          >
            +
          </button>
        </div>
    </div>

    );

}