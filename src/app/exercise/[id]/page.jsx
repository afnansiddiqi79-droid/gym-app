import WorkoutDetails from "../../../components/WorkoutDetails";
import Link from "next/link";

const Detailspage = async ({ params }) => {
  const { id } = await params;

  let workouts = [];

  try {
    const res = await fetch(
      "https://api.abcz.workers.dev/api/fitlog"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch workouts");
    }

    workouts = await res.json();
  } catch (error) {
    console.log(error);
    workouts = [];
  }

  const workout = workouts.find(
    (item) => item.id === parseInt(id)
  );

  
  if (!workout) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[#0b0c0f]">
        <div className="text-center">
          <h1 className="text-3xl font-black uppercase text-white">
            Workout Not Found
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            The workout you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#0b0c0f]">
      <div className="container mx-auto px-4 pt-6 md:px-6">
        <Link
    href="/"
    className="text-xs font-bold text-gray-500 transition hover:text-[#c8ff00]"
  >
    ← Back to Home
  </Link>
      </div>

      <WorkoutDetails workout={workout} />
    </main>
  );
};

export default Detailspage;