import RightArrow from "../assets/icons/RightArrow";
import img from "../assets/images/Rectangle 70.png";
import NavBar from "../components/NavBar";
import img2 from "../assets/images/Vector 1.png";
import img3 from "../assets/images/A modern invoicing dashboard with clear UI elements.png";
import img4 from "../assets/images/Rectangle 89.png";
import img5 from "../assets/images/Rectangle 90.png";
import img6 from "../assets/images/Rectangle 31.png";
import img7 from "../assets/images/Component 138.png";
type Props = {};

const AboutUs = ({}: Props) => {
  const features = [
    {
      title: "Seamless Billing Experience",
      description:
        "We ensure an intuitive and efficient billing process, minimizing errors and maximizing accuracy.",
      image: img3, // Replace with actual image path
    },
    {
      title: "Smart Financial Insights",
      description:
        "Gain valuable insights with real-time analytics, helping you make informed business decisions.",
      image: img4, // Replace with actual image path
      className: "mt-24",
    },
    {
      title: "Secure & Reliable Transactions",
      description:
        "Your data and transactions are protected with industry-standard security measures for peace of mind.",
      image:img5, // Replace with actual image path
    },
  ];
  return (
    <div>
      <div
        className="   h-[720px]"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
        }}
      >
        <NavBar />
        <div className="text-center flex flex-col items-center justify-center h-[710px] ">
          <p className="text-[64px] font-semibold">
            <span className="font-bold text-[#800207]">Why Bill Bizz</span> Your
            Trusted <br /> Partner for Business Growth
          </p>
          <p className="text-[#5F5E5E] text-xl font-normal">
            We continuously evolve to bring you the latest <br /> advancements
            in billing and financial management.
          </p>
          <button className="h-20  my-10 font-semibold flex items-center text-2xl text-[#5F5E5E] justify-center bg-[#e7e7e7]/50 rounded-[36px] backdrop-blur-[1.60px]  px-10 gap-2 hover:bg-[#131313] hover:text-white hover:text-3xl">
            Contact Our Team{" "}
            <div className="rounded-full bg-[#D10200] border-transparent bg-white/10 border  backdrop-blur-lg h-10 w-10 flex items-center justify-center">
              <RightArrow />
            </div>
          </button>
        </div>
      </div>

      <div className="text-center pt-20">
        <p className="font-[Sequel Sans] font-bold text-[60px] leading-[100%] tracking-[0%] text-[#393939]">
          <span className="text-[#820000] ">Our</span> Mission{" "}
          <span className="text-[#820000]">& Our</span> Vision
        </p>

        <div className="grid grid-cols-12 gap-4 my-14 px-40 ">
          <div className="col-span-5 bg-[#2a333a] rounded-2xl py-10 text-white">
            <p className="text-4xl font-normal">
              Your business,{" "}
              <span className="text-[#ffdc64]">
                anytime, <br /> anywhere.
              </span>
            </p>
            <p className="text-2xl py-8 font-semibold">24/7 Accessibility</p>
            <p className="text-base px-28">
              Cloud-enabled solutions allow users to work <br /> anytime,
              anywhere, without boundaries.
            </p>
          </div>
          <div
            className="col-span-7 bg-cover bg-center relative rounded-2xl py-10 text-white px-5 flex items-center text-start "
            style={{
              backgroundImage: `linear-gradient(to bottom, #810707, #1B0202), url(${img2})`,
              backgroundSize: "fitted",
              backgroundBlendMode: "overlay",
            }}
          >
            <div>
              <p className="text-4xl mb-5">Our Mission & Vision</p>
              <p>
                To Help Customers Achieve Their Business Objectives By Providing
                Innovative, Best-in- Class Consulting, It Solutions And Services
              </p>
            </div>
          </div>
        </div>
      </div>

  <div className="h-[840px]"  style={{
          backgroundImage: `url(${img6})`,
          backgroundSize: "cover",
        }}>
        <div className="text-center">
          <p className="font-[Sequel Sans] font-semibold text-[60px] leading-[100%] tracking-[0%] text-[#820000]">
            Our Commitment
          </p>
          <p className="font-[Sequel Sans] font-[410] text-xl text-center text-[#636363] mt-5">
            Benefit from the flexibility and scalability of our cloud-based ERP
            solution, <br /> without the need for on-premise infrastructure.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-10 lg:px-20 py-10"  >
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative bg-[#f4eeee] shadow-lg rounded-2xl overflow-hidden p-6 ${feature.className} h-[500px]`}        >
            <div className="relative w-full h-48 flex items-center justify-center">
              <img
                src={feature.image}
                alt={feature.title}
               
                className="rounded-t-2xl object-cover layout-fill w-full mt-12"
              />
            </div>
            <div className="p-6 mt-6">
              <h3 className="text-4xl mt-2 font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
            <div className="absolute -bottom-3 left-0 right-0 flex justify-center">
              {/* <div className="w-6 h-6 bg-white rounded-full"></div> */}
            </div>
          </div>
        ))}
      </div>
  </div>

  <div>
  <div className="text-center">
          <p className="font-[Sequel Sans] font-semibold text-[60px] leading-[100%] tracking-[0%] text-[#820000]">
            Our <span className="text-[#3a3a3a]">Location</span>
          </p>
          <p className="font-[Sequel Sans] font-[410] text-xl text-center text-[#636363] mt-5">
            Benefit from the flexibility and scalability of our cloud-based ERP
            solution, <br /> without the need for on-premise infrastructure.
          </p>
        </div>
        <div className="my-14">
          <img src={img7} alt="" className="w-full" />
        </div>
  </div>


<div>

</div>


    </div>
  );
};

export default AboutUs;
