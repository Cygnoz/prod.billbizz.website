import ChevronRight from "../../assets/icons/ChevronRight";
import LandingComponent from "./LandingComponent";
import bgImg from "../../assets/images/Frame 427321531.png";
import DotIcon from "../../assets/icons/DotIcon";
import { useNavigate } from "react-router-dom";

type Props = {};

const CRM = ({}: Props) => {
  const navigate =useNavigate()
  return (
    <div className="bg-[#f6f6f6]">
      <LandingComponent />

      <div className="p-14">
        <p className="text-xl font-bold text-[#303F58] flex items-center ">
          <span className="text-[#820000]  cursor-pointer "  onClick={()=>(navigate("/knowledge-base"))}>Knowledge Base</span>{" "}
          <ChevronRight color="#4B5C79" /> CRM
        </p>

        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="flex bg-white p-2 gap-5 rounded-2xl">
            <img src={bgImg} alt="" className="rounded-2xl" />
            <div className="space-y-2">
              <p className="text-base font-bold">Getting Started</p>
              <div className="flex gap-5">
                {" "}
                <div className="flex items-center gap-2">
                  {" "}
                  <DotIcon color="#9EA9BB" size={10} />{" "}
                  <p className="text-[#4B5C79]">28 Section</p>
                </div>{" "}
                <div className="flex items-center gap-2">
                  {" "}
                  <DotIcon color="#9EA9BB" size={10} />{" "}
                  <p className="text-[#4B5C79]">8 Article</p>
                </div>
              </div>
              <button className="text-xs text-[#565148] border border-[#565148] flex items-center justify-center  rounded-lg p-1 " onClick={()=>(navigate("/knowledge-base/crm/getting-started"))}>
                View More
              </button>
            </div>
          </div>
          <div className="flex bg-white p-2 gap-5 rounded-2xl">
            <img src={bgImg} alt="" className="rounded-2xl" />
            <div className="space-y-2">
              <p className="text-base font-bold">Getting Started</p>
              <div className="flex gap-5">
                {" "}
                <div className="flex items-center gap-2">
                  {" "}
                  <DotIcon color="#9EA9BB" size={10} />{" "}
                  <p className="text-[#4B5C79] text-sm">28 Section</p>
                </div>{" "}
                <div className="flex items-center gap-2">
                  {" "}
                  <DotIcon color="#9EA9BB" size={10} />{" "}
                  <p className="text-[#4B5C79] text-sm">8 Article</p>
                </div>
              </div>
              <button className="text-xs text-[#565148] border border-[#565148] flex items-center justify-center  rounded-lg p-1 ">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRM;
