import awsstartup from "../assets/images/footer/aws.svg";
import msstartup from "../assets/images/footer/ms.svg";
import keralastartup from "../assets/images/footer/image (20) 1.svg";
import billbizz from "../assets/icons/Billbizz-Logo_White 1.png";
import backgredient from "../assets/images/footer/Left (1).png";
import fb from "../assets/images/footer/social/Vector.png";
import insta from "../assets/images/footer/social/Vector-1.png";
import maill from "../assets/images/footer/social/Vector-2.png";
import mail2 from "../assets/images/footer/email2.png";
import phone from "../assets/images/footer/phhone.png";
import linkedin from "../assets/images/footer/social/Vector-3.png";
import line from "../assets/images/footer/Line 18.png";
import address from "../assets/images/footer/Frame 1156.png";
import ReusableModal from "../commoncomponents/SignUpModal";
import { useState } from "react";

function Footer() {

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
      <div className="relative bg-black text-white p-8 h-[359px]">
        {/* Background Image */}
        <img
          src={backgredient}
          alt="Background Gradient"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
        />

        {/* Content */}
        <div className="flex justify-between relative z-10 p-10">
          <div className="w-[597px]">
            <h1 className="text-[48px] font-[410] leading-[56.64px] text-left  decoration-skip-ink-none font-sans">
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
    background: "linear-gradient(272.11deg, #CC1111 4.31%, #8F0100 92.61%)"
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
      </div>

      {/* footer section */}

      <div className="relative bg-[#5E0101] text-white p-8 h-[510px]">
        <div className="flex justify-between">
          <div className=" sm:w-1/6 mb-8 mt-10 me-[70px]">
            <h2 className="flex text-3xl font-extralight">
              <img
                src={billbizz}
                alt="BillBizz Logo"
                className="h-[48px] w-[48px] mr-2"
              />
              BillBizz
            </h2>
            <div className="flex w-[500px]">
            
              <img src={address} alt="" className="mt-5 w-full h-[150px] " />
              <div>
  <h6 className="text-[#FFFFFF] font-sans mt-6 mb-4 text-2xl">
    Contact
  </h6>
  <p className="text-[#BEBEBE] font-sans text-lg leading-relaxed">
    <a
      href="mailto:notify@cygnonex.cm"
      className="text-[#BEBEBE] hover:text-[#FFFFFF] flex items-center gap-2 "
    >
      <img src={mail2} alt="Email" className="w-[20px] h-[16px]" />
      notify@cygnonex.com
    </a>

    <a
      href="tel:+919544431166"
      className="text-[#BEBEBE] hover:text-[#FFFFFF] flex items-center gap-2 "
    >
      <img src={phone} alt="Phone" className="w-[20px] h-[16px]" />
      +91 9544431166
    </a>
  </p>
</div>


            </div>

            <div className="flex w-full mb-8 mt-10 gap-5">
            <img
              src={keralastartup}
              alt="Kerala Startup Mission"
              className="mb-4 "
            />
            <img src={awsstartup} alt="AWS Startups" className="mb-4 " />
            <img src={msstartup} alt="Microsoft for Startups" className="w-[127px] h-[53px]" />
          </div>
          </div>
          
          

          <div>
            <img src={line} alt="" className="h-[420px] ms-[200px]" />
          </div>
          
          <div className="w-full sm:w-1/6 mb-8 mt-[100px]">
            <h3 className="font-sans mb-5 text-2xl">Quick Links</h3>
            <ul className="text-[#BEBEBE] text-xl">
              <li className="mb-2">
                <a href="#">Billbizz Trust Center</a>
              </li>
              <li className="mb-2">
                <a href="#">Find a Solution</a>
              </li>
              <li className="mb-2">
                <a href="#">Industries</a>
              </li>
              <li className="mb-2">
                <a href="#">Find a Partner</a>
              </li>
              <li className="mb-2">
                <a href="#">Trials and Demos</a>
              </li>
              <li className="mb-2">
                <a href="#">Find Services</a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/6 mb-8 mt-[100px]">
            <h3 className="font-sans mb-5 text-2xl">About Billbizz</h3>
            <ul className="text-[#BEBEBE] text-xl">
              <li className="mb-2">
                <a href="#">Company Information</a>
              </li>
              <li className="mb-2">
                <a href="#">Worldwide Directory</a>
              </li>
              <li className="mb-2">
                <a href="#">Investor Relations</a>
              </li>
              <li className="mb-2">
                <a href="#">Careers</a>
              </li>
              <li className="mb-2">
                <a href="#">News and Press</a>
              </li>
              <li className="mb-2">
                <a href="#">Events</a>
              </li>
              <li className="mb-2">
                <a href="#">Customer Stories</a>
              </li>
              <li className="mb-2">
                <a href="#">Newsletter</a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/6 mt-[100px]">
            <h3 className="font-sans mb-5 text-2xl">Site Information</h3>
            <ul className="text-[#BEBEBE] text-xl">
              <li className="mb-2">
                <a href="#">Privacy</a>
              </li>
              <li className="mb-2">
                <a href="#">Terms of Use</a>
              </li>
              <li className="mb-2">
                <a href="#">Legal Disclosure</a>
              </li>
              <li className="mb-2">
                <a href="#">Copyright</a>
              </li>
              <li className="mb-2">
                <a href="#">Trademark</a>
              </li>
              <li className="mb-2">
                <a href="#">Cookie Preference</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-red-950 flex justify-between h-[38px]">
        <div className="flex  gap-[14px] pt-[7px] ps-[40px]">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fb} alt="Facebook" className="w-[11px] h-[20px]" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="Instagram" className="w-[20px] h-[20px]" />
          </a>
          <a
            href="mailto:example@example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={maill} alt="Email" className="w-[20px] h-[16px]" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" className="w-[20px] h-[19px]" />
          </a>
        </div>
        <div className="pt-[10px] pe-[40px]">
          <p className="text-[#FFFFFF] text-sm">
            Billbizz 2024 | All Rights Reserved
          </p>
        </div>
      </div>

      <ReusableModal
        open={modalOpen}
        onClose={handleCloseModal}
       
        onAction={handleAction}
      />
    </>
  );
}

export default Footer;
