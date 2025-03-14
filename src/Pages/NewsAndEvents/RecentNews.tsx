import DOMPurify from "dompurify";
import img from "../../assets/images/Frame 1618873045.png";
import { useNavigate } from "react-router-dom";

type Props = { data?: any };

const RecentNews = ({ data }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[rgb(246,246,246)]">
      <div className="p-5">
      <div className="flex">
          <h3 className="font-bold text-xl text-black">
             Recent News
          </h3>
          <div className="ml-auto">
            <button
              className="text-[#820000] text-sm"
               onClick={() => navigate("/news-and-events/view-all-news")}
            >
              View all
            </button>
          </div>
        </div>
        <div className="flex  gap-4 overflow-x-auto scrollbar-hidden whitespace-nowrap">
          {data.length>0 ?
            data.length > 0 && data.reverse().map((item: any, index: number) => (
              <div
                key={index}
                className="bg-white p-4 mt-5 border rounded-lg min-w-[440px] max-w-[500px] shadow-md relative"
              >
                <div className="relative">
                  {item?.image && item?.image>50?(
                  <img src={item?.image} alt="" className="w-full h-auto rounded-md" />
                  ):(
                    <img src={img} alt="" className="w-full h-auto rounded-md" />
                  )}
                 { item?.category?.categoryName && <div className="absolute top-0 right-0 bg-white/10 border border-white/50 backdrop-blur-lg text-white px-5 py-3  text-sm font-semibold">
                   {item?.category?.categoryName}
                  </div>}
                </div>
                <div className="bg-[#EAD1D1] rounded-3xl my-4 w-44 h-7 flex gap-3 items-center px-4">
                    <div className="bg-[#393939] rounded-full w-2 h-2"></div>
                    <p className="text-[#393939] text-xs font-normal">{item?.title}</p>
                </div>
                {/* <h4 className="text-xl my-2 font-semibold text-[#710000]">
                  {item?.title}
                </h4> */}
                <p
                  className="text-lg font-semibold whitespace-pre-wrap text-black mt-2"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(item.content),
                  }}
                />
              </div>
            )):<div className="text-red-600 flex items-center justify-center my-5">No News Available !</div>}
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
