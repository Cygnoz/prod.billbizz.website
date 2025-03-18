import chatbotimg from "../assets/images/Chatbot-Billie 1.svg"
import charmclock from "../assets/icons/charm_clock.svg"
import card2img from "../assets/images/Group 2499.svg"
import search from "../assets/icons/search.svg"
import CheckCircleIcon from "../commoncomponents/CheckCircleIcon"
import card3img from "../assets/images/EcommerceImageHome.png"
import card4icon from "../assets/icons/Group.svg"
import fourthcardicon from "../assets/icons/Vector (1).svg"
import ActionRequired from "../components/ActionRequired"


function Cards() {
  return (
    <div className="flex flex-col gap-12">
      {/* First Card */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-[radial-gradient(circle,_#FEFEFF_0%,_#E5EDFF_100%)] p-8 rounded-xl m-12 h-full">
        <img src={chatbotimg} alt="Billie Chatbot" className="w-3/4 md:w-full max-w-sm -mb-8 mt-20" />
        <div className="w-full md:w-1/2 -mt-10 ms-32">
          <div className="text-center md:text-left ">
            <div className="inline-flex items-center bg-white px-3 py-2 shadow-lg shadow-[#b5cbff] rounded-full">
              <span className="bg-white flex items-center gap-2 font-sans text-[#444040] font-semibold">
                <img src={charmclock} className="h-5 w-5" alt="clock icon" />
                Round-the-clock customer support
              </span>
            </div>
            <h2 className="text-4xl font-bold text-[#413E3E] my-6">Answer 70% Of Customer Inquiries Instantly.</h2>
            <ul className="mt-4 text-[#2E2D2D] font-medium gap-2 space-y-2">
              <li className="flex gap-1 items-center">
                <CheckCircleIcon size={14} color="#0878B2" /> Billie is designed to assist with a variety of tasks.
              </li>
              <li className="flex gap-1 items-center">
                <CheckCircleIcon size={14} color="#0878B2" /> She can understand and respond to user queries effectively.
              </li>
              <li className="flex gap-1 items-center">
                <CheckCircleIcon size={14} color="#0878B2" /> Billie utilizes advanced algorithms for data processing.
              </li>
              <li className="flex gap-1 items-center">
                <CheckCircleIcon size={14} color="#0878B2" /> She can learn from user interactions to improve her responses.
              </li>
              <li className="flex gap-1 items-center">
                <CheckCircleIcon size={14} color="#0878B2" /> Billie can handle complex information and provide relevant insights.
              </li>
              <li className="flex gap-1 items-center">
                <CheckCircleIcon size={14} color="#0878B2" /> She is equipped to manage multiple tasks simultaneously.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-[radial-gradient(circle,_#FEFEFF_0%,_#FFF1F1_100%)] p-8 rounded-xl m-12 h-full">
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center bg-white px-3 py-2 shadow-lg shadow-[#FF9393] rounded-full">
              <span className="bg-white flex items-center gap-2 text-[#444040] font-sans font-semibold">
                <img src={search} className="h-6 w-6" alt="" />
                OCR For Advance Text Extraction
              </span>
            </div>
            <h2 className="text-4xl font-bold text-[#413E3E] my-6">
              OCR Technology for Effortless Text <br /> Extraction.
            </h2>
            <ul className="mt-8 text-[#2E2D2D] font-medium space-y-3">
              <li className="flex gap-1 items-center">
                <CheckCircleIcon size={14} color="#BF0C0B" /> Seamless Text Extraction: Streamlined process for easy data retrieval.
              </li>
              <li className="flex gap-1 items-center">
                <CheckCircleIcon size={14} color="#BF0C0B" /> High Accuracy: Achieves over 95% accuracy in text recognition.
              </li>
              <li className="flex gap-1 items-center">
                <CheckCircleIcon size={14} color="#BF0C0B" /> Fast Processing: Handles up to 10,000 pages per hour.
              </li>
              <li className="flex gap-1 items-center">
                <CheckCircleIcon size={14} color="#BF0C0B" /> Versatile Applications: Suitable for various industries and document types.
              </li>
              <li className="flex gap-1 items-center">
                <CheckCircleIcon size={14} color="#BF0C0B" /> User-Friendly Interface: Intuitive design for effortless operation.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-6 flex justify-center items-center">
          <img src={card2img} alt="Billie Chatbot" className="w-3/4 md:w-full max-w-sm -mb-8 mt-32" />
        </div>
      </div>

      {/* third card */}

      <div className="flex flex-col md:flex-row items-center justify-center bg-[radial-gradient(circle,_#FEFEFF_0%,_#FDF6E3_100%)] rounded-xl m-12 h-full">
        <img src={card3img} alt="Billie Chatbot" className="w-[600px] h-[480px] me-auto mt-10 pt-10" />
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8">
          <div className="text-center md:text-left me-8">
            <div className="inline-flex items-center bg-white px-6 py-2 shadow-lg shadow-[#FFE8AD] rounded-full">
              <span className="bg-white flex items-center gap-2 font-sans text-[#444040] p-1 font-semibold">
                <img src={card4icon} className="h-5 w-5" alt="clock icon" />
                <h1 className="text-[#413E3E] ">E-commerce Integration</h1>
              </span>
            </div>
            <h2 className="text-4xl font-bold text-[#413E3E] mt-4">Unlock New Potential with Dynamic E-commerce Integration Solutions</h2>
            <ul className="text-[#2E2D2D] font-medium gap-2 space-y-2 mt-10">
              <li className="flex gap-1 items-center">
                <CheckCircleIcon size={14} color="#EEC45A" /> Seamless Connectivity: Connect all sales channels effortlessly.
              </li>
              <li className="flex gap-1 items-center">
                <CheckCircleIcon size={14} color="#EEC45A" /> Real-Time Sync: Keep inventory and orders updated automatically.
              </li>
              <li className="flex gap-1 items-center">
                <CheckCircleIcon size={14} color="#EEC45A" /> Flexible Payments: Integrate multiple payment gateways for easy checkout.
              </li>
              <li className="flex gap-1 items-center">
                <CheckCircleIcon size={14} color="#EEC45A" /> Custom Solutions: Tailor integrations to fit your needs.
              </li>
              <li className="flex gap-1 items-center">
                <CheckCircleIcon size={14} color="#EEC45A" /> Improved User Experience: Ensure a smooth shopping journey.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* fourth card */}

      <div className="flex flex-col md:flex-row items-center justify-center bg-[radial-gradient(circle,_#FEFEFF_0%,_#E5EDFF_100%)] p-8 rounded-xl m-12 h-full">
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8">
          <div className="text-center md:text-left -mt-24">
            <div className="inline-flex items-center bg-white px-4 py-3 shadow-lg shadow-[#b5cbff] rounded-full">
              <span className="bg-white flex items-center gap-2 text-[#444040] font-sans font-semibold">
                <img src={fourthcardicon} className="h-6 w-6" alt="" />
                <p className="font-sans">Fraud Detection</p>
              </span>
            </div>
            <h2 className="text-4xl font-bold text-[#413E3E] my-6">Real-time fraud alerts to catch risks early and protect your bottom line.</h2>
            <ul className="mt-4 text-[#2E2D2D] font-medium space-y-2">
              <li className="flex gap-1 items-center">
                <CheckCircleIcon size={14} color="#387EA2" /> Real-time fraud alerts for quick response
              </li>
              <li className="flex gap-1 items-center">
                <CheckCircleIcon size={14} color="#387EA2" /> Intelligent algorithms detect anomalies instantly
              </li>
              <li className="flex gap-1 items-center">
                <CheckCircleIcon size={14} color="#387EA2" /> Early risk detection to safeguard profits
              </li>
              <li className="flex gap-1 items-center">
                <CheckCircleIcon size={14} color="#387EA2" /> Proactive protection for your business
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-6 flex justify-center items-center">
          {/* <img src={card2img} alt="Billie Chatbot" className="w-3/4 md:w-full max-w-sm -mb-8" /> */}
          <ActionRequired message="Action Required: Please verify this transaction or contact support" />
        </div>
      </div>


    </div>
  )
}

export default Cards
