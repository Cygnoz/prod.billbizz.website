import DotIcon from "../../assets/icons/DotIcon";
import NewspaperIcon from "../../assets/icons/NewspaperIcon";
import newImg from "../../assets/images/Frame 1618873045.png";
// import ArrowrightUp from "../../components/ArrowRightUp";
// import newsImg from "../../assets/images/Frame 1618873146.png";
// import img from "../../assets/images/Frame 1618873150.png";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../../Services/ApiEndpoints";
import useApi from "../../Hooks/useApi";
import { useEffect, useState } from "react";
import RecentNews from "./RecentNews";
import DOMPurify from "dompurify";
import { formatDistanceToNow } from "date-fns";
import defaultImage from '../../assets/images/noImage.png'

type Props = {};

const NewsAndEvents = ({ }: Props) => {
  const [blogData, setBlogData] = useState([]);
  const [thisMonth, setThisMonth] = useState<any>([]);
  const [latestNews, setLatestNews] = useState<any>(null);
  const [latestEvent, setLatestEvent] = useState<any>(null);

  const { request: getData } = useApi("get", 3001);

  const handleGetBlogData = async () => {
    try {
      const url = `${endpoints.GET_BLOGS}?postType=News&project=BillBizz`;

      const { response, error } = await getData(url);
      console.log('url', url);
      console.log('res', response);
      console.log('err', error);


      if (!error && response) {
        const allPosts = response.data.data;

        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        const sortedPosts = allPosts
          .filter((post: any) => post.createdAt)
          .sort(
            (a: any, b: any) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );

        const filteredPosts = sortedPosts.filter((post: any) => {
          const postDate = new Date(post.createdAt);
          return (
            postDate.getMonth() === currentMonth &&
            postDate.getFullYear() === currentYear
          );
        });

        const latestPost = filteredPosts.length > 0 ? filteredPosts[0] : null;

        setBlogData(sortedPosts);
        setLatestNews(latestPost);
      }
    } catch (error) {
      console.error("Error fetching blog data", error);
    }
  };

  const handlegetEvent = async () => {
    try {
      const url = `${endpoints.GET_BLOGS}?postType=Events&project=BillBizz`;

      const { response, error } = await getData(url);
      console.log('ur', url);
      console.log('response', response);
      console.log('error', error);

      if (!error && response) {
        const allPosts = response.data.data;

        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        const sortedPosts = allPosts
          .filter((post: any) => post.createdAt)
          .sort(
            (a: any, b: any) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );

        const filteredPosts = sortedPosts.filter((post: any) => {
          const postDate = new Date(post.createdAt);
          return (
            postDate.getMonth() === currentMonth &&
            postDate.getFullYear() === currentYear
          );
        });

        const latestPost = filteredPosts.length > 0 ? filteredPosts[0] : null;

        setThisMonth(filteredPosts);
        setLatestEvent(latestPost);
      }
    } catch (error) {
      console.error("Error fetching blog data", error);
    }
  };

  useEffect(() => {
    handleGetBlogData();
    handlegetEvent();
  }, []);

  console.log("Latest News Image", latestNews);

  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8 mt-6 p-6">
        {latestNews ? (
          <div
            key={latestNews._id}
            className="h-[535px] relative"
            style={{
              backgroundImage: `url(${latestNews?.image?.[0] || newImg})`,
              backgroundSize: "cover",
            }}
          >
            <div className="absolute top-0 right-0 flex items-center justify-end py-7 px-5">
              <button className="border border-white h-10 bg-white/0 backdrop-blur-[60.60px] text-white px-2 rounded-3xl">
                Best Of The Week
              </button>
            </div>

            <div className="absolute bottom-0 left-0 p-10 text-white">
              <div className="flex items-center gap-2">
                <NewspaperIcon color="white" />
                <p className="font-semibold text-[10px]">
                  {latestNews?.category?.categoryName || "News"}
                </p>
                <DotIcon color="white" />
                <p className="text-[#FFFFFFB8] text-[10px]">
                  {formatDistanceToNow(new Date(latestNews.createdAt), {
                    addSuffix: true,
                  })}
                </p>
              </div>

              <h1 className="text-4xl font-bold">{latestNews?.title}</h1>

              {/* <div className="flex mt-5 gap-5">
        <div className="rounded-full h-10 w-10 border-white border backdrop-blur-[60.60px] flex items-center justify-center cursor-pointer">
          <ArrowrightUp size={25} />
        </div>
        <button className="h-10 rounded-3xl px-3 border border-white backdrop-blur-[60.60px]">
          Read Article
        </button>
      </div> */}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-[535px] text-red-500">
            No News Available!
          </div>
        )}

        <div className="w-[100%]">
          <RecentNews data={blogData} />
        </div>
      </div>

      <div className="col-span-4 m-3 pe-4 pt-5">
        <div className="flex">
          <h3 className="font-bold text-xl text-black">
            Recent Events
          </h3>
          <div className="ml-auto">
            <button
              className="text-[#820000] text-sm"
              onClick={() => navigate("/news-and-events/view-all")}
            >
              View all
            </button>
          </div>
        </div>

        <div
          className="h-[244px] relative w-full"
          style={{
            backgroundImage: `url(${latestEvent?.image[0]})`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#3D0505] to-transparent mx-3">
            <div className="absolute bottom-0 left-0 p-3 text-white pt-5">
              <div className="items-center gap-2">
                <p className="font-semibold text-base text-[#FFFFFF]">
                  {latestEvent?.category.categoryName || "News"}
                </p>
                <div className="bg-[#820000] rounded-3xl my-2 w-44 h-7 flex gap-3 items-center px-4">
                  <DotIcon color="#FFFFFF" />
                  <p className="text-[#FFFFFF] font-normal text-[10px]">4 hours ago</p>
                </div>
              </div>
              <p
                className="text-sm text-[#FFFFFF] font-normal"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(latestEvent?.content),
                }}
              />
            </div>
          </div>
        </div>

        <div className="mx-3 my-4">
          {thisMonth.length > 0 ? (
            thisMonth.map((item: any) => {
              const timeAgo = formatDistanceToNow(new Date(item.createdAt), {
                addSuffix: true,
              });

              return (
                <div key={item._id}>
                  <div className="grid grid-cols-12 pb-4 mt-4">
                    <div className="col-span-9 flex items-center">
                      <div>
                        <div className="items-center gap-2">
                          <p className="font-semibold text-sm text-[#393939]">
                            {item.title}
                          </p>
                          <div className="bg-[#EAD1D1] rounded-3xl my-4 w-44 h-7 flex gap-3 items-center px-4">
                            <DotIcon color="black" />
                            <p className="text-[#393939] font-normal text-[10px]">{timeAgo}</p>
                          </div>
                          {/* <DotIcon color="black" />
                          <p className="text-black text-[10px]">{timeAgo}</p> */}
                        </div>
                        <p
                          className="text-xs text-[#5F5E5E] font-normal"
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(item.content),
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-span-3">
                      {item?.image && item?.image > 50 ? (
                        <img src={item?.image[0]} className="rounded-lg w-28 h-[118px]" alt="Event" />
                      )
                        :
                        (<img src={defaultImage} className="rounded-lg w-28 h-28" alt="Event" />)}
                      {/* <img src={item.image[0]} alt="Event" /> */}
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })
          ) : (
            <div className="flex items-center justify-center py-5 text-red-500">
              No Posts Available!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsAndEvents;
