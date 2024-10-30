// "use client";

// import DogList from "./dog-list.js";
// import DogForm from "./dog-form.js";
// import dogData from "./dog-data.json";
// import { useState } from "react";

// export default function Page() {
//     const [dogs, setDogs] = useState(dogData);
//     const handleAddDog = (newDog) => {
//         setDogs([...dogs, newDog]);
//     };

//     const handleDelete = (id) => {
//         const updatedDogs = dogs.filter((dog) => dog.id !== id);
//         setDogs(updatedDogs);
//     };
//     return (
//         <div>
//             <h1>Week 7</h1>
//             <DogList dogs={dogs} onDelete={handleDelete}/>
//             <DogForm onAddDog={handleAddDog}/>
//         </div>
//     );
// }

"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./item.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="p-4 bg-gray-900 min-h-screen flex items-center justify-center text-white">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}
