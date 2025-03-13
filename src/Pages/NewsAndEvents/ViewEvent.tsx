import { useNavigate } from "react-router-dom";
// import newImg from "../../assets/images/Frame 1618873167.png";
import ChevronLeft from "../../assets/icons/ChevronLeft";
import image from '../../assets/images/eventViewImage.webp'
import image2 from '../../assets/images/ViewNewsFooter.png'

type Props = {};

// const timelineData = [
//   { title: "Opening Keynote", time: "10:00 am", color: "bg-red-500" },
//   { title: "Panel Discussion", time: "10:00 am", color: "bg-orange-400" },
//   {
//     title: "Live Product Discussion",
//     time: "10:00 am",
//     color: "bg-yellow-400",
//   },
//   { title: "Q n A with Product Team", time: "10:00 am", color: "bg-green-500" },
//   { title: "Networking Lunch", time: "10:00 am", color: "bg-cyan-400" },
// ];

function ViewEvent({}: Props) {
  const navigate = useNavigate()
  return (
    // <div className="px-6 py-5">
    //   <div
    //     className="h-[311px]"
    //     style={{ backgroundImage: `url(${newImg})`, backgroundSize: "cover" }}
    //   ></div>

    //   <p className="text-[28px] font-semibold mt-4">
    //     <span className="text-[#870000]">About</span> the Event
    //   </p>
    //   <p className="text-2xl text-[#555555] mt-4">
    //     Join industry leaders, business owners, and financial experts at the
    //     Bill Bizz Annual Business Summit 2025. This event will cover the latest
    //     trends in billing and financial management, product updates, and
    //     networking opportunities.
    //   </p>

    //   <div className="mt-8 px-10 flex items-center justify-between w-full relative">
    //     {timelineData.map((event, index) => (
    //       <div key={index} className="flex flex-col items-center relative">
    //         {index !== 0 && (
    //           <div className="absolute -left-full top-2.5 w-full h-[1px] bg-gray-300 -px-20 "></div>
    //         )}

    //         <div className={`w-4 h-4 rounded-full ${event.color}`}></div>

    //         <p className="mt-2 text-center font-semibold">{event.title}</p>
    //         <p className="text-gray-500 text-sm">{event.time}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div>
 <div className="p-6">
            <div className="flex gap-4 items-center">
                <div onClick={() => navigate("/news-and-events/view-all")} className="bg-[#5D5D5D1A] w-12 h-12 cursor-pointer rounded-full border-2 border-[#FFFFFFA6] items-center flex justify-center">
                    <ChevronLeft size={20} />
                </div>
                <p className="text-2xl font-bold text-black">
                Revolutionizing Inventory: AI-Powered Solutions Unveiled at BizTrack Launch!
                </p>
            </div>
            <div className="flex justify-between items-center text-gray-500 text-sm mt-1 space-x-3 px-16">
                <div className="flex space-x-3">
                <p className="text-[#393939] text-sm font-normal">Venue: <span>The Grand Oak Hall</span></p>
                <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
                <p className="text-[#393939] text-sm font-normal">Date: <span>02 December 2025</span></p>
                <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
                <p className="text-[#393939] text-sm font-normal">Start Time: <span>9.00 Am</span></p>
                <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
                <p className="text-[#393939] text-sm font-normal">End Time: <span>5.00 Pm</span></p>
                </div>
                <div className="bg-[#EAD1D1] rounded-3xl w-44 h-7 flex gap-3 items-center px-4">
                    <div className="bg-[#393939] rounded-full w-2 h-2"></div>
                    <p>ERP Software</p>
                </div>
            </div>

            <div className="my-6 px-4 py-4">
                <img className="h-[540px]" src={image} alt="" />
                <p className="my-6">
                    Join industry leaders, business owners, and financial experts at the Bill Bizz Annual Business Summit 2025. This event will cover the latest trends in billing and financial management, product updates, and networking opportunities.urus egestas sit nisl lacinia ornare adipiscing pellentesque quis suscipit. Aliquet non vel quis nulla mattis elementum sed ante. Dolor sit dolor imperdiet porttitor morbi nibh. Risus proin mattis senectus pellentesque viverra.
                    Amet in et pellentesque tempor netus nec. Phasellus est aenean ac lectus vulputate varius euismod turpis eget. Pharetra odio pulvinar eget nec neque sapien elit ipsum. Aliquet a sit ipsum donec cras nisl morbi. Aenean tortor blandit dignissim amet turpis. Fringilla pellentesque sed malesuada dis aliquet nec dictum sed tellus. Sapien ac proin velit ipsum vitae velit sed tincidunt. Aenean gravida amet amet elit molestie. Sed semper at eu velit metus elit. Scelerisque eu gravida risus sit sit pretium vitae. Auctor malesuada malesuada arcu sit. Vel scelerisque ultrices ut vitae elit feugiat. Est a vehicula dictum amet eget.
                    <br />
                    Sem etiam interdum ultricies amet urna tortor ullamcorper. A aliquet purus nibh a. Velit diam nunc tellus eget dolor pellentesque. Auctor vitae ullamcorper vitae urna arcu lorem nunc urna faucibus. Malesuada cursus neque velit non suspendisse. Tempus nibh sed quis sagittis metus iaculis amet amet magna. Lobortis neque odio viverra augue ut. Gravida aliquet diam in ut morbi sit dictumst. Pharetra elementum urna urna elementum lacus enim bibendum. A turpis volutpat.
                </p>
            </div>

            <div className="mt-10">
                <img className="" src={image2} alt="" />
            </div>
        </div>
    </div>
  );
}

export default ViewEvent;
