"use client";

import React, { useContext, useMemo, useState } from "react";
import Link from "next/link";
import { WorkoutContext } from "../../context/WorkoutContext";
import { toast } from "react-toastify";


const MyPlan = () => {
  const {
    todayPlan,
    setTodayPlan,
    savedWorkouts,
    setSavedWorkouts,
  } = useContext(WorkoutContext);

  const [activeTab, setActiveTab] = useState("today");
  const [sortBy, setSortBy] = useState("duration");

  // Current tab অনুযায়ী workout list
  const currentWorkouts =
    activeTab === "today" ? todayPlan : savedWorkouts;

  // ================= SORT =================
  const sortedWorkouts = useMemo(() => {
    const sorted = [...currentWorkouts];

    sorted.sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });

    return sorted;
  }, [currentWorkouts, sortBy]);

  // ================= TOTAL MINUTES =================
  const totalMinutes = currentWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  // ================= TOTAL CALORIES =================
  const totalCalories = currentWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  // ================= REMOVE =================
  const handleRemove = (id) => {
    if (activeTab === "today") {
      setTodayPlan(
        todayPlan.filter((item) => item.id !== id)
      );

      toast.success("Removed from today's plan");
    } else {
      setSavedWorkouts(
        savedWorkouts.filter((item) => item.id !== id)
      );

      toast.success("Removed from saved");
    }
  };

  // ================= MARK AS DONE =================
  const handleDone = (id) => {
    setTodayPlan(
      todayPlan.filter((item) => item.id !== id)
    );

    toast.success("Workout completed!");
  };

  return (
    <main className="min-h-screen bg-[#0b0c0f] px-4 py-10 md:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c8ff00]">
            Your Training
          </p>

          <h1 className="mt-2 text-3xl font-black uppercase leading-none text-white sm:text-4xl">
            My Plan
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* ================= STATS ================= */}
        <div className="mt-8 grid overflow-hidden rounded-2xl border border-white/10 bg-[#15171c] sm:grid-cols-3">

          {/* Exercises */}
          <div className="border-b border-white/10 p-6 sm:border-b-0 sm:border-r">
            <p className="text-xs text-gray-500">
              Exercises
            </p>

            <p className="mt-2 text-4xl font-black text-[#c8ff00]">
              {currentWorkouts.length}
            </p>
          </div>

          {/* Minutes */}
          <div className="border-b border-white/10 p-6 sm:border-b-0 sm:border-r">
            <p className="text-xs text-gray-500">
              Minutes
            </p>

            <p className="mt-2 text-4xl font-black text-white">
              {totalMinutes}
            </p>
          </div>

          {/* Calories */}
          <div className="p-6">
            <p className="text-xs text-gray-500">
              Calories
            </p>

            <p className="mt-2 text-4xl font-black text-white">
              {totalCalories}
            </p>
          </div>

        </div>

        {/* ================= TABS + SORT ================= */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Tabs */}
          <div className="tabs tabs-box rounded-xl border border-white/10 bg-[#15171c] p-1">

            {/* Today's Plan */}
            <button
              onClick={() => setActiveTab("today")}
              className={`tab h-10 px-5 text-xs font-bold ${
                activeTab === "today"
                  ? "bg-[#c8ff00] text-black"
                  : "text-gray-500"
              }`}
            >
              Today's Plan
            </button>

            {/* Saved */}
            <button
              onClick={() => setActiveTab("saved")}
              className={`tab h-10 px-5 text-xs font-bold ${
                activeTab === "saved"
                  ? "bg-[#c8ff00] text-black"
                  : "text-gray-500"
              }`}
            >
              Saved
            </button>

          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">

            <span className="text-xs text-gray-500">
              Sort By
            </span>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="select select-sm border-white/10 bg-[#15171c] text-xs text-white outline-none"
            >
              <option value="duration">
                Duration
              </option>

              <option value="calories">
                Calories
              </option>

              <option value="rating">
                Rating
              </option>
            </select>

          </div>

        </div>

        {/* ================= WORKOUT LIST ================= */}
        <section className="mt-6">

          {sortedWorkouts.length > 0 ? (

            <div className="space-y-4">

              {sortedWorkouts.map((workout) => (

                <div
                  key={workout.id}
                  className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#15171c] p-4 transition hover:border-white/20 md:flex-row md:items-center"
                >

                  {/* ================= IMAGE ================= */}
                  <img
                    src={workout.image}
                    alt={workout.name}
                    className="h-44 w-full rounded-xl object-cover md:h-20 md:w-36"
                  />

                  {/* ================= INFO ================= */}
                  <div className="min-w-0 flex-1">

                    <h3 className="text-lg font-black uppercase text-white">
                      {workout.name}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      {workout.equipment}
                    </p>

                    {/* Stats */}
                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-gray-400">

                      <span>
                        ◷ {workout.duration} min
                      </span>

                      <span>
                        🔥 {workout.caloriesBurned} kcal
                      </span>

                      <span>
                        ★ {workout.rating}
                      </span>

                    </div>

                  </div>

                  {/* ================= ACTIONS ================= */}
                  <div className="flex flex-wrap items-center gap-2">

                    {/* View Details */}
                    <Link
                      href={`/exercise/${workout.id}`}
                      className="btn btn-sm rounded-full border-white/10 bg-transparent px-4 text-xs font-medium text-white hover:border-[#c8ff00] hover:bg-transparent hover:text-[#c8ff00]"
                    >
                      View Details
                    </Link>

                    {/* Mark as Done */}
                    {activeTab === "today" && (
                      <button
                        onClick={() => handleDone(workout.id)}
                        className="btn btn-sm rounded-full border-none bg-[#c8ff00] px-4 text-xs font-bold text-black hover:bg-[#d7ff4d]"
                      >
                        ✓ Mark as Done
                      </button>
                    )}

                    {/* Remove */}
                    <button
                      onClick={() => handleRemove(workout.id)}
                      className="btn btn-sm btn-circle border-none bg-transparent text-gray-500 hover:bg-white/5 hover:text-white"
                      aria-label="Remove workout"
                    >
                      ×
                    </button>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            /* ================= EMPTY STATE ================= */
            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#101114] px-5 text-center">

              <h2 className="text-xl font-black uppercase text-white">
                Nothing Here Yet
              </h2>

              <p className="mt-2 max-w-md text-sm text-gray-500">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/#library"
                className="mt-6 rounded-full bg-[#c8ff00] px-6 py-3 text-xs font-black uppercase text-black transition hover:bg-[#d7ff4d]"
              >
                Go to Workouts
              </Link>

            </div>

          )}

        </section>

      </div>
    </main>
  );
};

export default MyPlan;