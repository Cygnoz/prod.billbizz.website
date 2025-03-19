import { useEffect, useState } from "react";
import ChevronLeft from "../../assets/icons/ChevronLeft";
import Clock from "../../assets/icons/Clock";
import Calendar from "../../assets/icons/Calendar";
import { useNavigate } from "react-router-dom";
import FilterIcon from "../../assets/icons/FilterIcon";
import useApi from "../../Hooks/useApi";
import { endpoints } from "../../Services/ApiEndpoints";
import defaultImage from "../../assets/images/noImage.png";

type Props = {};

const ViewAllNews = ({}: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allNewsData, setAllNewsData] = useState([]);
  const { request: allNews } = useApi("get", 3001);

  const navigate = useNavigate();

  const handleGetAllNews = async () => {
    try {
      const url = `${endpoints.GET_BLOGS}?postType=News&project=BillBizz`;
      const { response, error } = await allNews(url);

      if (response && !error) {
        setAllNewsData(response.data.data);
      } else {
        console.error("Error: ", error.response.data.message);
      }
    } catch (err) {
      console.error("Error occurred", err);
    }
  };

  useEffect(() => {
    handleGetAllNews();
  }, []);

  const filteredNews = allNewsData.filter((item: any) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTimeAgo = (timestamp: string | number | Date | null | undefined): string => {
    if (!timestamp) return "Invalid date";

    const now = new Date().getTime();
    const createdAt = new Date(timestamp).getTime();

    if (isNaN(createdAt)) return "Invalid date";

    const diffInMs = now - createdAt;
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

    return diffInHours > 0 ? `${diffInHours} Hours Ago` : "Just now";
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex gap-4 items-center">
          <div
            onClick={() => navigate("/news-and-events")}
            className="bg-[#5D5D5D1A] w-12 h-12 cursor-pointer rounded-full border-2 border-[#FFFFFFA6] items-center flex justify-center"
          >
            <ChevronLeft size={20} />
          </div>
          <p className="text-2xl font-bold text-black">News</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="bg-[#FFFFFF] rounded-3xl w-fit h-11 border items-center flex justify-center px-3 gap-2">
            <FilterIcon />
            <p className="text-[#565148] text-sm font-normal">News Category</p>
          </div>
          <div className="flex items-center w-full sm:w-80 max-w-sm rounded-[20px] border px-4 py-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none bg-transparent pl-2 text-[#565148] text-sm font-normal"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {allNewsData.length > 0 ? (
        filteredNews.map((item: any) => (
          <div
            key={item._id}
            onClick={() => navigate(`/news-and-events/view-all-news/view-news/${item._id}`)}
            className="cursor-pointer"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 border-b mx-3 my-4 pb-4">
              <div className="md:col-span-2 flex items-center justify-center mt-4">
                <img
                  src={item?.image && item?.image.length > 50 ? item?.image : defaultImage}
                  alt="News"
                  className="h-[124px] w-full object-cover"
                />
              </div>

              <div className="md:col-span-10">
                <h2 className="text-xl font-semibold my-3">{item?.title}</h2>
                <div className="flex flex-wrap items-center text-gray-500 text-sm mt-1 space-x-3">
                  <div className="bg-[#EAD1D1] rounded-3xl w-fit px-4 h-7 flex gap-3 items-center">
                    <div className="bg-[#393939] rounded-full w-2 h-2"></div>
                    <p>ERP Software</p>
                  </div>
                  <div className="bg-[#5F5E5E] w-[1px] h-5 hidden md:block"></div>
                  <div className="flex items-center gap-2">
                    <Calendar />
                    <span>
                      {new Date(item?.createdAt).toLocaleDateString("en-US", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="bg-[#5F5E5E] w-[1px] h-5 hidden md:block"></div>
                  <div className="flex items-center gap-2">
                    <Clock />
                    <span>{getTimeAgo(item?.createdAt)}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mt-3">{item?.content}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-red-600 flex items-center justify-center my-2">No Data Available!</p>
      )}
    </div>
  );
};

export default ViewAllNews;
