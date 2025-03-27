import { useEffect, useState } from "react";
import Calendar from "../../assets/icons/Calendar";
import Clock from "../../assets/icons/Clock";
// import img from "../../assets/images/Frame 1618873045.png";
// import Authors from "./Authors";
import Categories from "./Categories";
import useApi from "../../Hooks/useApi";
import { endpoints } from "../../Services/ApiEndpoints";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import ChevronLeft from "../../assets/icons/ChevronLeft";
// import InstaPost from "./InstaPost";
import noImage from '../../assets/images/noImage.png'

// const relatedPosts = [
//   {
//     id: 1,
//     title: "Automate Invoicing for Faster Payments",
//     category: "AI-Powered",
//     author: "Jesica Koli",
//     date: "02 December 2022",
//     readTime: "3 min. to read",
//     image: "https://placehold.co/413x262",
//     description: "Generate invoices, enable recurring billing, and automate payment reminders."
//   },
//   {
//     id: 2,
//     title: "Enhance Your Business with Smart Billing",
//     category: "Finance",
//     author: "Mark Smith",
//     date: "15 January 2023",
//     readTime: "4 min. to read",
//     image: "https://placehold.co/413x262",
//     description: "Improve efficiency with automated invoicing and financial tracking."
//   },
//   {
//     id: 3,
//     title: "Enhance Your Business with Smart Billing",
//     category: "Finance",
//     author: "Mark Smith",
//     date: "15 January 2023",
//     readTime: "4 min. to read",
//     image: "https://placehold.co/413x262",
//     description: "Improve efficiency with automated invoicing and financial tracking."
//   }
//   ,

//   {
//     id: 3,
//     title: "Enhance Your Business with Smart Billing",
//     category: "Finance",
//     author: "Mark Smith",
//     date: "15 January 2023",
//     readTime: "4 min. to read",
//     image: "https://placehold.co/413x262",
//     description: "Improve efficiency with automated invoicing and financial tracking."
//   }
//   ,
//   {
//     id: 4,
//     title: "Enhance Your Business with Smart Billing",
//     category: "Finance",
//     author: "Mark Smith",
//     date: "15 January 2023",
//     readTime: "4 min. to read",
//     image: "https://placehold.co/413x262",
//     description: "Improve efficiency with automated invoicing and financial tracking."
//   }
// ];

