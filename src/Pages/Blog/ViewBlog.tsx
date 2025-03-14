import { useEffect, useState } from "react";
import Calendar from "../../assets/icons/Calendar";
import Clock from "../../assets/icons/Clock";
import img from "../../assets/images/Frame 1618873045.png";
// import Authors from "./Authors";
import Categories from "./Categories";
import useApi from "../../Hooks/useApi";
import { endpoints } from "../../Services/ApiEndpoints";
// import InstaPost from "./InstaPost";

const relatedPosts = [
  {
    id: 1,
    title: "Automate Invoicing for Faster Payments",
    category: "AI-Powered",
    author: "Jesica Koli",
    date: "02 December 2022",
    readTime: "3 min. to read",
    image: "https://placehold.co/413x262",
    description: "Generate invoices, enable recurring billing, and automate payment reminders."
  },
  {
    id: 2,
    title: "Enhance Your Business with Smart Billing",
    category: "Finance",
    author: "Mark Smith",
    date: "15 January 2023",
    readTime: "4 min. to read",
    image: "https://placehold.co/413x262",
    description: "Improve efficiency with automated invoicing and financial tracking."
  },
  {
    id: 3,
    title: "Enhance Your Business with Smart Billing",
    category: "Finance",
    author: "Mark Smith",
    date: "15 January 2023",
    readTime: "4 min. to read",
    image: "https://placehold.co/413x262",
    description: "Improve efficiency with automated invoicing and financial tracking."
  }
  ,
  
  {
    id: 3,
    title: "Enhance Your Business with Smart Billing",
    category: "Finance",
    author: "Mark Smith",
    date: "15 January 2023",
    readTime: "4 min. to read",
    image: "https://placehold.co/413x262",
    description: "Improve efficiency with automated invoicing and financial tracking."
  }
  ,
  {
    id: 4,
    title: "Enhance Your Business with Smart Billing",
    category: "Finance",
    author: "Mark Smith",
    date: "15 January 2023",
    readTime: "4 min. to read",
    image: "https://placehold.co/413x262",
    description: "Improve efficiency with automated invoicing and financial tracking."
  }
];

const ViewBlog = () => {

  const [viewBlog, setViewBlog]=useState([])
  const {request: getABlog}=useApi('get',3001)

  const handleViewBlog = async()=>{
    try{
      const url = `${endpoints.GET_POSTS}`
      const {response, error}=await getABlog(url)
      console.log('uu',url);
      console.log('rr',response);
      console.log('ee',error);
      if(response && !error){
        console.log(response.data);
        setViewBlog(response.data)
      }
      else{
        console.log(error.response.data.message);
        
      }
    }
    catch(err){
      console.log('error occured',err);
      
    }
  }
  useEffect(()=>{
    handleViewBlog()
  },[])
  console.log('aa',viewBlog);
  
  return (
    <div className="grid grid-cols-12 gap-4 m-7">
      <div className="col-span-8">
        <div
          className="h-[548px] rounded-3xl relative overflow-hidden"
          style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
        >
          <div className="bg-white/10 backdrop-blur-md w-full px-8 py-8 absolute inset-x-0 bottom-0 border-t border-2 rounded-b-3xl border-white">
            <p className="text-white text-[28px] font-semibold leading-10">
              Small Businesses Need a Smart Billing System
            </p>
            <p className="text-white/60 text-sm font-semibold leading-10">
              This post highlights why a modern billing system like Bill Bizz can improve financial management.
            </p>
            <div className="flex items-center gap-2 text-xs text-white mt-4">
              <img src={img} alt="" className="h-[18px] w-[18px] rounded-full" />
              <span>Jenny Kiaa</span> |
              <Calendar color="white" /> <span>02 December 2022</span> |
              <Clock color="white" /> <span>3 min. to read</span>
              <div className="ml-auto flex gap-5">
                <div className="h-[35px] px-4 bg-white/0 rounded-[20px] border border-white/50 backdrop-blur-[42.60px] flex items-center text-white text-xs">
                  Customer Management
                </div>
                <div className="h-[35px] px-4 bg-white/0 rounded-[20px] border border-white/50 backdrop-blur-[42.60px] flex items-center text-white text-xs">
                  CRM
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[#666666] text-[15px] font-normal leading-snug mt-4">
          Small businesses often struggle with managing invoices, tracking expenses, and ensuring timely payments. A smart billing system like Bill Bizz simplifies these processes by automating invoicing, reducing errors, and providing real-time financial insights...
        </p>
        <div className="relative justify-start my-5">
          <span className="text-[#CC1111] text-[21px] font-semibold font-['Inter'] capitalize leading-[29.40px]">
            Related
          </span>
          <span className="text-[#222222] text-[21px] font-semibold font-['Inter'] ms-1 capitalize leading-[29.40px]">
             Post
          </span>
        </div>
        <div className="overflow-x-auto scrollbar-hidden">
        <div className="min-w-full flex gap-4">
    {relatedPosts.map((post) => (
      <div key={post.id} className="w-[413px] h-[548px] bg-white rounded-[5px] p-5 flex-shrink-0">
        <img className="h-[262px] rounded-[5px]" src={post.image} alt={post.category} />
        <div className="h-5 px-2 py-1 bg-[#f5cf4a] rounded-[3px] inline-flex justify-center items-center gap-2.5">
          <div className="relative justify-start text-[#666666] text-xs font-normal capitalize leading-3">
            {post.category}
          </div>
        </div>
        <p className="text-[#222222] text-[27px] font-semibold capitalize leading-[37.80px] mt-2">
          {post.title}
        </p>
        <div className="flex items-center gap-2 text-xs text-[#777777] mt-4">
          <img src={img} alt="" className="h-[18px] w-[18px] rounded-full" />
          <span>{post.author}</span> |
          <Calendar /> <span>{post.date}</span> |
          <Clock /> <span>{post.readTime}</span>
        </div>
        <p className="text-[#555555] text-[15px] leading-snug mt-2">
          {post.description}
        </p>
      </div>
    ))}
  </div>
</div>


      </div>
      <div className="col-span-4 flex flex-col px-6 ms-6">
        <Categories />
        {/* <InstaPost /> */}
        {/* <div className="mt-5">
        <div className="flex items-center justify-between my-4">
       
        <div className="flex items-center w-full max-w-sm rounded-[20px] border px-4 py-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none bg-transparent pl-2"
          />
<SearchIcon/>
        </div>
      </div>  
          <Authors />
        </div> */}
      </div>
    </div>
  );
};

export default ViewBlog;
