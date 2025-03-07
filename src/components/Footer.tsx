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
                    href="mailto:notify@cygnonex.com"
                    className="text-[#BEBEBE] hover:text-[#FFFFFF] flex items-center gap-2 "
                  >
                    <img
                      src={mail2}
                      alt="Email"
                      className="w-[20px] h-[16px]"
                    />
                    notify@cygnonex.com
                  </a>

                  <a
                    href="tel:+919544431166"
                    className="text-[#BEBEBE] hover:text-[#FFFFFF] flex items-center gap-2 "
                  >
                    <img
                      src={phone}
                      alt="Phone"
                      className="w-[20px] h-[16px]"
                    />
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
              <img
                src={msstartup}
                alt="Microsoft for Startups"
                className="w-[127px] h-[53px]"
              />
            </div>
          </div>

          <div>
            <img src={line} alt="" className="h-[420px] ms-[200px]" />
          </div>

          <div className="w-full sm:w-1/6 mb-8 mt-[100px]">
            <h3 className="font-sans mb-5 text-2xl">Quick Links</h3>
            <ul className="text-[#BEBEBE] text-xl">
              <li className="mb-2">
                <a href="#">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="/blog">Blog</a>
              </li>
              <li className="mb-2">
                <a href="/customer-stories">Customer Stories</a>
              </li>
              <li className="mb-2">
                <a href="/news-and-events">News And Events</a>
              </li>
              <li className="mb-2">
                <a href="/knowledge-base" target="_blank" rel="noopener noreferrer">
                  Knowledge Base
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/6 mb-8 mt-[100px]">
            <ul className="text-[#BEBEBE] text-xl">
              <li className="mb-2">
                <a href="/privacy-policy">Legal Privacy</a>
              </li>
              <li className="mb-2">
                <a href="/security">Security</a>
              </li>
              <li className="mb-2">
                <a href="/terms-and-conditions">Terms & Services</a>
              </li>
             
            </ul>
          </div>

         
        </div>
      </div>
      <div className="bg-red-950 flex justify-between h-[38px]">
        <div className="flex  gap-[14px] pt-[7px] ps-[40px]">
          <a
            href="https://www.facebook.com/cygnotechlabs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fb} alt="Facebook" className="w-[11px] h-[20px]" />
          </a>
          <a
            href="https://www.instagram.com/cygnoz_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="Instagram" className="w-[20px] h-[20px]" />
          </a>
          <a
            href="mailto:notify@cygnonex.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={maill} alt="Email" className="w-[20px] h-[16px]" />
          </a>
          <a
            href="https://www.linkedin.com/company/cygnoz/posts/?feedView=all"
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

     
    </>
  );
}

export default Footer;
