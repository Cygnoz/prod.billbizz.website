import { useState } from "react";
import backgredient from "../assets/images/footer/Left (1).png";
import ReusableModal from "../commoncomponents/SignUpModal";
import Instagram from "../assets/icons/Instagram";
import YoutubeIcon from "../assets/icons/YoutubeIcon";
import Twitter from "../assets/icons/Twitter";
import FaceBook from "../assets/icons/Facebook";

type Props = {}

const DemoComponent = ({}: Props) => {
    const [modalOpen, setModalOpen] = useState(false);

    // const handleOpenModal = () => {
    //     setModalOpen(true); 
    //   };
      const handleCloseModal = () => {
        setModalOpen(false); // Close modal
      };
    
      const handleAction = () => {
        console.log("Action button clicked!");
        handleCloseModal(); // Close the modal after the action
      };
  return (
    <div>
  <div className="relative bg-black text-white p-8 min-h-[235px]">
  <img
    src={backgredient}
    loading="lazy"
    alt="Background Gradient"
    className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
  />

  {/* Content */}
  <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
    
    {/* Left Section: Heading + Button */}
    <div className="w-full md:w-1/2 space-y-6">
      <h1 className="text-[48px] font-medium font-sans text-[#FFFFFF]">
        Let's Stay
        <span className="text-[#C71B1A]"> Connected</span>
      </h1>
      <p className="text-[#FFFFFF] text-2xl font-medium">Stay Updated with our latest projects and company <br />news by following us on social media</p>

      {/* Button (Mobile at bottom, Desktop beside content) */}
      <div className="flex md:mt-6">
        {/* <button
          onClick={handleOpenModal}
          className="w-full md:w-auto px-6 py-3 text-white rounded-md focus:outline-none"
          style={{
            fontFamily: "sans-serif",
            fontSize: "20px",
            fontWeight: "410",
            lineHeight: "23.6px",
            textAlign: "left",
            textDecoration: "none",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            borderRadius: "16px",
            background:
              "linear-gradient(272.11deg, #CC1111 4.31%, #8F0100 92.61%)",
          }}
        >
          Schedule Demo
        </button> */}
      </div>
    </div>

    {/* Right Section: Paragraph */}
   <div>
   <p className="w-full text-[42px] justify-end font-medium text-[#FFFFFF] -mt-6">
      Get in touch
    </p>
    <div className="flex gap-4 my-4 items-center justify-center">
    <a href="https://www.facebook.com/cygnotechlabs/" target="_blank" rel="noopener noreferrer">
    <FaceBook size={28}/>
              </a>
              <a href="https://www.instagram.com/cygnoz_/" target="_blank" rel="noopener noreferrer">
              <Instagram size={28}/>
              </a>
              <a href="https://www.youtube.com/@cygnoz" target="_blank" rel="noopener noreferrer">
              <YoutubeIcon size={28}/>
              </a>
         
         
              <a href="https://x.com/cygnoz_" target="_blank" rel="noopener noreferrer">
              <Twitter  color="" size={24} />
              </a>
          
    </div>
   </div>
  </div>

  {/* Modal */}
  <ReusableModal
    open={modalOpen}
    onClose={handleCloseModal}
    onAction={handleAction}
  />
</div>

  </div>
  )
}

export default DemoComponent