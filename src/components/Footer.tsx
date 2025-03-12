import awsstartup from "../assets/images/footer/aws.svg";
import msstartup from "../assets/images/footer/ms.svg";
import keralastartup from "../assets/images/footer/image (20) 1.svg";
import billbizz from "../assets/icons/Billbizz-Logo_White 1.png";
import fb from "../assets/images/footer/social/Vector.png";
import insta from "../assets/images/footer/social/Vector-1.png";
import maill from "../assets/images/footer/social/Vector-2.png";
import mail2 from "../assets/images/footer/email2.png";
import phone from "../assets/images/footer/phhone.png";
import linkedin from "../assets/images/footer/social/Vector-3.png";
import line from "../assets/images/footer/Line 18.png";
import address from "../assets/images/footer/Frame 1156.png";

function Footer() {

  return (
    <>
     


     <div className="relative bg-[#5E0101] text-white p-8 h-auto md:h-[510px]">
  <div className="flex gap-10 md:gap-52 flex-col md:flex-row justify-between">
    
    {/* Left Section */}
    <div className="sm:w-full md:w-1/6 mb-8 mt-10 md:me-[70px] text-center md:text-left">
      <h2 className="flex justify-center md:justify-start items-center gap-2">
        <img
          src={billbizz}
          alt="BillBizz Logo"
          className="h-[48px] w-[48px] mr-2"
        />
        BillBizz
      </h2>

      {/* Address and Contact Section */}
      <div className="flex flex-col md:flex-row w-full items-center md:items-start">
        <img src={address} alt="" className="mt-5 w-[100%] md:w-full h-auto" />
        <div className="mt-5 text-center md:text-left">
          <h6 className="text-[#FFFFFF] font-sans mb-4 text-2xl">Contact</h6>
          <p className="text-[#BEBEBE] text-lg">
            <a
              href="mailto:notify@cygnonex.com"
              className="hover:text-[#FFFFFF] flex items-center gap-2"
            >
              <img src={mail2} alt="Email" className="w-[20px] h-[16px]" />
              notify@cygnonex.com
            </a>
            <a
              href="tel:+919544431166"
              className="hover:text-[#FFFFFF] flex items-center gap-2"
            >
              <img src={phone} alt="Phone" className="w-[20px] h-[16px]" />
              +91 9544431166
            </a>
          </p>
        </div>
      </div>

      {/* Startup Icons */}
      <div className="flex justify-center md:justify-start w-full mb-8 mt-10 gap-5">
        <img src={keralastartup} alt="Kerala Startup Mission" className="w-[80px] md:w-auto h-auto" />
        <img src={awsstartup} alt="AWS Startups" className="w-[80px] md:w-auto h-auto" />
        <img src={msstartup} alt="Microsoft for Startups" className="w-[80px] md:w-[127px] h-auto md:h-[53px]" />
      </div>
    </div>

    {/* Divider Line (hidden on mobile) */}
    <div className="hidden md:block">
      <img src={line} alt="" className="h-[420px] ms-[200px]" />
    </div>

    {/* Right Section - Links */}
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 text-center md:text-left">
        
        {/* Site Info */}
        <div>
          <h3 className="font-sans mb-5 text-2xl">Site Info</h3>
          <ul className="text-[#BEBEBE] text-xl space-y-2">
            <li><a href="/privacy-policy">Legal Privacy</a></li>
            <li><a href="/security">Security</a></li>
            <li><a href="/terms-and-conditions">Terms & Services</a></li>
          </ul>
        </div>

        {/* About BillBizz */}
        <div>
          <h3 className="font-sans mb-5 text-2xl">About BillBizz</h3>
          <ul className="text-[#BEBEBE] text-xl space-y-2">
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/customer-stories">Customer Stories</a></li>
          </ul>
        </div>

        {/* Learn */}
        <div>
          <h3 className="font-sans mb-5 text-2xl">Learn</h3>
          <ul className="text-[#BEBEBE] text-xl space-y-2">
            <li><a href="/blog">Blog</a></li>
            <li>
              <a href="/knowledge-base" target="_blank" rel="noopener noreferrer">
                Knowledge Base
              </a>
            </li>
            <li><a href="/news-and-events">News And Events</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  {/* Footer Bottom Bar */}
  <div className="bg-red-950 flex flex-col md:flex-row justify-between text-center md:text-left h-auto md:h-[38px] p-2">
    <div className="flex gap-[14px] pt-[7px] ps-[40px]">
      <img src={fb} alt="Facebook" className="w-[11px] h-[20px]" />
      <img src={insta} alt="Instagram" className="w-[20px] h-[20px]" />
      <img src={maill} alt="Email" className="w-[20px] h-[16px]" />
      <img src={linkedin} alt="LinkedIn" className="w-[20px] h-[19px]" />
    </div>
    <div className="pt-[10px] pe-[40px]">
      <p className="text-[#FFFFFF] text-sm">Billbizz 2024 | All Rights Reserved</p>
    </div>
  </div>
</div>

    </>

  );
}

export default Footer;
