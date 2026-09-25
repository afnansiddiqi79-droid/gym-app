import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-7xl font-bold">404</h1>

      <h2 className="text-2xl font-bold mt-4">
        WORKOUT NOT FOUND
      </h2>

      <p className="text-gray-500 mt-2">
        The page you're looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="btn bg-[#ccff00] text-black mt-6"
      >
        Back Home
      </Link>
    </div>
  );
};

export default NotFound;