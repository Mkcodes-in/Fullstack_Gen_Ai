import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-6">
      <div className="text-center">

        <h1 className="text-8xl font-bold text-indigo-800">404</h1>

        <h2 className="mt-4 text-2xl font-semibold text-slate-700">
          Page Not Found
        </h2>

        <p className="mt-2 text-slate-600">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-800 transition active:scale-101"
        >
          Go Back Home
        </Link>

      </div>
    </div>
  );
}
