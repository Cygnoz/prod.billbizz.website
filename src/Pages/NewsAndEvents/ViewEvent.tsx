import newImg from "../../assets/images/Frame 1618873167.png";

type Props = {};

const timelineData = [
  { title: "Opening Keynote", time: "10:00 am", color: "bg-red-500" },
  { title: "Panel Discussion", time: "10:00 am", color: "bg-orange-400" },
  {
    title: "Live Product Discussion",
    time: "10:00 am",
    color: "bg-yellow-400",
  },
  { title: "Q n A with Product Team", time: "10:00 am", color: "bg-green-500" },
  { title: "Networking Lunch", time: "10:00 am", color: "bg-cyan-400" },
];

function ViewEvent({}: Props) {
  return (
    <div className="px-6 py-5">
      {/* Event Image */}
      <div
        className="h-[311px]"
        style={{ backgroundImage: `url(${newImg})`, backgroundSize: "cover" }}
      ></div>

      {/* Event Description */}
      <p className="text-[28px] font-semibold mt-4">
        <span className="text-[#870000]">About</span> the Event
      </p>
      <p className="text-2xl text-[#555555] mt-4">
        Join industry leaders, business owners, and financial experts at the
        Bill Bizz Annual Business Summit 2025. This event will cover the latest
        trends in billing and financial management, product updates, and
        networking opportunities.
      </p>

      <div className="mt-8 px-10 flex items-center justify-between w-full relative">
        {timelineData.map((event, index) => (
          <div key={index} className="flex flex-col items-center relative">
            {index !== 0 && (
              <div className="absolute -left-full top-2.5 w-full h-[1px] bg-gray-300 -px-20 "></div>
            )}

            <div className={`w-4 h-4 rounded-full ${event.color}`}></div>

            <p className="mt-2 text-center font-semibold">{event.title}</p>
            <p className="text-gray-500 text-sm">{event.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewEvent;
