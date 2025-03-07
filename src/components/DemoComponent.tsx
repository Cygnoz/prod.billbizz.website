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
    <div> <div className="relative bg-black text-white p-8 h-[359px]">
    <img
      src={backgredient}
      alt="Background Gradient"
      className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
    />

    {/* Content */}
    <div className="flex justify-between relative z-10 p-10">
      <div className="w-[597px]">
        <h1 className="text-[48px] leading-[56.64px] text-left  decoration-skip-ink-none font-sans font-semibold">
          <span className="text-[#C71B1A]">Transform</span> your business,
          <br />
          one solution at a time.
        </h1>

        <button
          onClick={handleOpenModal}
          className="mt-6 px-6 py-3 text-white rounded-md focus:outline-none"
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

      <p className="mt-4 text-[20px] font-[410] leading-[23.6px] text-left font-sans  decoration-skip-ink-none text-[#BEBEBE]">
        Schedule a Demo <br /> for a personalized, no-commitment
        consultation. Discover how Billbizz can <br /> address your unique
        challenges and boost your business efficiency.
      </p>
    </div>
    <ReusableModal
        open={modalOpen}
        onClose={handleCloseModal}
        onAction={handleAction}
      />
  </div></div>
  )
}

export default DemoComponent