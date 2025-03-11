import { useEffect, useRef, useState } from "react";
import billbizz from "../assets/icons/Billbizz-Logo_White 1.png";
import ReusableModal from "../commoncomponents/SignUpModal";
import MenuIcon from "../assets/icons/MenuIcon";


type Props = {}

function NavBar({}: Props) {
     const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     const menuRef = useRef<HTMLDivElement>(null); // Ref for the menu

  // Handle click outside logic
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

    
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
    <div>
    <nav className="bg-[#5D5D5D1A] bg-opacity-60 shadow mx-7">
      <div className="px-4 py-3 flex justify-between items-center">
        <a className="text-xl font-semibold text-gray-900">
          <img src={billbizz} alt="Logo" className="w-[38px] h-[38px]" />
        </a>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon/>
          </button>
        </div>

        {/* Menu Items */}
        <div
          ref={menuRef}
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-14 right-4 bg-white shadow-md rounded-md md:flex md:space-x-8 md:bg-transparent md:shadow-none md:static`}
        >
          <a className="block py-2 px-4 text-gray-900 hover:scale-125 transition-transform duration-200">
            Product
          </a>
          <a className="block py-2 px-4 text-gray-900 hover:scale-125 transition-transform duration-200">
            Overview
          </a>
          <a className="block py-2 px-4 text-gray-900 hover:scale-125 transition-transform duration-200">
            Pricing
          </a>
          <a className="block py-2 px-4 text-gray-900 hover:scale-125 transition-transform duration-200">
            Contact Us
          </a>
        </div>

        <button
          onClick={handleOpenModal}
          className="ml-2 hidden md:block bg-transparent border border-red-800 text-red-800 px-10 py-2 rounded-full hover:border-red-500 hover:text-red-500 focus:outline-none"
        >
          Sign Up
        </button>
      </div>
    </nav>

    <ReusableModal
      open={modalOpen}
      onClose={handleCloseModal}
      onAction={handleAction}
    />
  </div>
  )
}

export default NavBar