export default function Item({name, quantity, category}) {
    return(
        <li className="p-2 bg-gray-200 border rounded mb-1">
            
            <p className="font-bold">{name}</p>
            <p className="text-sm">Quantity: {quantity}</p>
            <p className="text-sn">Category: {category}</p>

        </li>

    );
}