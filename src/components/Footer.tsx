import awsstartup from "../assets/images/footer/aws.svg";
import msstartup from "../assets/images/footer/ms.svg";
import keralastartup from "../assets/images/footer/image (20) 1.svg";
import billbizz from "../assets/icons/Billbizz-Logo_White 1.png";
// import fb from "../assets/images/footer/social/Vector.png";
// import insta from "../assets/images/footer/social/Vector-1.png";
// import maill from "../assets/images/footer/social/Vector-2.png";
// import linkedin from "../assets/images/footer/social/Vector-3.png";
import PhoneIcon from "../assets/icons/PhoneIcon";
import MailIcon from "../assets/icons/MailIcon";

function Footer() {

  return (
    <>
     


     <div className="relative bg-[#5E0101] text-white p-8 h-auto">
  {/* <div className="flex gap-10 md:gap-52 flex-col md:flex-row justify-between">
    
    <div className="sm:w-full md:w-1/6 mb-8 mt-10 md:me-[70px] text-center md:text-left">
      <h2 className="flex justify-center md:justify-start items-center gap-2">
        <img
          src={billbizz}
          alt="BillBizz Logo"
          className="h-[48px] w-[48px] mr-2"
        />
        BillBizz
      </h2>

      <div className="flex flex-col md:flex-row w-full items-center md:items-start">
        <img src={address} alt="" className="mt-5 w-[100%] md:w-full h-auto" />
        <div className="mt-5 text-center md:text-left ms-16">
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

      <div className="flex justify-center md:justify-start w-full mb-8 mt-10 gap-5">
        <img src={keralastartup} alt="Kerala Startup Mission" className="w-[80px] md:w-auto h-auto" />
        <img src={awsstartup} alt="AWS Startups" className="w-[80px] md:w-auto h-auto" />
        <img src={msstartup} alt="Microsoft for Startups" className="w-[80px] md:w-[127px] h-auto md:h-[53px]" />
      </div>
    </div>

    <div className="hidden md:block">
      <img src={line} alt="" className="h-[400px] ms-[100px]" />
    </div>

    <div className="flex items-center justify-center">
      <div className="grid grid-cols-3 gap-8 -mt-8">
        
        <div>
          <h3 className="font-sans mb-5 text-2xl">Site Info</h3>
          <ul className="text-[#BEBEBE] text-xl space-y-2">
            <li><a href="/privacy-policy">Legal Privacy</a></li>
            <li><a href="/security">Security</a></li>
            <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans mb-5 text-2xl">About BillBizz</h3>
          <ul className="text-[#BEBEBE] text-xl space-y-2">
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/customer-stories">Customer Stories</a></li>
          </ul>
        </div>

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
  </div> */}

<div className="">
          <div>
          <div className="flex items-center gap-4 px-12 py-4">
          <div className="flex -space-x-2">
          <img
          src={billbizz}
          alt="BillBizz Logo"
          className="h-[48px] w-[48px] mr-2"
        />
          </div>
          <p className="text-[#E0E0E0] text-3xl font-medium">BillBizz</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 px-12 gap-4">
          <div className="col-span-1">
          <p className="text-[#FFFFFF] text-2xl font-medium">Address</p>
          <p className="text-[#BEBEBE] text-base font-normal text-start">Cygnonex Innovations Private Limited, Mythripuram Road, Near AIR, NGO Quarters, Thrikkakara PO, Kochi, Kerala, India, 682021</p>
          </div>
          <div className="col-span-1 lg:ms-20">
          <p className="text-[#FFFFFF] text-2xl font-medium">Contact</p>
          <div className="flex gap-1 items-center">
         
            <MailIcon size={18}/>
            <p className="text-[#BEBEBE] text-center text-base font-normal">notify@sewnex.com</p>
          </div>
          <div className="flex gap-1 items-center">
            <PhoneIcon   size={18} color="#BEBEBE"/>
            <p className="text-[#BEBEBE] text-center text-base font-normal">+919544421166</p>
          </div>
          </div>
          <hr className="lg:rotate-90 lg:border-dashed lg:border-[#B00202] lg:w-80 lg:-ms-10 lg:mt-24" />
          {/* <div className="col-span-1">
          <p className="text-[#232222] text-2xl font-medium mb-1">Site Info</p>
          <p className="my-1 text-[#786D6D] font-normal text-base">Legal Privacy</p>
          <p className="text-[#786D6D] font-normal text-base">Terms & Services</p>
          <p className="my-1 text-[#786D6D] font-normal text-base">Security</p>
          </div> */}
          <div>
          <h3 className="text-[#F1EFEF] text-2xl font-medium mb-1">Site Info</h3>
          <ul className="text-[#BEBEBE] font-normal text-base space-y-1">
            <li><a href="/privacy-policy">Legal Privacy</a></li>
            <li><a href="/security">Security</a></li>
            <li><a href="/terms-and-conditions">Terms & Services</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#F1EFEF] text-2xl font-medium mb-1">About BillBizz</h3>
          <ul className="text-[#BEBEBE] font-normal text-base space-y-1">
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/customer-stories">Customer Stories</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#F1EFEF] text-2xl font-medium mb-1">Learn</h3>
          <ul className="text-[#BEBEBE] font-normal text-base space-y-1">
            <li><a href="/blog">Blogs</a></li>
            <li><a href="/knowledge-base" target="_blank" rel="noopener noreferrer">Knowledge Base</a></li>
            <li><a href="/news-and-events">News & Events</a></li>
          </ul>
        </div>
        
          <div className="col-span-1">
          <div className="lg:flex  gap-4 mt-10">
            <img className="w-24 h-16" src={keralastartup} alt="" />
            <img className="w-28 h-14" src={awsstartup} alt="" />
            <img className="w-32 h-14" src={msstartup} alt="" />
          </div>
          </div>
        </div>
          </div>
        </div>

 
</div>

    </>

  );
}

export default Footer;
