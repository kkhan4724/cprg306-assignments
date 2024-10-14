//import DogForm from "./dog-form.js";


// export default function Page() {
//     return (
//         <main className="m-4">
//             <h1 className="text-4xl m-2 bold">Week 5 Demo</h1>
//             <DogForm/>

//         </main>
//     );
// }


import NewItem from "./new-item";
export default function Page() {
    return (
    <div className="flex justify-center items-center h-screen">
      <NewItem />
    </div>

    );
}