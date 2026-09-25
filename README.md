🏋️ FitLog — Workout Library & Planner

FitLog is a modern and responsive workout library and planning web application built with Next.js. Users can explore workouts, view detailed workout information, add exercises to today's plan, save workouts for later, and manage their personal workout plan.

🌐 Live Website

https://gym-app-zzpd.vercel.app/

💻 GitHub Repository

https://github.com/afnansiddiqi79-droid/gym-app

✨ Key Features

- 🏋️ Workout Library — Browse workouts with information such as category, equipment, duration, calories, rating, difficulty, sets, and reps.
- 🔍 Workout Details — View detailed information, descriptions, tags, specifications, and instructions for each workout.
- 📋 Today's Plan — Add workouts to today's workout plan and manage selected exercises.
- 💾 Save for Later — Save workouts and access them from the My Plan section.
- 🔔 Toast Notifications — Get feedback when workouts are added, saved, removed, or completed.
- 📊 Sort Workouts — Sort workouts by duration, calories, and rating.
- ✅ Mark as Done & Remove — Manage exercises from the workout plan.
- 📱 Responsive Design — Works across mobile, tablet, and desktop devices.
- 🧭 Dynamic Workout Routes — Each workout has its own dynamic details page.
- ❌ Custom 404 Page — Displays a custom page for invalid routes.
- ⏳ Loading State — Shows a loading state while workout data is being loaded.

🛠️ Technologies Used

- Next.js
- React
- JavaScript
- Tailwind CSS
- DaisyUI
- React Toastify
- React Context API
- Next.js App Router
- Vercel

📂 Main Routes

Route| Description
"/"| Workout Library / Home
"/exercise/[id]"| Workout Details
"/my-plan"| Today's Plan & Saved Workouts

🧩 Core Functionality

Workout Library

Users can browse workout cards containing important workout information such as:

- Workout name
- Category
- Equipment
- Duration
- Calories
- Rating
- Difficulty
- Sets & reps

Workout Details

Users can open an individual workout to see its detailed information and instructions. From the details page, workouts can be added to today's plan or saved for later.

My Plan

The My Plan page provides separate sections for:

- Today's Plan
- Saved Workouts

Users can also view workout statistics and manage their selected exercises.

Sorting

The workout library supports sorting by:

- Duration
- Calories
- Rating

📱 Responsive Design

The application is responsive and optimized for:

- 📱 Mobile
- 📲 Tablet
- 🖥️ Desktop

🚀 Getting Started

Clone the repository:

git clone https://github.com/afnansiddiqi79-droid/gym-app.git

Navigate to the project:

cd gym-app

Install dependencies:

npm install

Start the development server:

npm run dev

Open the application at:

http://localhost:3000

📦 Production Build

Create a production build:

npm run build

Start the production server:

npm start

🎯 Project Purpose

This project was built to practice and demonstrate:

- Next.js App Router
- Dynamic routing
- React Context API
- State management
- API data fetching
- Responsive UI development
- Loading and error handling
- Toast notifications
- Vercel deployment

👨‍💻 Developer

Afnan Siddiqi

Built with ❤️ using Next.js and React.