import { useState } from "react";
import whitemode from "../assets/images/whitemode.png";
import darkmode from "../assets/images/darkmode.png";
import bgimage from "../assets/images/coroselbg.png";
import litemnode from "../assets/icons/litemode.png";
import darkmodebtn from "../assets/icons/drkmodebtn.png";

function SliderSection() {
  const images = [whitemode, darkmode];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1 < images.length ? prev + 1 : prev)); // Prevent looping to the first slide
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 >= 0 ? prev - 1 : prev)); // Allow cycling backward
  };
  return (
    <>
   <div
  style={{ backgroundImage: `url(${bgimage})`, backgroundSize: "cover" }}
  className="h-auto min-h-screen"
>
  <div className="py-16">
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      {/* Left Section: Heading */}
      <div className="md:w-1/2 text-left">
        <h1
          className="text-4xl md:text-5xl font-sans font-semibold leading-[40px] md:leading-[56.64px] text-[#393939] ms-10 decoration-skip-ink decoration-[#820000]"
        >
          Transforming Your Business <br /> with
          <span className="text-[#820000]"> Billbizz</span>
        </h1>
      </div>

      {/* Right Section: Paragraph */}
      <div className="md:w-1/2 mt-6 md:mt-0 px-4">
        <p className="text-gray-700 text-base md:text-lg">
          Embarking on the ERP journey, whether it's your first foray or a
          strategic migration to the cloud, presents a pivotal opportunity
          to elevate your business operations. A well-chosen ERP system can
          serve as a cornerstone, providing a unified, modular platform that
          empowers you to streamline processes, optimize resources, and
          drive innovation.
        </p>
      </div>
    </div>
  </div>

  {/* Image Section with Navigation */}
  <div className="flex justify-center items-center mt-8 pb-[200px] relative">
  <div className="w-full px-4 md:px-10">
  
  {/* Web View: Image with Absolute Buttons */}
  <div className="hidden md:flex justify-center items-center h-[400px] md:h-96 relative mt-16">
    <img
      src={images[currentSlide]}
      alt={`Slide ${currentSlide}`}
      className="w-full max-w-[1000px] h-auto md:h-[600px] mt-10 absolute z-40"
    />

    {/* Light Mode Button (Web) */}
    <button
      onClick={prevSlide}
      className="absolute top-1/2 transform -translate-y-1/2 left-4 md:left-[100px] rounded-full p-3 focus:outline-none"
    >
      <img src={litemnode} alt="" className="w-[30px] md:w-[42px] h-[45px] md:h-[63px]" />
    </button>

    {/* Dark Mode Button (Web) */}
    <button
      onClick={nextSlide}
      className="absolute top-1/2 transform -translate-y-1/2 right-4 md:right-[100px] rounded-full p-3 focus:outline-none"
    >
      <img src={darkmodebtn} alt="" className="w-[30px] md:w-[41px] h-[45px] md:h-[61px]" />
    </button>
  </div>

  {/* Mobile View: One Row with Buttons + Image */}
  <div className="flex md:hidden items-center justify-between gap-4 py-4">
    
    {/* Light Mode Button (Mobile) */}
    <button
      onClick={prevSlide}
      className="rounded-full p-3 focus:outline-none"
    >
      <img src={litemnode} alt="" className="w-[30px] h-[45px]" />
    </button>

    {/* Center Image (Mobile) */}
    <div className="flex-1 flex justify-center">
      <img
        src={images[currentSlide]}
        alt={`Slide ${currentSlide}`}
        className="w-[200px] h-auto "
      />
    </div>

    {/* Dark Mode Button (Mobile) */}
    <button
      onClick={nextSlide}
      className="rounded-full p-3 focus:outline-none"
    >
      <img src={darkmodebtn} alt="" className="w-[30px] h-[45px]" />
    </button>
  </div>
</div>

  </div>
</div>

    </>
  );
}

export default SliderSection;
