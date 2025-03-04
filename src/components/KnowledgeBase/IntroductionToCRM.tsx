import ChevronRight from "../../assets/icons/ChevronRight";
import FileDown from "../../assets/icons/FileDown";
import PrinterIcon from "../../assets/images/PrinterIcon";
import LandingComponent from "./LandingComponent";
import bgimg from "../../assets/images/Group 1321314612.png";
import TwoArrow from "../../assets/icons/TwoArrow";
import ClockIcon from "../../assets/icons/ClockIcon";
import Vector from "../../assets/icons/Vector";
import UArraow from "../../assets/icons/UArraow";
import { useNavigate } from "react-router-dom";

type Props = {};

function IntroductionToCRM({}: Props) {
  const navigate = useNavigate();
  return (
    <div className="bg-[#f6f6f6]">
      <LandingComponent />
      <div className="p-14 ">
        <div className="flex ">
          <div className="text-xl font-bold text-[#303F58] flex items-center">
            <button
              className="text-[#820000]  cursor-pointer"
              onClick={() => navigate("/knowledge-base")}
            >
              Knowledge Base{" "}
            </button>
            <ChevronRight color="#4B5C79" />
            <button
              className="text-[#820000] cursor-pointer "
              onClick={() => navigate("/knowledge-base/crm")}
            >
              {" "}
              CRM{" "}
            </button>{" "}
            <ChevronRight color="#4B5C79" />
            <p
              className="text-[#820000] cursor-pointer "
              onClick={() => navigate("/knowledge-base/crm/getting-started")}
            >
              Getting Started
            </p>
            <ChevronRight color="#4B5C79" />
            <p>Introduction to CRM</p>
          </div>
        </div>

        <div className="flex">
          <div className="flex px-5 py-8 mt-5 w-full">
            <p className="text-[#303F58] text-[20px] font-bold">
              Introduction to Bill Bizz CRM
            </p>
            <div className="ml-auto flex items-center gap-3">
              <button className="border p-2 bg-[#2b343b] text-white text-xs rounded-lg flex items-center justify-center gap-1">
                <FileDown />
                PDF
              </button>
              <button className="border p-2 bg-[#870000] text-white text-xs rounded-lg  flex items-center justify-center gap-1">
                <PrinterIcon color={"white"} height={16} width={16} />
                Print
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="px-5 grid grid-cols-12 my-10 gap-4">
          <div className="col-span-5">
            <p className="text-[#303F58] text-[24px] font-bold">
              What is CRM ?
            </p>

            <p className="text-sm text-[#303F58] my-4">
              Customer Relationship Management (CRM) can be defined in many ways
              depending on what an individual intends to achieve. For some, it
              is the strategy to identify, understand, manage, and cater to the
              business needs of their prospects and existing customers.
            </p>

            <div className="grid grid-cols-2 gap-4 text-[#303F58] text-sm space-y-2">
              <div>
                <div className="flex items-center gap-2">
                  <TwoArrow />
                  <p className="font-medium ">Seamless access</p>
                </div>{" "}
                <p>
                  Secure cloud storage enables real-time customer connections
                  for lasting relationships.{" "}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 -mt-2">
                  <ClockIcon />
                  <p className="font-medium ">Optimize workflows</p>
                </div>{" "}
                <p>
                  CRM boosts sales, marketing, and support efficiency for better
                  deal closures.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Vector />
                  <p className="font-medium ">Engage proactively</p>
                </div>{" "}
                <p>
                  CRM sets milestones, offers insights, and enhances sales
                  strategies for retention.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <UArraow />
                  <p className="font-medium ">Simplify operations</p>
                </div>{" "}
                <p>
                  CRM enhances sales, marketing, and support for faster deals,
                  leads, and resolutions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-7 flex items-center justify-center">
            <img src={bgimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroductionToCRM;
