"use client";

import React, { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";
import { toast } from "react-toastify";

const SaveBtn = ({ workout }) => {
  const { savedWorkouts, setSavedWorkouts } =
    useContext(WorkoutContext);

  const handleSave = () => {
    const alreadySaved = savedWorkouts.some(
      (item) => item.id === workout.id
    );

    if (alreadySaved) {
      toast.info("Already saved");
      return;
    }

    setSavedWorkouts([...savedWorkouts, workout]);
    toast.success("Saved for later");
  };

  return (
    <button
      onClick={handleSave}
      className="rounded-xl border border-white/10 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:border-[#c8ff00]/50 hover:text-[#c8ff00] sm:flex-1"
    >
      ♡ Save for later
    </button>
  );
};

export default SaveBtn;