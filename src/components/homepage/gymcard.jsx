import DetailButton from "../button/DetailButton";

const Gymcard = ({ workout }) => {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border
     border-white/10 bg-[#15171c] transition duration-300 hover:-translate-y-1 hover:border-[#c8ff00]/40">

      {/* Image */}
      <div className="aspect-[16/10] w-full overflow-hidden bg-[#101114]">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Muscle groups */}
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups?.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full border border-[#c8ff00]/30 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#c8ff00]"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Name + Rating */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-black uppercase leading-tight text-white">
            {workout.name}
          </h3>

          <span className="shrink-0 text-xs font-bold text-white">
            ★ {workout.rating}
          </span>
        </div>

        {/* Equipment */}
        <p className="mt-2 line-clamp-1 text-sm text-gray-500">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-3 divide-x divide-white/10 rounded-xl border border-white/10 bg-[#0b0c0f]">
          <div className="px-2 py-3 text-center">
            <p className="text-[9px] font-bold uppercase text-gray-500">
              Time
            </p>
            <p className="mt-1 text-sm font-bold text-white">
              {workout.duration} min
            </p>
          </div>

          <div className="px-2 py-3 text-center">
            <p className="text-[9px] font-bold uppercase text-gray-500">
              Calories
            </p>
            <p className="mt-1 text-sm font-bold text-white">
              {workout.caloriesBurned}
            </p>
          </div>

          <div className="px-2 py-3 text-center">
            <p className="text-[9px] font-bold uppercase text-gray-500">
              Difficulty
            </p>
            <p className="mt-1 text-sm font-bold text-white">
              {workout.difficulty}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">

          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
            {workout.sets} sets • {workout.reps} reps
          </span>

          <DetailButton />

        </div>
      </div>
    </article>
  );
};

export default Gymcard;