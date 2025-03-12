import { useLocation, useNavigate, useParams } from "react-router-dom";
import ChevronRight from "../../assets/icons/ChevronRight";
import CopyIcon from "../../assets/icons/explore/CopyIcon";
import LandingComponent from "./LandingComponent";
import { useEffect, useState } from "react";
import useApi from "../../Hooks/useApi";
import { endpoints } from "../../Services/ApiEndpoints";

type Props = {};

function GettingStarted({}: Props) {
  const [data, setData] = useState<any>([]);
  const { request: getData } = useApi("get", 3001);
  const location =useLocation()
  console.log(location.state)
  const {id}=useParams()

  const handleGetData = async () => {
    try {
      const url = `${endpoints.GET_ARTICLE}?subCategoryId=${id}`;
      const { response, error } = await getData(url);

      if (!error && response) {
        setData(response.data.data);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };


  useEffect(() => {
    handleGetData();
  }, []);

  const navigate=useNavigate()
  return (
    <div className="bg-[#f6f6f6]">
      <LandingComponent data={data} setData={setData} />
      <div className="p-14 ">
        <div className="flex ">
          <div className="text-xl font-bold text-[#303F58] flex items-center">
            <button className="text-[#820000]  "onClick={()=>(navigate("/knowledge-base"))}>Knowledge Base </button>
            <ChevronRight color="#4B5C79" />
            <button className="text-[#820000]  "onClick={()=>(navigate(`/knowledge-base/${data[0]?.category?._id}`))}> {data[0]?.category?.categoryName} </button>{" "}
            <ChevronRight color="#4B5C79" />
            <p  >{data[0]?.subCategory?.subCategoryName}</p>
          </div>
        </div>

       {data.length>0? data.map((item:any)=>( <div className="bg-white p-4 mt-4 flex  gap-4 rounded-md" onClick={()=>(navigate(`/knowledge-base/${data[0]?.category?.categoryName}/${data[0]?.subCategory?.subCategoryName}/${item._id}`))}>
          <div className="rounded-full  bg-[#CCCCCC] flex items-center justify-center w-[60px] h-[60px] cursor-pointer">
            <CopyIcon />
          </div>
          <div className="flex items-center">
            <div>
              <p className="font-bold text-[black]  cursor-pointer">{item?.title}</p>
             
            </div>
          </div>
        </div>)):<div className="text-red-700 flex items-center justify-center my-5">No Articles Avilable !</div>}
      </div>
    </div>
  );
}

export default GettingStarted;
