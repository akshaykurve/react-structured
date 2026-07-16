import { useContext } from "react";
import MemberCard from "./components/MemberCard";
import { developers } from "./lib/data/teamMembers";
import { MyStore } from "./context/MemberContext";

function App() {
  const { active,setActive, id } = useContext(MyStore);

  const obj = developers.find((e) => e.id == id);
  // const {  name, role, technology, experience, company } = obj;

  return (
    <>
      <h1 className="text-center font-bold font-serif text-6xl w-full p-4 bg-white">
        Team Member Showcase
      </h1>

      <div className={`grid gap-6 p-8 items-center justify-center ${active?"w-[75%] lg:grid-cols-3":"w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-5"}`}>
        {developers.map((member, index) => (
          <MemberCard member={member} key={index} />
        ))}
      </div>

      {active && id ? (
        <div className="absolute h-[calc(100%-90px)] w-[25%] p-5 bg-white/50 backdrop-blur-lg top-[90px] right-0 ">
          <h2 className="relative flex justify-between text-3xl font-serif font-bold ">{obj.name}
          <button onClick={()=>setActive(false)} className=" bg-red-500 w-8 h-8 rounded text-white font-mono font-bold text-3xl flex items-center justify-center">X</button>

          </h2>
          <p className="text-blue-500 font-bold text-lg">{obj.company}</p>
          <div className="flex justify-between">
            <span>{obj.role}</span>
            <span>{obj.experience}</span>
          </div>
          <p>{obj.technology}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
