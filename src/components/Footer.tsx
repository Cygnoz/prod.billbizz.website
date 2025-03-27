import awsstartup from "../assets/images/footer/aws.svg";
import msstartup from "../assets/images/footer/ms.svg";
import keralastartup from "../assets/images/keralaStartup.png";
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
     


     <div className="relative bg-[#5E0101] text-white w-full p-8 h-auto">

<div className="">
          <div>
          <div className="flex items-center gap-4 px-12 py-4">
          <div className="flex -space-x-2">
          <img
          src={billbizz}
          loading="lazy"
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
            <p className="text-[#BEBEBE] text-center text-base font-normal">notify@billbizz.com</p>
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
            <li><a href="/knowledge-base" >Knowledge Base</a></li>
            <li><a href="/news-and-events">News & Events</a></li>
          </ul>
        </div>
        
          <div className="col-span-1">
          <div className="lg:flex  gap-4 mt-10">
            <img loading="lazy" className="w-24 h-16" src={keralastartup} alt="" />
            <img loading="lazy" className="w-28 h-14" src={awsstartup} alt="" />
            <img loading="lazy" className="w-32 h-14" src={msstartup} alt="" />
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
