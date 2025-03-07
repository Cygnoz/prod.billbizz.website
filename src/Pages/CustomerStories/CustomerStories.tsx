import img from "../../assets/images/Component 9.png";
import img1 from "../../assets/images/happy customer browsing phone and smiling.png";
import img2 from "../../assets/images/Frame.png";
import img3 from "../../assets/images/Frame 1618873203.png";
import img4 from "../../assets/images/f56e79d8cf761b8b2ba6e1225f28cd7f 4.png";
import img5 from "../../assets/images/Image (8).png";
import img6 from "../../assets/images/Star 1.png";

type Props = {};

function CustomerStories({}: Props) {
  return (
    <div className="mt-5 ">
      {/* Profile Images Section */}
      <div className="flex items-center justify-center">
        <div className="flex items-center border rounded-full p-2 bg-white">
          <div className="flex -space-x-4 items-center">
            <img
              src={img}
              alt=""
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src={img}
              alt=""
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src={img}
              alt=""
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src={img}
              alt=""
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <div className="w-10 h-10 flex items-center justify-center bg-blue-200 text-black text-sm font-medium rounded-full border-2 border-white">
              +50
            </div>
          </div>
          <p className="ml-3">Loved by 50+ customers</p>
        </div>
      </div>

      {/* Heading Section */}
      <div className="relative text-center justify-start items-center mt-5">
        <span className="text-[#222222] text-5xl font-['Sequel_Sans']">
          Empowering businesses with
        </span>
        <span className="text-[#820000] text-5xl font-['Sequel_Sans']">
          {" "}
          50+ satisfied{" "}
        </span>
        <span className="text-[#222222] text-5xl font-['Sequel_Sans']">
          customers!
        </span>
      </div>

      {/* Customer Stories Section */}
      <div className="flex items-center justify-center my-5">
        <div
          className="relative h-[452px] w-[80%] flex items-center mx-auto"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Left Floating Card */}
          <div className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 w-[172px] h-[176px] bg-white shadow-2xl rounded-xl p-4">
            <img src={img2} alt="" />
            <div className="text-[#222222] text-base font-bold leading-normal">
              Free Customer Trial
            </div>
            <div className="text-black/60 text-[8px] leading-3">
              Lorem ipsum dolor sit Lorem ipsum dolor sit ametLorem ipsum dolor
              sit Lorem ipsum dolor sit ametA
            </div>
          </div>

          {/* Right Floating Card */}
          <div className="w-[172px] h-[176px] bg-white shadow-2xl rounded-xl p-4 ml-auto mr-[-50px]">
            <div className="h-[11px] relative justify-start text-black/60 text-[8px] font-medium font-['Inter'] leading-3">
              Customer
            </div>
            <div className="h-[47px] relative justify-start text-[#222222] text-base font-bold font-['Inter'] leading-normal">
              Fifty Plus Happy
              <br />
              Customers
            </div>
            <div className="flex -space-x-4 items-center">
              <img
                src={img}
                alt=""
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src={img}
                alt=""
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src={img}
                alt=""
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <div className="w-10 h-10 flex items-center justify-center bg-blue-200 text-black text-sm font-medium rounded-full border-2 border-white">
                +50
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book a Demo Button */}
      <div className="flex items-center justify-center">
        <button
          data-property1="medium"
          className="h-[49px] px-12 py-4 bg-gradient-to-l from-[#cc1111] to-[#8f0100] rounded-lg inline-flex justify-center items-center gap-2 cursor-pointer text-[#fefdf9] text-sm font-bold"
        >
          Book a Demo
        </button>
      </div>
      <div className="flex items-center justify-center">
        <div
          className="w-[1363px] h-[165px] p-2.5 inline-flex flex-col justify-start items-start gap-2.5"
          style={{
            backgroundImage: `url(${img3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-[145px] inline-flex justify-center items-center gap-[184px] ">
            <div className="h-[90px] inline-flex flex-col justify-start items-start gap-2">
              <div className="relative justify-start text-[#212121] text-[42px] font-['Sequel_Sans'] leading-[50.40px]">
                What we’re doing
              </div>
              <div className="w-[581px] relative justify-start text-[#212121] text-xl font-['Sequel_Sans'] leading-loose">
                Streamlining finances, simplifying business operations.
              </div>
            </div>
            <div className="h-[94px] flex justify-start items-start gap-12">
              <div className="w-[174px] h-[94px] relative">
                <div className="relative justify-start text-[#212121] text-[32px] font-['Sequel_Sans'] leading-[38.40px]">
                  900+
                </div>
                <div className="w-[174px] relative justify-start text-[#212121] text-base font-['Sequel_Sans'] leading-tight">
                  Ongoing
                  <br />
                  Management projects
                </div>
              </div>
              <div className="w-[147px] h-[94px] relative">
                <div className="relative justify-start text-[#212121] text-[32px] font-['Sequel_Sans'] leading-[38.40px]">
                  50
                </div>
                <div className="relative justify-start text-[#212121] text-base font-['Sequel_Sans'] leading-tight">
                  Efficient
                  <br />
                  Bill Bizz Employees
                </div>
              </div>
              <div className="w-32 h-[94px] relative">
                <div className="relative justify-start text-[#212121] text-[32px] font-['Sequel_Sans'] leading-[38.40px]">
                  20
                </div>
                <div className="w-32 relative justify-start text-[#212121] text-base font-['Sequel_Sans'] leading-tight">
                  Projects under Management
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        {/* Left Image */}
        <div className="bg-[black] w-56 flex-shrink-0">
          <img src={img4} alt="" className="w-full" />
        </div>

        {/* Center Image */}
        <div className="flex items-center -ms-10 flex-shrink-0">
          <img src={img5} alt="" />
        </div>

        {/* Text Content */}
        <div className="flex items-center mx-4 ">
          <div className="h-[217px] flex flex-col justify-center items-start gap-4">
            {/* Name */}
            <div className="w-full text-[#202020] text-[64px] font-['Sequel_Sans'] leading-[74px]">
              Daisy Welch
            </div>

            {/* Role */}
            <div className="text-[#202020] text-base font-normal font-['Sequel_Sans']">
              Chief Branding Producer
            </div>

            {/* Stars */}
            <div className="flex items-center -mt-5">
              <img src={img6} alt="" />
              <img src={img6} alt="" />
              <img src={img6} alt="" />
            </div>

            {/* Testimonial Text */}
            <div className=" w-[50%] max-w-full">
              <p className="text-[#202020] text-xl overflow-hidden break-words">
                Iusto quia perspiciatis inventore tempora. Velit vitae tempora
                et laborum id soluta est ut laboriosam. Eveniet possimus autem
                ratione aliquid in sunt tempora. Amet rerum suscipit distinctio
                voluptas. In quis voluptas necessitatibus et aut dolor ut quod.
                Sapiente et adipisci tenetur voluptatibus qui.
              </p>
            </div>
          </div>
        </div>
       
      </div>
      
    </div>
  );
}

export default CustomerStories;
