import { useContext } from "react";
import { MyStore } from "../context/MemberContext";

const MemberCard = ({ member }) => {
  const { setActive, setId } = useContext(MyStore);
  const { id, name, role, technology, experience, company } = member;

  const handleClick = () => {
    setActive(true);
    setId(id);
  };

  return (
    <div
      className="group bg-white w-full rounded-2xl p-5 border border-slate-100 
                 shadow-sm hover:shadow-md hover:-translate-y-1 
                 transition-all duration-300 ease-out cursor-pointer 
                 flex flex-col justify-between h-full min-h-[180px]"
      onClick={handleClick}
    >
      {/* Top Section: Name and Company */}
      <div className="space-y-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block">
          {company}
        </span>
        <h2 className="text-lg sm:text-xl font-serif font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-200 line-clamp-1">
          {name}
        </h2>
      </div>

      {/* Middle Section: Meta Info */}
      <div className="flex items-center justify-between text-xs my-4 pt-3 border-t border-slate-50">
        <span className="font-medium text-slate-600 line-clamp-1 pr-2">{role}</span>
        <span className="text-slate-400 shrink-0 font-mono bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
          {experience}
        </span>
      </div>

      {/* Bottom Section: Tech Stack Tag */}
      <div className="mt-auto">
        <span className="inline-block text-[11px] font-semibold tracking-wide px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-colors duration-200">
          {technology}
        </span>
      </div>
    </div>
  );
};

export default MemberCard;