"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { WorkoutContext } from "../../context/WorkoutContext";
const Navber = () => {
  const { todayPlan, savedWorkouts } = useContext(WorkoutContext);

  const links = (
    <>
      <li>
        <Link
          href="/"
          className="rounded-full bg-[#c8ff00] px-5 py-2 text-[10px] font-black uppercase text-black"
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/my-plan"
          className="rounded-full px-5 py-2 text-[10px] font-bold uppercase text-gray-400 hover:bg-white/5 hover:text-white"
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <div className="w-full sticky top-0 z-50 bg-[#0b0c0f]">
      <div className="container mx-auto w-[92%] max-w-7xl">
        <div className="navbar min-h-16 border-b border-white/10 bg-[#0b0c0f] px-0">

          {/* LEFT */}
          <div className="navbar-start">

            {/* Mobile menu */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-sm mr-1 text-white lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content z-50 mt-3 w-48 rounded-lg border border-white/10 bg-[#15171c] p-2 shadow-xl"
              >
                {links}
              </ul>
            </div>

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 text-white"
            >
              <div className="flex h-7 w-7 items-center justify-center">
                <img src="/logo.png" alt="FITLOG logo" />
              </div>

              <span className="text-1xl font-black tracking-wide">
                FITLOG
              </span>
            </Link>
          </div>

          {/* CENTER */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-3 px-1">
              {links}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="navbar-end gap-6">

            {/* Plan */}
            <Link
              href="/my-plan"
              className="flex items-center gap-1.5 text-[9px] font-bold uppercase text-gray-400"
            >
              <span>Plan</span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c8ff00] px-1.5 text-[9px] font-black text-black">
                {todayPlan.length}
              </span>
            </Link>

            {/* Saved */}
            <Link
              href="/my-plan"
              className="flex items-center gap-1.5 text-[9px] font-bold uppercase text-gray-400"
            >
              <span>Saved</span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-white/30 px-1.5 text-[9px] font-black text-gray-300">
                {savedWorkouts.length}
              </span>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;