import { formatDistanceToNow } from "date-fns";
import Calendar from "../../assets/icons/Calendar";
import Clock from "../../assets/icons/Clock";
import DOMPurify from "dompurify";
import noImage from '../../assets/images/noImage.png'
import { useState } from "react";
import NextIcon from "../../assets/icons/NextIcon";
import PreviousIcon from "../../assets/icons/PreviousIcon";
type Props = { blogData: any };

function RecentlyUploaded({ blogData }: Props) {

  console.log('blogdata',blogData);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 2; // Only 2 blogs per page
  // const [rowsPerPage, setRowsPerPage] = useState<number>(2);

  // const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setRowsPerPage(Number(e.target.value));
  //   setCurrentPage(1);
  // };

  // Calculate the total number of pages
  const totalPages = Math.ceil(blogData.length / blogsPerPage);

  // Get the blogs for the current page
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const paginatedBlogs = blogData.slice(startIndex, endIndex);
  return (
    <div>
    {paginatedBlogs.length > 0 ? (
      paginatedBlogs.map((item: any, index: number) => {
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
                alt="Blog"
                loading="lazy"
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
                  src={item?.createdBy?.userImage || noImage}
                  alt="User"
                  className="h-[18px] w-[18px] rounded-full"
                  loading="lazy"
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
      })
    ) : (
      <div className="flex items-center text-red-500 my-11">
        No Blogs Available!
      </div>
    )}

    {/* Pagination Controls */}
    {totalPages > 1 && (
      <div className="flex justify-between items-center mt-4">
    <div className="text-xs text-[#71736B] font-medium flex gap-2">
      Showing {currentPage} of {totalPages || 1}
      <div className="flex gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <PreviousIcon size={20} color="#71736B" />
        </button>
        <button className="border text-[#FFFFFF] bg-[#97998E] px-2 py-1">
          {currentPage}
        </button>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages || totalPages === 0}
        >
          <NextIcon size={20} color="#71736B" />
        </button>
      </div>
    </div>
    {/* <div className="flex gap-2 items-center text-[#71736B] font-medium text-xs">
      Showing per page
      <select
        value={rowsPerPage}
        onChange={handleRowsPerPageChange}
        className="border border-gray-300 rounded-md p-1 text-sm"
      >
        {[5, 10, 20, 50].map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div> */}
  </div>
    )}
  </div>

  );
}

export default RecentlyUploaded;
