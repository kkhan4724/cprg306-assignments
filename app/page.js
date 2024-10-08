import Link from "next/link";

export default function Page() {
  return(
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">CPRG 306: Web Development 2 - Assignments</h1>
      <div>
        <p>
          <Link href="/week-2" className="text-blue-500 hover:underline">
            Go to Week 2 Page
          </Link>
        </p>
        <p>
          <Link href="/week-3" className="text-blue-500 hover:underline">
            Go to Week 3 Page
          </Link>
        </p>
        <p>
          <Link href="/week-4" className="text-blue-500 hover:underline">
            Go to Week 4 Page
          </Link>
        </p>
      </div>
    </div>
  );
}


