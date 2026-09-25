"use client";

import React, { createContext, useState } from "react";

export const WorkoutContext = createContext();

const WorkoutProvider = ({ children }) => {
  const [todayPlan, setTodayPlan] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  const contextValue = {
    todayPlan,
    setTodayPlan,
    savedWorkouts,
    setSavedWorkouts,
  };

  return (
    <WorkoutContext.Provider value={contextValue}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;