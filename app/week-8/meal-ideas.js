// meal-ideas.js
"use client";
import { useState, useEffect } from "react";

// Function to fetch meal ideas based on the ingredient
async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Failed to fetch meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMealIdeas() {
      if (ingredient) {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
      }
    }
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-4 bg-gray-800 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">Meal Ideas for: {ingredient}</h2>
      {meals.length > 0 ? (
        <ul className="space-y-3">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="p-3 bg-gray-700 border rounded-md">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-32 object-cover rounded-md mb-2" />
              <p className="font-semibold text-white text-center">{meal.strMeal}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 text-center">No meal ideas found.</p>
      )}
    </div>
  );
}
