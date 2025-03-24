import DotIcon from "../../assets/icons/DotIcon";
import NewspaperIcon from "../../assets/icons/NewspaperIcon";
// import newImg from "../../assets/images/Frame 1618873045.png";
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
      <div className="lg:col-span-8 col-span-12 lg:mt-6 lg:p-6 p-3 overflow-x-auto">
        {latestNews ? (
          <div
            key={latestNews._id}
            className="h-[335px] sm:w-[1073px] w-[335px] sm:h-[535px]  overflow-x-auto relative overflow-hidden"    
            style={{
              backgroundImage: `url(${latestNews?.image?.[0] || defaultImage})`,
              backgroundSize: "cover",
            }}
          >

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

      <div className="lg:col-span-4 col-span-12 m-3 pe-4 pt-5">
  <div className="flex">
    <h3 className="font-bold text-xl text-black">Recent Events</h3>
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
    className="h-[244px] relative sm:h-[300px] md:h-[350px] w-[300px] lg:h-[300px] sm:w-[480px]"
    style={{
      backgroundImage: `url(${latestEvent?.image[0] || defaultImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#3D0505] to-transparent sm:h-20">
      <div className="absolute bottom-0 left-0 p-3 text-white sm:p-5">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-base sm:text-lg">
            {latestEvent?.title || 'N/A'}
          </p>

          <div className="bg-[#820000] rounded-3xl w-44 h-7 flex items-center gap-2 px-4 sm:w-52 sm:h-8">
            <DotIcon color="#FFFFFF" />
            <p className="text-white text-[10px] sm:text-xs">{latestEvent?.category?.categoryName || 'N/A'}</p>
          </div>
        </div>

        <p
          className="text-sm font-normal sm:text-base"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(latestEvent?.content),
          }}
        />
      </div>
    </div>
  </div>

  <div className="mx-3 my-4 min-h-[300px] max-h-[700px] overflow-y-auto">
    {thisMonth.length > 0 ? (
      thisMonth.map((item: any) => {
        // const timeAgo = formatDistanceToNow(new Date(item.createdAt), {
        //   addSuffix: true,
        // });

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
                      <p className="text-[#393939] font-normal text-[10px]">{item?.category?.categoryName}</p>
                    </div>
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
                {item?.image[0] && item?.image[0].length > 50 ? (
                  <img
                    src={item?.image[0]}
                    className="rounded-lg w-28 h-[118px]"
                    alt="Event"
                  />
                ) : (
                  <img
                    src={defaultImage}
                    className="rounded-lg w-28 h-28"
                    alt="Event"
                  />
                )}
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
