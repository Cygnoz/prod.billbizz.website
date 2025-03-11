import { useState } from "react";
import backgredient from "../assets/images/footer/Left (1).png";
import ReusableModal from "../commoncomponents/SignUpModal";

type Props = {}

const DemoComponent = ({}: Props) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true); 
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
  <div className="relative bg-black text-white p-8 min-h-[359px]">
  <img
    src={backgredient}
    alt="Background Gradient"
    className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
  />

  {/* Content */}
  <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
    
    {/* Left Section: Heading + Button */}
    <div className="w-full md:w-1/2 space-y-6">
      <h1 className="text-[36px] md:text-[48px] leading-[42px] md:leading-[56.64px] text-left font-sans font-semibold">
        <span className="text-[#C71B1A]">Transform</span> your business,
        <br className="hidden md:block" />
        one solution at a time.
      </h1>

      {/* Button (Mobile at bottom, Desktop beside content) */}
      <div className="flex md:mt-6">
        <button
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
        </button>
      </div>
    </div>

    {/* Right Section: Paragraph */}
    <p className="w-full md:w-1/2 text-[18px] md:text-[20px] font-[410] leading-[28px] md:leading-[23.6px] text-left text-[#BEBEBE]">
      Schedule a Demo <br className="hidden md:block" />
      for a personalized, no-commitment consultation.  
      Discover how Billbizz can <br className="hidden md:block" />
      address your unique challenges and boost your business efficiency.
    </p>
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