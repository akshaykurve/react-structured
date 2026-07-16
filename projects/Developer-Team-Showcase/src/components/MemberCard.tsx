import { useContext } from "react";
import { MyStore } from "../context/MemberContext";

const MemberCard = ({ member }) => {
  const { setActive, setId } = useContext(MyStore);
  const { id, name, role, technology, experience, company } = member;
  //   const {setActive}=status
  const handleclick = () => {
    setActive(true);
    setId(id);
    console.log("Clicked");
  };

  return (
    <div
      className="bg-white w-full rounded-2xl p-4 hover:scale-105 transition-all"
      onClick={handleclick}
    >
      <h2 className="text-3xl font-serif font-bold ">{name}</h2>
      <p className="text-blue-500 font-bold text-lg">{company}</p>
      <div className="flex justify-between">
        <span>{role}</span>
        <span>{experience}</span>
      </div>
      <p>{technology}</p>
    </div>
  );
};

export default MemberCard;
