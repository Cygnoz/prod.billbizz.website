import { useNavigate, useParams } from "react-router-dom";
import ChevronLeft from "../../assets/icons/ChevronLeft";
import Calendar from "../../assets/icons/Calendar";
import Clock from "../../assets/icons/Clock";
import image2 from "../../assets/images/ViewNewsFooter.png";
import useApi from "../../Hooks/useApi";
import { useEffect, useState } from "react";
import { endpoints } from "../../Services/ApiEndpoints";
import defaultImage from "../../assets/images/noImage.png";

const ViewANews = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [aNews, setANews] = useState<any[]>([]);
  const { request: getNews } = useApi("get", 3001);

  const handleAGetNews = async () => {
    try {
      const url = `${endpoints.GET_POSTS}/${id}`;
      const { response, error } = await getNews(url);

      if (response && !error) {
        const data = response.data?.data;
        setANews(Array.isArray(data) ? data : [data]);
      } else {
        console.error(error.response?.data?.message);
      }
    } catch (error) {
      console.error("Error occurred", error);
    }
  };

  useEffect(() => {
    handleAGetNews();
  }, []);

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
    <div className="p-4 sm:p-6">
      {aNews.length > 0 ? (
        aNews.map((item: any) => (
          <div key={item.id}>
            <div className="flex gap-4 items-center">
              <div
                onClick={() => navigate("/news-and-events/view-all-news")}
                className="bg-gray-200 w-10 h-10 sm:w-12 sm:h-12 cursor-pointer rounded-full border-2 border-gray-300 flex justify-center items-center"
              >
                <ChevronLeft size={20} />
              </div>
              <p className="text-xl sm:text-2xl font-bold text-black">
                {item.title || "N/A"}
              </p>
            </div>

            <div className="flex flex-wrap items-center text-gray-500 text-sm mt-2 space-x-3 px-4 sm:px-16">
              <div className="bg-pink-100 rounded-3xl px-4 py-1 flex items-center gap-2">
                <div className="bg-gray-700 rounded-full w-2 h-2"></div>
                <p>ERP Software</p>
              </div>

              <div className="hidden sm:block bg-gray-500 w-px h-5"></div>

              <div className="flex items-center gap-2">
                <Calendar />
                <span>{new Date(item?.createdAt).toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" })}</span>
              </div>

              <div className="hidden sm:block bg-gray-500 w-px h-5"></div>

              <div className="flex items-center gap-2">
                <Clock />
                <span>{getTimeAgo(item?.createdAt)}</span>
              </div>
            </div>

            <div className="my-6 px-4 py-4">
              {item?.image && item?.image.length > 50 ? (
                <img className="w-full max-h-[540px] h-[500px] object-cover" src={item.image} alt="News" />
              ) : (
                <div className="flex justify-center items-center">
                  <img className="w-full max-h-[540px]  h-[500px] object-cover" src={defaultImage} alt="Default" />
                </div>
              )}
              <p className="my-6 leading-relaxed">{item.content}</p>
            </div>

            <div className="mt-10">
              <img className="w-full" src={image2} alt="Footer" />
            </div>
          </div>
        ))
      ) : (
        <p>No news available</p>
      )}
    </div>
  );
};

export default ViewANews;