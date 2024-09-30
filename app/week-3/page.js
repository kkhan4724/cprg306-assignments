import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="p-4 bg-gray-50 min-h-screen">
          <h1 className="text-3xl font-bold mb-6 text-center">Shopping List</h1>
          <ItemList />
        </main>
    );

}