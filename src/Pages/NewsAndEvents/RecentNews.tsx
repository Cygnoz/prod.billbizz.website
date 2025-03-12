import DOMPurify from "dompurify";
import img from "../../assets/images/Frame 1618873045.png";

type Props = { data?: any };

const RecentNews = ({ data }: Props) => {
  return (
    <div className="bg-[rgb(246,246,246)]">
      <div className="p-5">
        <h3 className="font-bold text-xl text-black">
          <span className="text-[#8c1216]">Recent </span>  News
        </h3>
        <div className="flex  gap-4 overflow-x-auto scrollbar-hidden whitespace-nowrap">
          {data.length>0 ?
            data.length > 0 && data.reverse().map((item: any, index: number) => (
              <div
                key={index}
                className="bg-white p-4 mt-5 border rounded-lg min-w-[440px] max-w-[500px] shadow-md relative"
              >
                <div className="relative">
                  <img src={item?.image[0]?item?.image[0] : img} alt="" className="w-full h-auto rounded-md" />
                 { item?.category?.categoryName && <div className="absolute top-0 right-0 bg-white/10 border border-white/50 backdrop-blur-lg text-white px-5 py-3  text-sm font-semibold">
                   {item?.category?.categoryName}
                  </div>}
                </div>

                <h4 className="text-xl my-2 font-semibold text-[#710000]">
                  {item?.title}
                </h4>
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
