import img1 from "../../assets/images/Rectangle 2961.png";
import img from "../../assets/images/Ellipse 322.png";
import img2 from "../../assets/images/Rectangle 2962.png";
import Calendar from "../../assets/icons/Calendar";
import Clock from "../../assets/icons/Clock";
import RecentlyUploaded from "./RecentlyUploaded";
import Authors from "./Authors";
import Categories from "./Categories";
import InstaPost from "./InstaPost";
import { useNavigate } from "react-router-dom";
type Props = {};

function Blog({}: Props) {
  const navigate = useNavigate();
  return (
    <div className="mx-10 my-9 grid grid-cols-12">
      <div className="col-span-8">
        <div>
          <h2 className="text-[21px] font-semibold capitalize">
            <span className="text-[#cc1111]">Featured</span>
            <span className="text-[#222222]"> This month</span>
          </h2>
          <div className="grid grid-cols-2 gap-6 mt-5">
            {[
              {
                category: "CRM",
                title: "The importance of automating repetitive tasks",
                image: img1,
                author: "Jenny kiaa",
                date: "02 December 2022",
                time: "3 Min. to Read",
                desc: "Expense tracking isn’t just about recording numbers; it’s about making informed financial decisions.",
              },
              {
                category: "Expense Track",
                title: "Why Expense Tracking is Crucial for Business Success",
                image: img2,
                author: "Jenny kiaa",
                date: "02 December 2022",
                time: "3 Min. to Read",
                desc: "Expense tracking isn’t just about recording numbers; it’s about making informed financial decisions.",
              },
            ].map((post, index) => (
              <div key={index} onClick={() => navigate("/blog/view")}>
                <span
                  className={`h-5 px-2 py-1 rounded-[3px] inline-flex text-xs font-normal capitalize leading-3 ${
                    index === 0
                      ? "bg-[#f5cf4a] text-[#666666]"
                      : "bg-gradient-to-l from-[#cc1111] to-[#8f0100] text-white"
                  }`}
                >
                  {post.category}
                </span>
                <p className="w-[401px] text-[26px] font-semibold capitalize leading-9 my-4 text-[#222222]">
                  {post.title}
                </p>
                <img
                  src={post.image}
                  alt=""
                  className="w-[401px] h-[229px] rounded-[7px]"
                />
                <div className="flex items-center gap-2 text-xs text-[#777777] mt-4">
                  <img
                    src={img}
                    alt=""
                    className="h-[18px] w-[18px] rounded-full"
                  />
                  <span>{post.author}</span> |
                  <Calendar /> <span>{post.date}</span> |
                  <Clock /> <span>{post.time}</span>
                </div>
                <p className="w-[401px] text-[15px] text-[#555555] leading-snug mt-4">
                  {post.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-4 flex">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#620000] h-[217.5px] w-[3px] rounded-xl"></div>
          <div className="w-px h-44 bg-[#c4c4c4] rounded-[3px]" />
        </div>
        <div className="ps-24">
          <h3 className="text-[21px] font-semibold capitalize mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#EE3FD8] to-[#FFDD65]">
              popular
            </span>
            <span className="text-[#222222]"> Post</span>
          </h3>
          <span className="h-5 px-2 py-1 bg-[#f5cf4a] rounded-[3px] text-xs font-normal capitalize leading-3 text-[#666666]">
            AI- Powered
          </span>
          <p className="text-[17px] font-medium capitalize leading-relaxed my-3 text-[#222222]">
            The Role of AI in Modern Business Billing
          </p>
          <p className="text-[15px] text-[#555555] leading-snug">
            AI enhances billing with smart invoicing, fraud detection, and
            forecasting in Bill Biz
          </p>
          <div className="flex items-center gap-2 text-xs text-[#777777] mt-4">
            <img src={img} alt="" className="h-[18px] w-[18px] rounded-full" />
            <span>Jenny kiaa</span> |
            <Calendar /> <span>02 December 2022</span> |
            <Clock /> <span>3 Min. to Read</span>
          </div>
        </div>
      </div>
      <div className="col-span-12 bg-[#f6f6f5] -mx-10 -mb-10 mt-8 px-6 py-10">
        <div>
          <h3 className="text-[21px] font-semibold capitalize mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#EE3FD8] to-[#FFDD65]">
              Recently
            </span>
            <span className="text-[#222222]"> Posted</span>
          </h3>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8">
              {" "}
              <RecentlyUploaded />
            </div>
            <div className="col-span-4 w-full flex items-center justify-center">
              <div className="items-center text-start">
                <Authors />

                <div className="">
                  <div className="w-[361px] h-[332px] relative my-4">
                    <div className="w-[361px] h-[332px] left-0 top-0 absolute bg-[#d9d9d9]" />
                    <div className="w-[361px] h-[332px] left-0 top-0 absolute mix-blend-multiply bg-[#750000]" />
                    <div className="w-4 h-[13.28px] left-[335px] top-[11.07px] absolute text-white text-xs font-medium font-['Inter'] capitalize leading-3">
                      Ad
                    </div>
                    <div className="w-[222px] h-[59.76px] left-[20px] top-[60.87px] absolute text-white text-[19px] font-semibold font-['Inter'] capitalize leading-relaxed">
                      Bill Bizz – Smarter Billing, Faster Payments
                    </div>
                    <div className="w-[284px] h-[44.27px] left-[20px] top-[131.69px] absolute text-white text-sm font-normal font-['Inter'] leading-tight">
                      Automate invoicing, track expenses, and manage finances
                      seamlessly
                    </div>
                    <div className="w-[104px] h-[45.37px] left-[20px] top-[215px] absolute">
                      <div className="w-[104px] h-[45.37px] left-0 top-0 absolute bg-white rounded-[5px]" />
                      <div className="w-[54px] h-[16.60px] left-[26px] top-[14.39px] absolute text-[#021514] text-[15px] font-normal font-['Inter'] leading-[15px]">
                        Visit Us
                      </div>
                    </div>
                  </div>
                </div>
                <Categories />
                <InstaPost/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
