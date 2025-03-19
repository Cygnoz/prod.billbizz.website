// import GridCards from "./components/GridCards";
import cardimg1 from "../assets/images/Frame 427319141.png";
import cardimg3 from "../assets/images/col2.jpg";
import card3img from "../assets/images/image.png";
import card5img from "../assets/images/col22.jpg";
import card2img from "../assets/images/col12.jpg";
import card6img from "../assets/images/col33.jpg";

function ErpFunctionality() {
  return (
   <div>
  <div>
    <div className="flex flex-col items-center">
      <h1 className="sm:text-6xl md:text-5xl text-[#CC1111] font-sans font-bold mb-4">
        Exploring ERP Functionality
      </h1>
      <p className="text-base md:text-lg font-sans text-[#636363] mt-2 text-center">
        Customization options allow businesses to tailor ERP systems to
        their <br className="hidden md:block" />
        unique workflows and industry-specific requirements.
      </p>
    </div>
  </div>

  {/* Cards Section */}
  <div className="flex justify-center items-center py-8 px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
      
      {/* Column 1 */}
      <div className="flex flex-col gap-4">
        <div>
          <img
            src={cardimg1}
            className="cursor-pointer h-auto w-full md:h-[331px] md:w-[402px] transform transition duration-300 ease-in-out hover:scale-105"
            alt="Customer Management"
          />
        </div>
        <div>
          <img
            src={cardimg3}
            className="cursor-pointer h-auto w-full md:h-[232px] md:w-[402px] transform transition duration-300 ease-in-out hover:scale-105"
            alt="Financial Accounting"
          />
        </div>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-4">
        <div>
          <img
            src={card2img}
            className="cursor-pointer h-auto w-full md:h-[247px] md:w-[402px] transform transition duration-300 ease-in-out hover:scale-105"
            alt="Recurring Billing"
          />
        </div>
        <div>
          <img
            src={card5img}
            className="cursor-pointer h-auto w-full md:h-[313px] md:w-[402px] transform transition duration-300 ease-in-out hover:scale-105"
            alt="Ecommerce Integration"
          />
        </div>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col gap-4">
        <div>
          <img
            src={card3img}
            className="cursor-pointer h-auto w-full md:h-[158px] md:w-[479px] transform transition duration-300 ease-in-out hover:scale-105"
            alt="Payroll Management"
          />
        </div>
        <div>
          <img
            src={card6img}
            className="cursor-pointer h-auto w-full md:h-[399px] md:w-[479px] transform transition duration-300 ease-in-out hover:scale-105"
            alt="Inventory Management"
          />
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default ErpFunctionality;
