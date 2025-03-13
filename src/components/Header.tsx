import { useState } from "react";
import headerbg from "../assets/images/headerbg.png";
import arrow from "../assets/icons/arrow-right.png";
import bannerimg from "../assets/images/bannerimg.png";
import ReusableModal from "../commoncomponents/SignUpModal";
import NavBar from "./NavBar";
import PlayButtonIcon from "../assets/icons/PlayButtonIcon";

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
        className="h-auto min-h-screen"
      >
        <NavBar />

        {/* Web Layout: Two Columns */}
        <div className="flex flex-col md:flex-row justify-between items-center">

          {/* Left Column (Text + Button in Web View) */}
          <div className="w-full md:w-1/2 p-10">
            <h1 className="text-4xl md:text-6xl font-sans text-[#000000] font-semibold leading-[45px] md:leading-[75.52px]">
              Future-Proof Cloud <br className="hidden md:block" />
              Tools For Your <br className="hidden md:block" />
              Evolving Needs
            </h1>
            <p className="mt-4 text-[#5F5E5E] text-base md:text-lg">
              Embarking on the ERP journey: Discover accounting and ERP solutions tailored to your needs and budget.
            </p>

            {/* Button included in the Left Column for Web */}
            {/* <div className="hidden md:flex mt-6">
        <button
          onClick={handleOpenModal}
          className="flex items-center gap-5 font-bold px-6 py-2 bg-black text-white rounded-full"
        >
          Get early access <img src={arrow} alt="arrow" className="w-[37px] h-[37px]" />
        </button>
      </div> */}
            <div className="relative w-28 h-28 flex items-center justify-center mt-6">
              {/* Gradient Border */}
              {/* <div className="absolute inset-0 rounded-full border-4 border-[#820000]"></div> */}

              {/* Inner Circle (Mask for the border) */}
              <div className="bg-[#232222] w-full h-full rounded-full flex items-center justify-center border-[3px] border-[#820000] relative">
                <PlayButtonIcon size={50} />
              </div>
            </div>

          </div>

          {/* Right Column (Image) */}
          <div className="w-full md:w-1/2 flex justify-center p-10">
            <img
              src={bannerimg}
              alt="Sample"
              className="w-full md:w-[726px] h-auto md:h-[626px]"
            />
          </div>

          {/* Button for Mobile View (Separate Row) */}
          <div className="w-full flex md:hidden justify-center p-10">
            <button
              onClick={handleOpenModal}
              className="flex items-center gap-5 font-bold px-6 py-2 bg-black text-white rounded-full"
            >
              Get early access <img src={arrow} alt="arrow" className="w-[37px] h-[37px]" />
            </button>
          </div>
        </div>
      </div>






      <ReusableModal open={modalOpen} onClose={handleCloseModal} onAction={handleAction} />
    </>
  );
}

export default Header;
