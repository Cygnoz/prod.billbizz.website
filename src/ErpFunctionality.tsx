// import GridCards from "./components/GridCards";
import cardimg1 from "./assets/images/col1.jpg";
import cardimg3 from "./assets/images/col2.jpg";
import card3img from "./assets/images/image.png";
import card5img from "./assets/images/col22.jpg";
import card2img from "./assets/images/col12.jpg";
import card6img from "./assets/images/col33.jpg";

function ErpFunctionality() {
  return (
    <div>
 

      <div>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl text-[#CC1111] font-sans font-bold mb-4">
            Exploring ERP Functionality
          </h1>
          <p className="text-lg font-sans text-[#636363] mt-2 text-center ">
            Customization options allow businesses to tailor ERP systems to
            their <br />
            unique workflows and industry-specific requirements.
          </p>
        </div>
      </div>

      {/* cards */}
      <div className="flex justify-center items-center py-8">
        <div className="">
          <div className="flex gap-4">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <div className="">
                <img
                  src={cardimg1}
                  className="cursor-pointer h-[331px] w-[402px] transform transition duration-300 ease-in-out hover:scale-105"
                  alt="Customer Management"
                />
              </div>
              <div className="">
                <img
                  src={cardimg3}
                  className="cursor-pointer h-[232px] w-[402px] transform transition duration-300 ease-in-out hover:scale-105"
                  alt="Financial Accounting"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-2">
              <div className="">
                <img
                  src={card2img}
                  className="cursor-pointer h-[247px] w-[402px] transform transition duration-300 ease-in-out hover:scale-105"
                  alt="Recurring Billing"
                />
              </div>
              <div className="">
                <img
                  src={card5img}
                  className="cursor-pointer mt-3 h-[313px] w-[402px] transform transition duration-300 ease-in-out hover:scale-105"
                  alt="Ecommerce Integration"
                />
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-5">
              <div className="">
                <img
                  src={card3img}
                  className="cursor-pointer h-[158px] w-[479px] transform transition duration-300 ease-in-out hover:scale-105"
                  alt="Payroll Management"
                />
              </div>
              <div className="">
                <img
                  src={card6img}
                  className="cursor-pointer h-[399px] w-[479px] transform transition duration-300 ease-in-out hover:scale-105"
                  alt="Inventory Management"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErpFunctionality;
