import React from 'react';

const Banner = () => {
  return (
    <section className="bg-[#0b0c0f]">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl border border-white/10 bg-[#15171c] 
        px-6 py-12 md:px-10 lg:grid-cols-2 lg:px-14 lg:py-16">

          {/* Left Content */}
          <div className='space-y-3.5'>
            {/* Eyebrow */}
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#c8ff00]">
              Workout Library
            </p>

            {/* Heading */}
            <div className='space-y-6'>
            <h1 className="max-w-2xl text-4xl font-black uppercase leading-[0.95] 
            tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl space-y-4">
              Train With Intent. Log 
              <br />
              
              <h1 className=""> Every Set.</h1>
           </h1>
          </div>
            {/* Description */}
            <p className="mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              Explore powerful workouts, track every set, and build a
              consistent training routine that keeps you moving forward.
            </p>

            {/* Button */}
            <a
              href="#library"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#c8ff00] px-7 py-3.5 text-xs font-black uppercase tracking-wider text-black transition hover:scale-105 hover:bg-[#d4ff33]"
            >
              Browse Workouts

              <span className="text-base">↓</span>
            </a>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-[#c8ff00]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img
                src="/banner.png"
                alt="Workout"
                className="h-[700px] w-full object-cover sm:h-[680px] lg:h-[750px]"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Small label */}
              <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white">
                  Train Hard. Stay Consistent.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Banner;