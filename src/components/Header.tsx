import  { useState } from "react";
import headerbg from "../assets/images/headerbg.png";
import billbizz from "../assets/icons/Billbizz-Logo_White 1.png";
import arrow from "../assets/icons/arrow-right.png";
import bannerimg from "../assets/images/bannerimg.png";
import ReusableModal from "../commoncomponents/SignUpModal";

function Header() {
  const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility

  const handleOpenModal = () => {
    setModalOpen(true); // Open modal
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close modal
  };

  const handleAction = () => {
    console.log("Action button clicked!");
    handleCloseModal(); // Close the modal after the action
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url(${headerbg})`, backgroundSize: "cover" }}
        className="h-[782px]"
      >
        <nav className="bg-[#5D5D5D1A] bg-opacity-60 shadow m-7">
          <div className="px-4 py-3 flex justify-between items-center">
            <a className="text-xl font-semibold text-gray-900">
              <img src={billbizz} alt="Logo" className="w-[38px] h-[38px]" />
            </a>

            <div className="flex space-x-8 mx-auto">
              <a  className="text-gray-900 hover:scale-125 transition-transform duration-200">
                Product
              </a>
              <a  className="text-gray-900 hover:scale-125 transition-transform duration-200">
                Overview
              </a>
              <a  className="text-gray-900 hover:scale-125 transition-transform duration-200">
                Pricing
              </a>
              <a  className="text-gray-900 hover:scale-125 transition-transform duration-200">
                Contact Us
              </a>
            </div>

            <button
              onClick={handleOpenModal}
              className="ml-2 bg-transparent border border-red-800 text-red-800 px-10 py-2 rounded-full hover:border-red-500 hover:text-red-500 focus:outline-none"
            >
              Sign Up
            </button>
          </div>
        </nav>

        <div className="flex justify-between items-center">
          <div className="md:w-1/2 text-left p-10">
            <h1 className="ms-6 text-6xl font-sans text-[#000000] font-semibold leading-[75.52px]">
              Future-Proof Cloud <br /> Tools For Your <br /> Evolving Needs
            </h1>
            <p className="ms-6 mt-4 text-[#5F5E5E]">
              Embarking on the ERP journey: Discover accounting and ERP solutions tailored to your needs and budget.
            </p>
            <button
             onClick={handleOpenModal}
            className="ms-6 flex items-center gap-5 font-bold mt-6 px-6 py-2 bg-black text-white rounded-full">
              Get early access <img src={arrow} alt="arrow" className="w-[37px] h-[37px]" />
            </button>
          </div>
          <div>
            <img src={bannerimg} alt="Sample" className="w-[726px] h-[626px]" />
          </div>
        </div>
      </div>

      <ReusableModal open={modalOpen} onClose={handleCloseModal} onAction={handleAction} />
    </>
  );
}

export default Header;
