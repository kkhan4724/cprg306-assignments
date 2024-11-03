// export default function Item({ name, quantity, category }) {
//     return (
//       <li className="p-2 bg-gray-800 border rounded mb-2 text-white">
//         <p className="font-bold">{name}</p>
//         <p className="text-sm">Quantity: {quantity}</p>
//         <p className="text-sm">Category: {category}</p>
//       </li>
//     );
//   }
  

// item.js
export default function Item({ name, quantity, category, onSelect }) {
    return (
      <li 
        onClick={() => onSelect(name)}
        className="p-2 bg-gray-800 border rounded mb-2 text-white cursor-pointer hover:bg-gray-700">
        <p className="font-bold">{name}</p>
        <p className="text-sm">Quantity: {quantity}</p>
        <p className="text-sm">Category: {category}</p>
      </li>
    );
}