import { useNavigate } from "react-router-dom";
import DotIcon from "../../assets/icons/DotIcon";
import ArrowrightUp from "../ArrowRightUp";
import LandingComponent from "./LandingComponent";
type Props = {};

const KnowledgeBase = ({}: Props) => {
  const navigate=useNavigate()
  return (
    <div className="bg-[#f6f6f6] ">
     <LandingComponent/>

     <div className=" p-14">
        <p className="text-[#303F58] font-bold " onClick={()=>(navigate("/knowledge-base"))}>Knowledge Base</p>

        <div className="grid grid-cols-3 gap-12 my-8 rounded-xl">
          <div className="bg-[#FFFFFF] p-5 text-start rounded-xl">
            <p className="flex items-center gap-2 text-base font-bold">
              {" "}
              <DotIcon color={"#45A7DE"} size={15} /> CRM
            </p>
            <p className="text-xs text-[#4B5C79] mb-5">
              CRM that helps you sell smarter, better, faster
            </p>
            <hr />
            <div className="flex items-center px-3 ">
              <div>
                <p className="text-[#4B5C79] text-sm mt-2">28 Section</p>
                <p className="font-bold text-[#303F58]">912 Article</p>
              </div>
              <div className="ml-auto flex items-center justify-center">
                {" "}
                <div className="bg-black rounded-full w-[39px] h-[37px] flex items-center justify-center" onClick={()=>navigate("/knowledge-base/crm")} >
                  <ArrowrightUp color="white" size={22} />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FFFFFF] p-5 text-start rounded-xl">
            <p className="flex items-center  gap-2 text-base font-bold">
              {" "}
              <DotIcon color={"#45A7DE"} size={15} /> CRM
            </p>
            <p className="text-xs text-[#4B5C79] mb-5">
              CRM that helps you sell smarter, better, faster
            </p>
            <hr />

            <div className="flex items-center px-3">
              <div>
                <p className="text-[#4B5C79] text-sm mt-2">28 Section</p>
                <p className="font-bold text-[#303F58]">912 Article</p>
              </div>
              <div className="ml-auto flex items-center justify-center">
                {" "}
                <div className="bg-black rounded-full w-[39px] h-[37px] flex items-center justify-center">
                  <ArrowrightUp  color="white" size={22}  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFFFF] p-5 text-start rounded-xl">
            <p className="flex items-center  gap-2 text-base font-bold">
              {" "}
              <DotIcon color={"#45A7DE"} size={15} /> CRM
            </p>
            <p className="text-xs text-[#4B5C79] mb-5">
              CRM that helps you sell smarter, better, faster
            </p>
            <hr />
            <div className="flex items-center px-3">
              <div>
                <p className="text-[#4B5C79] text-sm mt-2">28 Section</p>
                <p className="font-bold text-[#303F58]">912 Article</p>
              </div>
              <div className="ml-auto flex items-center justify-center">
                {" "}
                <div className="bg-black rounded-full w-[39px] h-[37px] flex items-center justify-center" onClick={()=>(navigate("/knowledge-base/crm"))}>
                  <ArrowrightUp  color="white" size={22}  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
