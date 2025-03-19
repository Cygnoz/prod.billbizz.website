
import NavBar from "../components/NavBar";
import img2 from "../assets/images/Frame 1618873307.png";
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
       <NavBar />
       <div className="flex items-center justify-center h-[550px] px-4">
      <div className="text-center max-w-5xl">
        <p className="text-4xl sm:text-5xl md:text-6xl font-semibold">
          <span className="font-bold text-[#800207]">Why BillBizz</span> Your
          Trusted <br className="hidden md:block" /> Partner for Business Growth
        </p>

        <p className="text-[#5F5E5E] text-lg sm:text-xl mt-6 leading-relaxed">
          BillBizz is a next-generation billing and invoicing software designed to help businesses automate financial
          transactions, streamline operations, and improve cash flow management. Whether you're a small startup
          or a large enterprise, BillBizz provides a seamless, cloud-based solution to handle invoicing, payments,
          and financial reporting with ease.
        </p>
      </div>
    </div>


    <div className="mx-4 sm:mx-12 md:mx-24 lg:mx-36 ">
          <img src={img2} alt="" className="w-full h-auto max-h-[460px] object-cover" />
        </div>
     
  <div className="lg:h-[840px] lg:mt-16"  style={{
          backgroundImage: `url(${img6})`,
          backgroundSize: "cover",
        }}>
        <div className="text-center px-4 py-4 mt-8">
      <p className="font-[Sequel Sans] font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight text-[#820000]">
        Our Commitment
      </p>
      <p className="font-[Sequel Sans] font-[410] text-base sm:text-lg md:text-xl text-[#636363] mt-5">
        Benefit from the flexibility and scalability of our cloud-based ERP
        solution, <br /> without the need for on-premise infrastructure.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-3 px-4 md:px-10 lg:px-20 py-10">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`relative bg-[#f4eeee] shadow-lg rounded-2xl overflow-hidden lg:p-6 ${feature.className} lg:h-[500px]`}
        >
          <div className="relative w-full lg:h-48 flex items-center justify-center">
            <img
              src={feature.image}
              alt={feature.title}
              className="rounded-t-2xl object-cover w-full h-full"
            />
          </div>

          <div className="p-6 mt-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>

          <div className="absolute -bottom-3 left-0 right-0 flex justify-center">
            {/* Optional decorative circle */}
            {/* <div className="w-6 h-6 bg-white rounded-full"></div> */}
          </div>
        </div>
      ))}
    </div>
  </div>

  <div>
  <div className="text-center">
          <p className="font-[Sequel Sans] font-semibold text-[60px] leading-[100%] tracking-[0%] text-[#820000]">
            Our <span className="text-[##393939]">Location</span>
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
