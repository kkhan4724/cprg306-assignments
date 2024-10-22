"use client";
import dogsJson from "./dogs.json"; //dogsJson is an array of objects
import Image from "next/image";
import {useState} from "react";


export default function Page() {
    const [selectedDogId, setSelectedDogId] = useState(-1);
    let dogs = [...dogsJson]; // shallow copy of dogsJson
    dogs.sort((a,b) => a.name.localeCompare(b.name)); // sort by name
    // OR
    // dogs.sort((a,b) => {
    //     if (a<b) return -1;
    //     if (a>b) return 1;
    // });

    dogs = dogs.filter((dog) => dog.name.length>5); // filter name by name length

    const handleClick = (id) => {
        setSelectedDogId(id);
    };
    
    
    return (
        <main className="p-2">
            <h1 className="text-2xl font-semibold">Week 6</h1>
            <ul>
                {dogsJson.map((dog) => (
                    <li key={dog.name} className="py-2 bg-slate-400 m-2" onClick={() => handleClick(dog.id)} >
                        <h2 className="text-lg font-semibold">{dog.name}</h2>
                        <p className="text-sm">{dog.description}</p>
                        <p>
                            <Image src={dog.imageUrl} alt={dog.name} width={640} height={480}/>
                        </p>

                    </li>

                ))}
            </ul>
        </main>
    );
}