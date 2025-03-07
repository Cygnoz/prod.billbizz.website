import { useNavigate } from "react-router-dom";
import Calendar from "../../assets/icons/Calendar";
import Clock from "../../assets/icons/Clock";
// import SearchIcon from "../../assets/icons/SearchIcon";
import img from "../../assets/images/Frame 1618873150.png";

type Props = {};

const ViewAll = ({}: Props) => {
    const navigate=useNavigate()

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold text-black">
          <span className="text-[#870000]">Popular</span> Event's
        </p>
        <div className="flex items-center w-full max-w-sm rounded-[20px] border px-4 py-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none bg-transparent pl-2"
          />
{/* <SearchIcon/> */}
        </div>
      </div>

      {/* Event Card */}
      <div className="mx-3 my-4 border-b pb-4">
        <div className="grid grid-cols-12  gap-5 " onClick={()=>navigate("/news-and-events/view-all/view-event")}>
          {/* Image Section */}
          <div className="col-span-2 flex items-center justify-center">
            <img src={img} alt="Event" className=" h-[124px] w-full " />
          </div>

          <div className="col-span-10">
            <h2 className="text-xl font-semibold my-3">Bill Bizz Annual Business Summit 2025</h2>
            <div className="flex items-center text-gray-500 text-sm mt-1 space-x-3">
              <div className="flex items-center gap-2 me-2">
              <Calendar  />
              <span>Grand Hyatt, Dubai </span>
              </div> |
              <div className="flex items-center gap-2 me-2">
                <Calendar  />
                <span>02 December 2022</span>
              </div>|
              <div className="flex items-center gap-2">
                <Clock />
                <span>10:00 am to 12:00 pm</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-3 ">
              Join industry leaders, business owners, and financial experts at the Bill Bizz Annual Business
              Summit 2025. This event will cover the latest trends in billing and financial management, product
              updates, and networking opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
