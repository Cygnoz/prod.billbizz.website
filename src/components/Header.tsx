import  { useState } from "react";
import headerbg from "../assets/images/headerbg.png";
import arrow from "../assets/icons/arrow-right.png";
import bannerimg from "../assets/images/bannerimg.png";
import ReusableModal from "../commoncomponents/SignUpModal";
import NavBar from "./NavBar";

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
       <NavBar/>

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
