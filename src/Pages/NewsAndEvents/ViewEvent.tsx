import { useNavigate, useParams } from "react-router-dom";
import ChevronLeft from "../../assets/icons/ChevronLeft";
import image2 from "../../assets/images/ViewNewsFooter.png";
import { useEffect, useState } from "react";
import useApi from "../../Hooks/useApi";
import { endpoints } from "../../Services/ApiEndpoints";
import defaultImage from "../../assets/images/noImage.png";

type Props = {};

function ViewEvent({ }: Props) {
  const navigate = useNavigate();
  const [aEvent, setAEvent] = useState<any>(null);
  const { request: getEvent } = useApi("get", 3001);
  const { id } = useParams();

  const handleAGetEvent = async () => {
    try {
      const url = `${endpoints.GET_POSTS}/${id}`;
      const { response, error } = await getEvent(url);

      if (response && !error) {
        setAEvent(response.data.data);
      } else {
        console.error(error.response?.data?.message);
      }
    } catch (error) {
      console.error("Error occurred", error);
    }
  };

  useEffect(() => {
    handleAGetEvent();
  }, []);

  return (
    <div>
      {aEvent ? (
        <div className="p-4 sm:p-6">
          <div className="flex gap-4 items-center">
            <div
              onClick={() => navigate("/news-and-events/view-all")}
              className="bg-gray-200 w-10 h-10 sm:w-12 sm:h-12 cursor-pointer rounded-full border-2 border-gray-300 flex justify-center items-center"
            >
              <ChevronLeft size={20} />
            </div>
            <p className="text-xl sm:text-2xl font-bold text-black">{aEvent.title}</p>
          </div>

          <div className="flex flex-wrap justify-between items-center text-gray-500 text-sm mt-2 px-4 sm:px-16">
            <div className="flex flex-wrap space-x-3">
              <p className="text-gray-700 text-sm font-normal">Venue: <span>{aEvent.meetingType === "Online" ? "Online" : aEvent.venueName || "N/A"}</span></p>
              <div className="hidden sm:block bg-gray-500 w-px h-5"></div>
              <p className="text-gray-700 text-sm font-normal">Date: <span>{new Date(aEvent?.meetingDate).toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" })}</span></p>
              <div className="hidden sm:block bg-gray-500 w-px h-5"></div>
              <p className="text-gray-700 text-sm font-normal">Start Time: <span>{aEvent.startTime}</span></p>
              <div className="hidden sm:block bg-gray-500 w-px h-5"></div>
              <p className="text-gray-700 text-sm font-normal">End Time: <span>{aEvent.endTime}</span></p>
            </div>
            <div className="bg-[#EAD1D1] rounded-3xl px-4 py-1 flex items-center gap-2 mt-3 sm:mt-0">
              <div className="bg-gray-700 rounded-full w-2 h-2"></div>
              <p>{aEvent?.category?.categoryName}</p>
            </div>
          </div>

          <div className="my-6 px-4 py-4">
            {aEvent?.image[0] && aEvent?.image[0].length > 50 ? (
              <div className="flex justify-center">
              <img className="w-[500px] max-h-[540px] object-cover" src={aEvent?.image[0]} alt="Default" />
            </div>
            ) : (
              <div className="flex justify-center">
                <img className="w-[500px] max-h-[540px] object-cover" src={defaultImage} alt="Default" />
              </div>
            )}
            <p className="my-6 leading-relaxed">{aEvent.content}</p>
          </div>

          <div className="mt-10">
            <img className="w-full" src={image2} alt="Footer" />
          </div>
        </div>
      ) : (
        <p>Loading event...</p>
      )}
    </div>
  );
}

export default ViewEvent;