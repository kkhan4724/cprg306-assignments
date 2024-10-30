// import dogData from "./dog-data.json";
import Dog from "./dog.js"

export default function DogList({dogs, onDelete}) {

    return (
        <div>
            <h2>Dog List</h2>
            <ul>
                {dogs.map((dog) => (
                    <Dog key={dog.id} id={dog.id} name={dog.name} is age={dog.age} onDelete={onDelete} />
                ))}
            </ul>
        </div>
    );

}