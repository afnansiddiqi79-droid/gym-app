import Banner from "../components/homepage/Banner";
import Gymcard from "../components/homepage/gymcard";
import Image from "next/image";

const Home = async () => {
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
  return (
    <>
    <Banner></Banner>
    <section id="library" className="bg-[#0b0c0f] py-14 md:py-20">
  <div className="container mx-auto px-4">

    <div className="mb-8 md:mb-10">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c8ff00]">
        The Library
      </p>

      <h2 className="mt-2 text-3xl font-black uppercase text-white sm:text-4xl">
        Explore Workouts
      </h2>

      <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
        Discover workouts designed to help you train smarter,
        stay consistent, and reach your goals.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {workouts.map((workout) => (
        <Gymcard
          key={workout.id}
          workout={workout}
        />
      ))}
    </div>

  </div>
</section>
    </>
  );
}
export default Home;