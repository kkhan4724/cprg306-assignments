import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center p-4 text-white">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">CPRG 306: Web Development 2 - Assignments</h1>
        <div className="space-y-4">
          <p>
            <Link href="/week-2">
              <span className="block w-full text-center py-2 bg-blue-600 rounded-md text-white font-semibold hover:bg-blue-700 transition">
                Go to Week 2 Page
              </span>
            </Link>
          </p>
          <p>
            <Link href="/week-3">
              <span className="block w-full text-center py-2 bg-blue-600 rounded-md text-white font-semibold hover:bg-blue-700 transition">
                Go to Week 3 Page
              </span>
            </Link>
          </p>
          <p>
            <Link href="/week-4">
              <span className="block w-full text-center py-2 bg-blue-600 rounded-md text-white font-semibold hover:bg-blue-700 transition">
                Go to Week 4 Page
              </span>
            </Link>
          </p>
          <p>
            <Link href="/week-5">
              <span className="block w-full text-center py-2 bg-blue-600 rounded-md text-white font-semibold hover:bg-blue-700 transition">
                Go to Week 5 Page
              </span>
            </Link>
          </p>
          <p>
            <Link href="/week-6">
              <span className="block w-full text-center py-2 bg-blue-600 rounded-md text-white font-semibold hover:bg-blue-700 transition">
                Go to Week 6 Page
              </span>
            </Link>
          </p>
          <p>
            <Link href="/week-7">
              <span className="block w-full text-center py-2 bg-blue-600 rounded-md text-white font-semibold hover:bg-blue-700 transition">
                Go to Week 7 Page
              </span>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
