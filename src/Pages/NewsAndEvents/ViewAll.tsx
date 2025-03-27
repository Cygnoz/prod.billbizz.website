import { useEffect, useState } from "react";
import { endpoints } from "../../Services/ApiEndpoints";
import useApi from "../../Hooks/useApi";
import DOMPurify from "dompurify";
import ChevronLeft from "../../assets/icons/ChevronLeft";
import { useNavigate } from "react-router-dom";
import defaultImage from "../../assets/images/noImage.png";

type Props = {};

const ViewAll = ({ }: Props) => {
  const [newsData, setNewsData] = useState([]);
  const { request: getData } = useApi("get", 3001);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleGetNewsData = async () => {
    try {
      setLoading(true);
      const url = `${endpoints.GET_BLOGS}?postType=Events&project=BillBizz&postStatus=Published`;
      const { response, error } = await getData(url);

      if (!error && response) {
        setNewsData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    handleGetNewsData();
  }, []);

  const filteredNewsData = newsData.filter((item: any) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filteredNewsData);

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex gap-4 items-center">
          <button
            onClick={() => navigate("/news-and-events")}
            className="bg-[#5D5D5D1A] cursor-pointer w-12 h-12 rounded-full border-2 border-[#FFFFFFA6] flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold text-black">Events</h1>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-sm">
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none bg-transparent border rounded-[20px] px-4 py-2"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Event Cards */}
      <div className="mt-6 grid gap-6">
        {filteredNewsData.length > 0 ? (
          loading? <p>Loading...</p>:
          filteredNewsData.reverse().map((item: any) => (
            <div
              key={item._id}
              onClick={() => navigate(`/news-and-events/view-all/view-event/${item._id}`)}
              className="border-b pb-4 cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Event Image */}
                <div className="lg:col-span-2 flex items-center justify-center">
                  <img
                    src={item.image[0] || defaultImage}
                    alt={item?.title || "Event"}
                    className="h-[124px] w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Event Info */}
                <div className="lg:col-span-10">
                  <div className="flex flex-wrap justify-between">
                    <h2 className="text-lg sm:text-xl font-semibold my-2 sm:my-3">{item?.title || 'N/A'}</h2>
                    <div className="bg-[#EAD1D1] rounded-3xl w-fit sm:w-44 h-6 sm:h-7 flex gap-2 sm:gap-3 items-center px-3 sm:px-4">
                      <div className="bg-[#393939] rounded-full w-2 h-2"></div>
                      <p className="text-xs sm:text-sm">{item?.category?.categoryName || 'N/A'}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 text-sm text-[#393939]">
                    <p>Venue: <span>{item.meetingType === "Online" ? "Online" : item.venueName || "N/A"}</span></p>
                    <p>Date: <span>{new Date(item?.meetingDate).toLocaleDateString("en-US", {
                      month: "2-digit",
                      day: "2-digit",
                      year: "numeric",
                    })}</span></p>
                    <p>Start Time: <span>{item.startTime || "N/A"}</span></p>
                    <p>End Time: <span>{item.endTime || "N/A"}</span></p>
                  </div>

                  {/* Event Description */}
                  <p
                    className="text-gray-600 text-sm mt-3"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.content) }}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-red-500 text-center my-4">No Data Available!</p>
        )}
      </div>
    </div>
  );
};

export default ViewAll;