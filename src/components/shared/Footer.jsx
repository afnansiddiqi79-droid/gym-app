import React from 'react';
import Link from "next/link";
const Footer = () => {
    return (
        <div>
            <footer className="border-t border-white/10 bg-[#0b0c0f]">
      <div className="container mx-auto px-4 py-12 md:py-14">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo / About */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl font-black uppercase tracking-tight text-white"
            >
              Fit<span className="text-[#c8ff00]">Log</span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-500">
              Train with intent, track every set, and build a consistent
              workout routine with FitLog.
            </p>

            <Link
              href="/#library"
              className="mt-6 inline-flex rounded-full bg-[#c8ff00] px-5 py-2.5 text-xs font-black uppercase tracking-wider text-black transition hover:bg-[#d7ff4d]"
            >
              Explore Workouts
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">
              Navigate
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-500 transition hover:text-[#c8ff00]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/#library"
                  className="text-sm text-gray-500 transition hover:text-[#c8ff00]"
                >
                  Workouts
                </Link>
              </li>

              <li>
                <Link
                  href="/my-plan"
                  className="text-sm text-gray-500 transition hover:text-[#c8ff00]"
                >
                  My Plan
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">
              FitLog
            </h3>

            <ul className="mt-5 space-y-3">
              <li className="text-sm text-gray-500">
                Workout Library
              </li>

              <li className="text-sm text-gray-500">
                Track Your Plan
              </li>

              <li className="text-sm text-gray-500">
                Save Workouts
              </li>

              <li className="text-sm text-gray-500">
                Track Progress
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} FitLog. All rights reserved.
          </p>

          <p className="text-xs font-bold uppercase tracking-wider text-gray-600">
            Train. Track. Repeat.
          </p>

        </div>

      </div>
    </footer>
        </div>
    );
};

export default Footer;