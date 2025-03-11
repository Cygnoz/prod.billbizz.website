import Calendar from "../../assets/icons/Calendar";
import Clock from "../../assets/icons/Clock";
import RecentlyUploaded from "./RecentlyUploaded";
import Authors from "./Authors";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useApi from "../../Hooks/useApi";
import { endpoints } from "../../Services/ApiEndpoints";
import DOMPurify from "dompurify";
import { formatDistanceToNow } from "date-fns";
import CardSkeleton from "../../cards/CardSkeltone";

type Props = {};

function Blog({}: Props) {
  const [blogData, setBlogData] = useState<any>([]);
  const [thisMonth, setThisMonth] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { request: getData } = useApi("get", 3001);
  const navigate = useNavigate();

  const handleGetBlogData = async () => {
    try {
      setLoading(true);
      const url = `${endpoints.GET_BLOGS}?postType=Blogs`;
      const { response, error } = await getData(url);

      if (!error && response) {
        const allPosts = response.data.data;

        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        const filteredPosts = allPosts.filter((post: any) => {
          if (!post.createdAt) return false;
          const postDate = new Date(post.createdAt);
          return (
            postDate.getMonth() === currentMonth &&
            postDate.getFullYear() === currentYear
          );
        });

        setBlogData(allPosts);
        setThisMonth(filteredPosts);
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false); // Set loading to false after API call completes
    }
  };

  useEffect(() => {
    handleGetBlogData();
  }, []);

  return (
    <div className="mx-10 my-9 grid grid-cols-12">
      <div className="col-span-8 h-[450px] overflow-y-auto custom-scrollbar">
        <div>
          <h2 className="text-[26px] font-semibold capitalize">
            <span className="text-[#cc1111]">Featured</span>
            <span className="text-[#222222]"> This month</span>
          </h2>

          <div className="grid grid-cols-2 gap-6 mt-5">
            {loading
              ? [...Array(4)].map((_, index) => <CardSkeleton key={index} />)
              : thisMonth.map((post: any, index: number) => {
                  const formattedDate = new Date(
                    post.createdAt
                  ).toLocaleDateString("en-CA");
                  const timeAgo = formatDistanceToNow(
                    new Date(post.createdAt),
                    { addSuffix: true }
                  );

                  return (
                    <div key={index} onClick={() => navigate("/blog/view")}>
                      <span
                        className={`h-5 px-2 py-1 rounded-[3px] inline-flex text-xs font-normal capitalize leading-3 ${
                          Math.random() < 0.5
                            ? "bg-[#f5cf4a] text-[#666666]"
                            : "bg-gradient-to-l from-[#cc1111] to-[#8f0100] text-white"
                        }`}
                      >
                        {post?.category?.categoryName}
                      </span>

                      <p className="w-[401px] text-[26px] font-semibold capitalize leading-9 my-4 text-[#222222]">
                        {post.title}
                      </p>
                      <img
                        src={post.image[0]}
                        alt=""
                        className="w-[401px] h-[229px] rounded-[7px]"
                      />
                      <div className="flex items-center gap-2 text-xs text-[#777777] mt-4">
                        <img
                          src={post.createdBy.userImage}
                          alt=""
                          className="h-[18px] w-[18px] rounded-full"
                        />
                        <span>{post.createdBy.userName}</span> | <Calendar />{" "}
                        <span>{formattedDate}</span> | <Clock />{" "}
                        <span>{timeAgo}</span>
                      </div>
                      <p
                        className="mt-4 text-[15px] text-[#555555] leading-snug"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(post.content),
                        }}
                      />
                    </div>
                  );
                })}
          </div>
        </div>
      </div>

      <div className="col-span-4 flex ps-24">
        <Authors />
      </div>

      <div className="col-span-12 bg-[#f6f6f5] -mx-10 -mb-10 mt-8 px-6 py-10">
        <div>
          <h3 className="text-[24px] font-semibold capitalize mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#EE3FD8] to-[#FFDD65]">
              All
            </span>
            <span className="text-[#222222]"> Post</span>
          </h3>
          <div className="ps-5">
            {loading ? (
              [...Array(6)].map((_, index) => <CardSkeleton key={index} />)
            ) : (
              <RecentlyUploaded blogData={blogData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
