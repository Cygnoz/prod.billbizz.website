import { useState } from "react";
import billbizz from "../assets/icons/Billbizz-Logo_White 1.png";
import ReusableModal from "../commoncomponents/SignUpModal";

type Props = {}

function NavBar({}: Props) {
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
    <div> <nav className="bg-[#5D5D5D1A] bg-opacity-60 shadow mx-7">
    <div className="px-4 py-3 flex justify-between items-center">
      <a className="text-xl font-semibold text-gray-900">
        <img src={billbizz} alt="Logo" className="w-[38px] h-[38px]" />
      </a>

      <div className="flex space-x-8 mx-auto">
        <a href="/"  className="text-gray-900 hover:scale-125 transition-transform duration-200">
          Home
        </a>
        <a href="/about-us"  className="text-gray-900 hover:scale-125 transition-transform duration-200">
          About Us
        </a>
        <a href="/blog" className="text-gray-900 hover:scale-125 transition-transform duration-200">
          Features
        </a>
        <a href="/contact-us"  className="text-gray-900 hover:scale-125 transition-transform duration-200">
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
  <ReusableModal open={modalOpen} onClose={handleCloseModal} onAction={handleAction} />
  </div>
  )
}

export default NavBar