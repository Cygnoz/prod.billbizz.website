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
     <div  style={{ backgroundImage: `url(${bgimage})`,backgroundSize:"cover" }}>
     <div className=" py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-left">
          <h1
  className="text-5xl font-sans font-semibold leading-[56.64px] text-[#393939] ms-10  decoration-skip-ink decoration-[#820000]">
  Transforming Your Business <br /> with
  <span className="text-[#820000]">Billbizz</span>
</h1>

          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <p className="text-gray-700">
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

      <div
        className="flex justify-center items-center mt-8 pb-[200px]"
       
      >
        <div className=" w-full  p-10">
          <div className="flex justify-center items-center h-[800px] md:h-96">
            <img
              src={images[currentSlide]}
              alt={`Slide ${currentSlide}`}
              className="w-[1000px] h-[600px]  mt-10 absolute z-40"
            />
          </div>
          <button
            onClick={prevSlide}
            className="absolute -mt-[250px] left-[100px]  rounded-full p-3  focus:outline-none"
          >
            <img src={litemnode} alt="" className="w-[42px] h-[63px]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute   -mt-[250px] right-[100px]  rounded-full p-3  focus:outline-none "
          >
            <img src={darkmodebtn} alt="" className="w-[41px] h-[61px]" />
          </button>

          {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div> */}
        </div>
      </div>
     </div>
    </>
  );
}

export default SliderSection;
