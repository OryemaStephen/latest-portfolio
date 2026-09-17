const palettes = {
  teal: "from-teal-600 via-teal-700 to-emerald-900",
  indigo: "from-indigo-500 via-indigo-700 to-violet-900",
  amber: "from-amber-500 via-orange-600 to-rose-800",
  sky: "from-sky-500 via-blue-700 to-indigo-900",
  rose: "from-rose-500 via-pink-700 to-fuchsia-900",
  emerald: "from-emerald-500 via-green-700 to-teal-900",
  slate: "from-slate-600 via-slate-800 to-zinc-900",
  violet: "from-violet-500 via-purple-700 to-indigo-900",
};

const bars = [40, 65, 50, 80, 58, 92, 70];

const ProjectCover = ({ project, className = "" }) => (
  <div
    className={`relative isolate h-full w-full overflow-hidden bg-linear-to-br text-white ${
      palettes[project.palette] ?? palettes.slate
    } ${className}`}
  >
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] bg-size-[14px_14px]"
    />

    <div
      aria-hidden="true"
      className="absolute -bottom-6 -right-6 w-[62%] rotate-[-4deg] rounded-xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-sm"
    >
      <div className="flex gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((tile) => (
          <div key={tile} className="rounded-md bg-white/15 p-1.5">
            <div className="h-1 w-3/5 rounded bg-white/40" />
            <div className="mt-1 h-2 w-4/5 rounded bg-white/70" />
          </div>
        ))}
      </div>
      <div className="mt-2 flex h-14 items-end gap-1 rounded-md bg-white/10 p-1.5">
        {bars.map((height, index) => (
          <span
            key={index}
            className="flex-1 rounded-sm bg-white/60"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>

    <div className="absolute left-5 top-5 max-w-[60%]">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/70">
        {project.category}
      </p>
      <p className="mt-1 font-display text-3xl font-semibold leading-none tracking-tight">
        {project.shortName ?? project.title}
      </p>
    </div>
  </div>
);

export default ProjectCover;
