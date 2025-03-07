import DotIcon from "../../assets/icons/DotIcon";
import NewspaperIcon from "../../assets/icons/NewspaperIcon";
import newImg from "../../assets/images/Frame 1618873045.png";
import ArrowrightUp from "../../components/ArrowRightUp";
import newsImg from "../../assets/images/Frame 1618873146.png";
import img from "../../assets/images/Frame 1618873150.png";
import { useNavigate } from "react-router-dom";
type Props = {};

const NewsAndEvents = ({}: Props) => {
    const navigate=useNavigate()
  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-8">
        <div
          className="h-[535px] relative"
          style={{ backgroundImage: `url(${newImg})`, backgroundSize: "cover" }}
        >
          <div className="absolute top-0 right-0 flex items-center justify-end py-7 px-5">
            <button className="border border-white h-10 bg-white/20 backdrop-blur-md text-white px-2 rounded-3xl">
              Best Of The Week
            </button>
          </div>{" "}
          <div className="absolute bottom-0 left-0 p-10 text-white">
            <div className="flex items-center gap-2">
              <NewspaperIcon color="white" />
              <p className="font-semibold text-[10px]">Block Chain News</p>
              <DotIcon color="white" />
              <p className="text-[#FFFFFFB8] text-[10px]">4 hours ago</p>
            </div>
            <h1 className="text-4xl font-bold">
              The Impact of Technology on the <br /> Workplace: How Technology
              is Changing
            </h1>
            <div className="flex mt-5 gap-5">
              <div className="rounded-full h-10 w-10 border-white border flex items-center justify-center  cursor-pointer ">
                <ArrowrightUp size={25} />
              </div>
              <button className="h-10 rounded-3xl px-3 border border-white">
                Read Article
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-4 m-3 pe-4 pt-5">
        <div className="flex">
          {" "}
          <h3 className="font-bold text-xl text-black">
            <span className="text-[#8c1216]">Events</span> This month
          </h3>
          <div className="ml-auto">
            <button className="text-[#820000] text-sm" onClick={()=>navigate("/news-and-events/view-all")}>View all </button>
          </div>{" "}
        </div>

        <div
          className="h-[244px] relative w-full"
          style={{
            backgroundImage: `url(${newsImg})`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#3D0505] to-transparent  mx-3">
            <div className="  absolute bottom-0 left-0 p-3 text-white pt-5">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-[10px] text-white">
                  Annual Business Summit
                </p>
                <DotIcon color="white" />
                <p className="text-[white] text-[10px]">4 hours ago</p>
              </div>
              <p className="text-xs text-white mt-3">
                Join industry leaders, business owners, and financial experts at
                the Bill Bizz Annual Business Summit 2025.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-3 my-4">
          <div className="grid grid-cols-12 pb-4 ">
            <div className="col-span-9  felx items-center">
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-[10px] text-[#3D0505]">
                    Annual Business Summit
                  </p>
                  <DotIcon color="black" />
                  <p className="text-[black] text-[10px]">4 hours ago</p>
                </div>
                <p className="text-xs mt-1">
                  Join industry leaders, business owners, and financial experts
                  at the Bill Bizz Annual Business Summit 2025.
                </p>
              </div>
            </div>
            <div className="col-span-3">
              <img src={img} alt="" />
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default NewsAndEvents;
