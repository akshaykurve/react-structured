interface userProps {
  name: string;
  isOnline: boolean;
  role: string;
  email: string;
  age: number;
  city: string;
}

export const Card = (props:userProps) => {
  const { name, age, city, isOnline,email,role } = props;

  return (
    <div className="relative max-w-[320px] rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-100/50 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/60">
      {/* Online Status Badge */}
      <span
        className={`absolute top-6 right-6 h-3 w-3 rounded-full ${isOnline ? "bg-emerald-500 animate-pulse" : "bg-slate-300"}`}
      />

      {/* Header Profile / Avatar Area */}
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 font-mono text-xl font-bold uppercase text-red-400">
          {name.slice(0, 2)}
        </div>
        <div>
          <h2 className="font-mono text-xl font-bold tracking-tight text-slate-800 uppercase">
            {name}
          </h2>
          <span className="inline-block rounded-md bg-slate-100 px-2 py-0.5 font-mono text-xs font-medium text-slate-600 uppercase">
            {role}
          </span>
        </div>
      </div>

      {/* Information Grid */}
      <div className="space-y-3.5 border-t border-dashed border-slate-100 pt-4 font-mono text-sm">
        <div className="flex items-center justify-between">
          <span className="text-slate-400">Age:</span>
          <span className="font-semibold text-slate-700">{age} yrs</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-400">Location:</span>
          <span className="font-semibold text-slate-700 capitalize">
            {city}
          </span>
        </div>

        <div className="flex flex-col gap-1 border-t border-slate-50 pt-3">
          <span className="text-xs text-slate-400">Contact Email:</span>
          <span className="truncate font-medium text-red-400 underline decoration-red-200 underline-offset-4 hover:text-red-500 break-all">
            {email}
          </span>
        </div>
      </div>
    </div>
  );
};
