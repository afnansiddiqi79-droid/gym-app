"use client";

import React, { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";
import { toast } from "react-toastify";

const TodayBtn = ({ workout }) => {
  const { todayPlan, setTodayPlan } = useContext(WorkoutContext);

  const handleAdd = () => {
    const alreadyAdded = todayPlan.some(
      (item) => item.id === workout.id
    );

    if (alreadyAdded) {
      toast.info("Already added to today's plan");
      return;
    }

    setTodayPlan([...todayPlan, workout]);
    toast.success("Added to today's plan");
  };

  return (
    <button
      onClick={handleAdd}
      className="rounded-xl bg-[#c8ff00] px-5 py-3 text-xs font-black uppercase tracking-wider text-black transition hover:bg-[#d7ff4d] sm:flex-1"
    >
      + Add to today's plan
    </button>
  );
};

export default TodayBtn;