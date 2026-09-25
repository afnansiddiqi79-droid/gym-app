"use client";

import React from "react";
import TodayBtn from "./button/TodayBtn";
import SaveBtn from "./button/SaveBtn";
const WorkoutDetails = ({ workout }) => {
  return (
    <section className="bg-[#0b0c0f]">
      <div className="container mx-auto px-4 py-10 md:px-6 md:py-14">
        
        {/* Main Card */}
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-[#15171c] p-5 md:p-7 lg:grid-cols-2 lg:gap-10 lg:p-8">

          {/* ================= IMAGE ================= */}
          <div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#101114]">
              <img
                src={workout.image}
                alt={workout.name}
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
              />
            </div>
          </div>

          {/* ================= DETAILS ================= */}
          <div className="flex flex-col justify-center">

            {/* Category / Muscle Groups */}
            <div className="mb-4 flex flex-wrap gap-2">
              {workout.muscleGroups?.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#c8ff00] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-400">
              {workout.description}
            </p>

            {/* ================= SPECS ================= */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#101114]">

              {/* Equipment */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Equipment
                </span>

                <span className="text-xs font-medium text-white">
                  {workout.equipment}
                </span>
              </div>

              {/* Difficulty */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Difficulty
                </span>

                <span className="text-xs font-medium text-white">
                  {workout.difficulty}
                </span>
              </div>

              {/* Sets */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Sets
                </span>

                <span className="text-xs font-medium text-white">
                  {workout.sets}
                </span>
              </div>

              {/* Reps */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Reps
                </span>

                <span className="text-xs font-medium text-white">
                  {workout.reps}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Duration
                </span>

                <span className="text-xs font-medium text-white">
                  {workout.duration} min
                </span>
              </div>

              {/* Calories */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Calories
                </span>

                <span className="text-xs font-medium text-white">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Rating
                </span>

                <span className="text-xs font-medium text-white">
                  ★ {workout.rating}
                </span>
              </div>

            </div>

            {/* ================= INSTRUCTIONS ================= */}
            <div className="mt-7">
              <h2 className="text-xs font-black uppercase tracking-wider text-white">
                Instructions
              </h2>

              <ol className="mt-4 space-y-3">
                {workout.instructions?.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-xs leading-5 text-gray-400"
                  >
                    <span className="font-bold text-gray-600">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* ================= BUTTONS ================= */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                 <TodayBtn workout={workout} />

                 <SaveBtn workout={workout} />
             
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetails;