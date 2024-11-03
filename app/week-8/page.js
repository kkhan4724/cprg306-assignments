
// "use client";
// import { useState, useEffect } from "react";

// export default function Page() {
//     const [randomDogUrl, setRandomDogUrl] = useState(null);
//     const [dogBreeds, setDogBreeds] = useState([]);
//     const [selectedBreed, setSelectedBreed] = useState("");

//     const getRandomDog = async (breed) => {
//         console.log(breed);
//         const response = breed
//         ? await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
//         : await fetch("https://dog.ceo/api/breeds/image/random");
//         const data = await response.json(); 
//         const url = data.message; // the URL of the dog image (from API)
//         setRandomDogUrl(url);
//     };

//     const getDogBreeds = async () => {
//         const response = await fetch("https://dog.ceo/api/breeds/list/all");
//         const data = await response.json();
//         const breeds = Object.keys(data.message); // Object.keys returns an array of the object's keys
//         setDogBreeds(breeds);
//     };



//     const handleBreedChange = (event) => {
//         // alert(event.target.value);
//         setSelectedBreed(event.target.value);
//     };


//     useEffect(() => {
//         getRandomDog();
//         getDogBreeds();

//     }, []); // empty array runs once 

     
   
//     useEffect(() => {
//         if (selectedBreed === "") return;
//         getRandomDog(selectedBreed);
//     }, [selectedBreed]); // will run any time selectedBreed changes

//     return (
//         <div>
//             <h1>Week 8</h1>
//             <div>
//                 <select onChange={handleBreedChange}>
//                     {dogBreeds.map((breed) => (
//                         <option key={breed} value={breed}>
//                             {breed}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//             <p>
//                 <img src={randomDogUrl} />
//             </p>
//         </div>

//     );
// }



// "use client";
// import { useState } from "react";
// import ItemList from "./item-list";
// import NewItem from "./new-item";
// import itemsData from "./item.json";

// export default function Page() {
//   const [items, setItems] = useState(itemsData);

//   const handleAddItem = (newItem) => {
//     setItems((prevItems) => [...prevItems, newItem]);
//   };

//   return (
//     <main className="p-4 bg-gray-900 min-h-screen flex items-center justify-center text-white">
//       <div className="max-w-md w-full">
//         <h1 className="text-3xl font-bold mb-6 text-center">Shopping List</h1>
//         <NewItem onAddItem={handleAddItem} />
//         <ItemList items={items} />
//       </div>
//     </main>
//   );
// }

// page.js
"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./item.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName.split(",")[0].trim().replace(/\p{Emoji_Presentation}/gu, "");
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="p-4 bg-gray-900 min-h-screen flex items-center justify-center text-white">
      <div className="flex flex-wrap w-full max-w-4xl">
        <div className="w-full lg:w-1/2 p-2">
          <h1 className="text-3xl font-bold mb-6 text-center">Shopping List</h1>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-full lg:w-1/2 p-2">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
}
