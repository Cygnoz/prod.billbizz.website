// import { useNavigate } from "react-router-dom";
import Calendar from "../../assets/icons/Calendar";
import Clock from "../../assets/icons/Clock";
import { useEffect, useState } from "react";
import { endpoints } from "../../Services/ApiEndpoints";
import useApi from "../../Hooks/useApi";
import DOMPurify from "dompurify";
import ChevronLeft from "../../assets/icons/ChevronLeft";
import { useNavigate } from "react-router-dom";

type Props = {};

const ViewAll = ({}: Props) => {
    // const navigate=useNavigate()

    const [newsData, setnewsData] = useState([]);
    const { request: getData } = useApi("get", 3001);
  
    const handleGetnewsData = async () => {
      try {
        const url = `${endpoints.GET_BLOGS}?postType=Events`;
        const { response, error } = await getData(url);
  
        if (!error && response) {
          const allPosts = response.data.data;     
  
          setnewsData(allPosts);
        }
      } catch (error) {
        console.log("Error", error);
      }
    };
  
    useEffect(() => {
      handleGetnewsData();
    }, []);
  

  const [searchTerm, setSearchTerm] = useState("");

  const filteredNewsData = newsData.filter((item: any) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const navigate=useNavigate()
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
        <div onClick={() => navigate("/news-and-events")} className="bg-[#5D5D5D1A] cursor-pointer w-12 h-12 rounded-full border-2 border-[#FFFFFFA6] items-center flex justify-center">
<ChevronLeft size={20}/>
        </div>
        <p className="text-2xl font-bold text-black">
          Events
        </p>
        </div>
        <div className="flex items-center w-full max-w-sm rounded-[20px] border px-4 py-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none bg-transparent pl-2"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Event Card */}
   {   newsData? filteredNewsData.map((item:any)=>( 
    <div className="mx-3 my-4 border-b pb-4">
        <div className="grid grid-cols-12  gap-5 ">
          <div className="col-span-2 flex items-center justify-center">
            <img src={item?.image} alt="Event" className=" h-[124px] w-full " />
          </div>

          <div className="col-span-10">
            <h2 className="text-xl font-semibold my-3">{item?.title}</h2>
            <div className="flex items-center text-gray-500 text-sm mt-1 space-x-3">
              <div className="flex items-center gap-2 me-2">
              <Calendar  />
              <span>{item.meetingType==="Online"? "Online":item.venueName} </span>
              </div> |
              <div className="flex items-center gap-2 me-2">
                <Calendar  />
                <span>{item.meetingDate}</span>
              </div>|
              <div className="flex items-center gap-2">
                <Clock />
                <span>{item.startTime} to {item.endTime}</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-3 ">
            <p
                  className="text-lg font-semibold whitespace-pre-wrap text-black mt-2"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(item.content),
                  }}
                />
            </p>
          </div>
        </div>
      </div>)):<p className="text-[red] items-center flex justify-center my-2">No Data Available !</p>}
    </div>
  );
};

export default ViewAll;
