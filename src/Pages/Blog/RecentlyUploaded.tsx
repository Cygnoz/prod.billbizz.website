import { formatDistanceToNow } from "date-fns";
import Calendar from "../../assets/icons/Calendar";
import Clock from "../../assets/icons/Clock";
import DOMPurify from "dompurify";
import noImage from '../../assets/images/noImage.png'
type Props = { blogData: any };

function RecentlyUploaded({ blogData }: Props) {

  console.log('blogdata',blogData);
  
  return (
    <div>
      {blogData.lengthh>0?
        blogData.map((item: any, index: number) => {
          const formattedDate = item.createdAt
            ? new Date(item.createdAt).toLocaleDateString("en-CA")
            : "Unknown Date";
          const timeAgo = formatDistanceToNow(new Date(item.createdAt), {
            addSuffix: true,
          });

          return (
            <div key={index} className="grid grid-cols-12 my-4">
              <div className="col-span-3 flex">
                <img
                  src={item?.image[0] || noImage}
                  className="w-full h-[180px] rounded-[5px]"
                  alt=""
                />
              </div>
              <div className="ps-4 col-span-9">
                <span className="h-5 px-2 py-1 bg-[#f3e6e6] rounded-[3px] text-xs font-normal capitalize leading-3 text-[#666666]">
                  {item?.category?.categoryName || "Uncategorized"}
                </span>
                <p className="w-[642px] text-[27px] font-semibold capitalize leading-[37.80px] text-[#222222]">
                  {item?.title || "Untitled"}
                </p>
                <div className="flex items-center gap-2 text-xs text-[#777777] mt-2">
                  <img
                    src={item?.createdBy.userImage || noImage}
                    alt="User"
                    className="h-[18px] w-[18px] rounded-full"
                  />
                  <span>{item?.createdBy?.userName || "Anonymous"}</span> |
                  <Calendar /> <span>{formattedDate}</span> |
                  <Clock /> <span>{timeAgo} </span>
                </div>
                {item?.content ? (
                  <p
                    className="mt-4 text-[15px] text-[#555555] leading-snug"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(item.content),
                    }}
                  />
                ) : (
                  <p className="mt-4 text-[15px] text-[#555555] leading-snug">
                    No content available
                  </p>
                )}
              </div>
            </div>
          );
        }):<div className="flex items-center  text-red-500 my-11">No Blogs Available !</div>}
    </div>
  );
}

export default RecentlyUploaded;