const ViewBlog = () => {
  const location = useLocation();
  const blogData = location.state?.blog || [];
  console.log('blogs',blogData);
  
  const [viewBlog, setViewBlog] = useState<any[]>([]);
  const { id } = useParams()
  const navigate = useNavigate()
  const { request: getABlog } = useApi('get', 3001)
  const [loading, setLoading] = useState<boolean>(true);

  const handleViewBlog = async () => {
    try {
      setLoading(true);
      const url = `${endpoints.GET_POSTS}/${id}`;
      const { response, error } = await getABlog(url);

      console.log('uu', url);
      console.log('rr', response);
      console.log('ee', error);

      if (response && !error) {
        console.log(response.data.data);

        // Ensure data is always an array
        setViewBlog(Array.isArray(response.data.data) ? response.data.data : [response.data.data]);
      } else {
        console.log(error.response.data.message);
      }
    } catch (err) {
      console.log('error occurred', err);
    }
    finally {
      setLoading(false); // Set loading to false after API call completes
    }
    
  };

  useEffect(() => {
    handleViewBlog();
  }, []);

  console.log('aa', viewBlog);

  const getTimeAgo = (timestamp: string | number | Date | null | undefined): string => {
    if (!timestamp) return "Invalid date";

    const now = new Date().getTime(); // Get current time in milliseconds
    const createdAt = new Date(timestamp).getTime(); // Convert timestamp to milliseconds

    if (isNaN(createdAt)) return "Invalid date"; // Ensure timestamp is valid

    const diffInMs = now - createdAt; // Difference in milliseconds
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60)); // Convert to hours

    return diffInHours > 0 ? `${diffInHours} Hours Ago` : "Just now";
  };

  return (
    <div className="grid grid-cols-12 gap-4 m-7">
      <div className="col-span-8">
        {loading
        ?<p>Loading...</p>:viewBlog?.map((item: any) => (
          <div>
            <div
              className="h-[350px] sm:h-[548px] rounded-3xl relative overflow-hidden"
              style={{ backgroundImage: `url(${item?.image[0] || noImage})`, backgroundSize: "cover", backgroundPosition:'center' }}
            >
              <div onClick={()=>navigate('/blog')} className="p-3 sm:p-5 rounded-full cursor-pointer w-10 sm:w-12 h-10 sm:h-12 border border-[#E7E7E7] flex items-center justify-center mt-4 sm:mt-6 mx-3 sm:mx-4">
                <ChevronLeft size={20} color="#E7E7E7"/>
              </div>
              <div className="bg-white/10 backdrop-blur-md w-full px-6 sm:px-8 py-6 sm:py-8 absolute inset-x-0 bottom-2 sm:bottom-4 border-x-0 border-y border-2 rounded-b-3xl border-white">
                <p className="text-white text-lg sm:text-[28px] font-semibold leading-tight sm:leading-10">
                  {item.title}
                </p>
                <p className="text-white/60 text-xs sm:text-sm font-semibold leading-tight sm:leading-10 mt-2"
                 dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item?.content),
                }}>
                 
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-white mt-3 sm:mt-4">
                  <img src={item?.createdBy?.userImage || noImage} loading="lazy" alt="" className="h-[18px] w-[18px] rounded-full" />
                  <span>{item?.createdBy?.userName}</span> |
                  <Calendar color="white" /> <span>
                    {new Date(item?.updatedAt).toLocaleDateString("en-US", {
                      month: "2-digit",
                      day: "2-digit",
                      year: "numeric",
                    })}</span> |
                  <Clock color="white" /> <span>{getTimeAgo(item?.updatedAt)}</span>
                  <div className="ml-auto flex gap-3 sm:gap-5">
                    <div className="h-[30px] sm:h-[35px] px-3 sm:px-4 bg-white/0 rounded-[20px] border border-white/50 backdrop-blur-[42.60px] flex items-center text-white text-xs">
                      {item?.category?.categoryName || 'N/A'}
                    </div>
                    {/* <div className="h-[35px] px-4 bg-white/0 rounded-[20px] border border-white/50 backdrop-blur-[42.60px] flex items-center text-white text-xs">
                      CRM
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[#666666] text-sm sm:text-[15px] font-normal leading-snug mt-3 sm:mt-4"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(item?.content),
            }}>
             
            </p>
          </div>
        ))}

        <div>
          <div className="relative justify-start my-5">
            <span className="text-[#CC1111] text-[21px] font-semibold font-['Inter'] capitalize leading-[29.40px]">
              Related
            </span>
            <span className="text-[#222222] text-[21px] font-semibold font-['Inter'] ms-1 capitalize leading-[29.40px]">
              Post
            </span>
          </div>
          <div className="overflow-x-auto flex flex-col sm:flex-row gap-4">
            <div className="min-w-full flex gap-4">
              {blogData.map((post:any) => (
                <div key={post._id} className="w-full sm:w-[413px] h-auto sm:h-[548px] bg-white rounded-[5px] p-3 sm:p-5 flex-shrink-0">
                  <img className="w-full h-auto sm:h-[262px] rounded-[5px]" src={post.image[0] || noImage} loading="lazy" alt={post.category?.categoryName} />
                  <div className="h-5 px-2 py-1 bg-[#f5cf4a] rounded-[3px] inline-flex justify-center items-center gap-2.5 mt-2">
                    <div className="relative justify-start text-[#666666] text-xs font-normal capitalize leading-3">
                      {post.category?.categoryName}
                    </div>
                  </div>
                  <p className="text-[#222222] text-[27px] font-semibold capitalize leading-[37.80px] mt-2">
                  {post.title}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[#777777] mt-4">
                    <img src={post?.createdBy?.userImage || noImage} loading="lazy" alt="" className="h-[18px] w-[18px] rounded-full" />
                    <span>{post?.createdBy?.userName}</span> |
                    <Calendar /> <span>{new Date(post?.updatedAt).toLocaleDateString("en-US", {
                      month: "2-digit",
                      day: "2-digit",
                      year: "numeric",
                    })}</span> |
                    <Clock /> <span>{getTimeAgo(post?.updatedAt)}</span>
                  </div>
                  <p className="text-[#555555] text-[15px] leading-snug mt-2"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post?.content),
                  }}
                  >
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>



      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 flex flex-col px-1 sm:px-2">
        <Categories />
        
      </div>
    </div>
  );
};

export default ViewBlog;
