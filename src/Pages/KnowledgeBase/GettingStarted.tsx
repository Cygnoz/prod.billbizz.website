import { useNavigate } from "react-router-dom";
import ChevronRight from "../../assets/icons/ChevronRight";
import CopyIcon from "../../assets/icons/explore/CopyIcon";
import LandingComponent from "./LandingComponent";

type Props = {};

function GettingStarted({}: Props) {
  const navigate=useNavigate()
  return (
    <div className="bg-[#f6f6f6]">
      <LandingComponent />
      <div className="p-14 ">
        <div className="flex ">
          <div className="text-xl font-bold text-[#303F58] flex items-center">
            <button className="text-[#820000]  "onClick={()=>(navigate("/knowledge-base"))}>Knowledge Base </button>
            <ChevronRight color="#4B5C79" />
            <button className="text-[#820000]  "onClick={()=>(navigate("/knowledge-base/crm"))}> CRM </button>{" "}
            <ChevronRight color="#4B5C79" />
            <p  >Getting Started</p>
          </div>
        </div>

        <div className="bg-white p-4 mt-4 flex  gap-4 rounded-md" onClick={()=>(navigate("/knowledge-base/crm/getting-started/introduction"))}>
          <div className="rounded-full  bg-[#CCCCCC] flex items-center justify-center w-[60px] h-[60px]">
            <CopyIcon />
          </div>
          <div className="flex items-center">
            <div>
              <p className="font-bold text-[black] ">Introduction to CRM</p>
              <p className="text-xs text-[#4B5C79]">
                Lorem ipsum agna topert enirk page agna
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GettingStarted;
