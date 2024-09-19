import StudentInfo from "./student-info";
import Link from "next/link";

export default function Page() {
    return (
      <main>
        <h1>Shopping List</h1>
        <StudentInfo/>
        <p>Go back to <Link href="/">the home page</Link></p>
      </main>
    );
  }