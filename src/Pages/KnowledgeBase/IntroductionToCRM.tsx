import ChevronRight from "../../assets/icons/ChevronRight";
import FileDown from "../../assets/icons/FileDown";
import PrinterIcon from "../../assets/images/PrinterIcon";
import LandingComponent from "./LandingComponent";
import TwoArrow from "../../assets/icons/TwoArrow";
import ClockIcon from "../../assets/icons/ClockIcon";
import Vector from "../../assets/icons/Vector";
import UArraow from "../../assets/icons/UArraow";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useApi from "../../Hooks/useApi";
import { endpoints } from "../../Services/ApiEndpoints";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

type Props = {};

function IntroductionToCRM({}: Props) {

  const [data, setData] = useState<any>([]);
  const { request: getData } = useApi("get", 3001);
  const { id } = useParams();

  const handleGetData = async () => {
    try {
      const url = `${endpoints.GET_ARTICLE}/${id}`;
      const { response, error } = await getData(url);

      if (!error && response) {
        setData(response.data.data);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

const handlePrint = () => {
  const printContents = document.querySelector('.prinding-div')?.innerHTML;
  if (!printContents) return;

  const originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
  window.location.reload();
};

const handlePDF = () => {
  const element = document.querySelector('.prinding-div') as HTMLElement;
  if (!element) return;

  html2canvas(element, { scale: 2 }).then((canvas: HTMLCanvasElement) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');

    const imgWidth = 200; 
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 10, imgWidth, imgHeight);
    pdf.save('document.pdf');
  }).catch((error) => {
    console.error("Error generating PDF:", error);
  });
};

  useEffect(() => {
    handleGetData();
  }, []);
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
              onClick={() => navigate(`/knowledge-base/${data?.category?._id}`)}
            >
              {" "}
             {data?.category?.categoryName}{" "}
            </button>{" "}
            <ChevronRight color="#4B5C79" />
            <p
              className="text-[#820000] cursor-pointer "
              onClick={() => navigate(`/knowledge-base/${data?.category?.categoryName}/${data.subCategory._id}`)}
            >
              {data?.subCategory?.subCategoryName}
            </p>
            <ChevronRight color="#4B5C79" />
            <p>{data?.title}</p>
          </div>
        </div>

        <div className="flex">
          <div className="flex px-5 py-8 mt-5 w-full">
            <p className="text-[#303F58] text-[20px] font-bold">
              {data.title}
            </p>
            <div className="ml-auto flex items-center gap-3">
              <button className="border p-2 bg-[#2b343b] text-white text-xs rounded-lg flex items-center justify-center gap-1" onClick={handlePDF}>
                <FileDown />
                PDF
              </button>
              <button className="border p-2 bg-[#870000] text-white text-xs rounded-lg  flex items-center justify-center gap-1" onClick={handlePrint}>
                <PrinterIcon color={"white"} height={16} width={16} />
                Print
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="px-5 grid grid-cols-12 my-10 gap-4 prinding-div">
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
            <img src={data.image|| data.image[0]} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroductionToCRM;
