import Rectangle from '../../assets/icons/Rectangle'
import bgimg from "../../assets/images/Group 39180.png";
import logo from "../../assets/icons/bill bizz logo-2 2.png";


const LandingComponent = ( ) => {
  return (
    <div>
         <div className="bg-[#620000] h-[457px] grid grid-cols-2">
        <div className="p-8">
          <div className="flex gap-2 items-center">
            <img src={logo} alt="" className="h-[28px] w-[22px]" />{" "}
            <p className="text-[#F7E7CE] font-medium">BILLBIZZ</p>
          </div>
          <div className="text-[#F7E7CE] p-10 justify-center space-y-4">
            <p className="text-lg flex items-center">
              {" "}
              <Rectangle /> <span className="ms-3"> FIND ANSWERS, FASTER.</span>
            </p>

            <p className="font-bold text-[34px]">
              Empower Your Support with Knowledge Base
            </p>
            <div className="flex ">
              <input
                type="text"
                placeholder="Serach your queries here"
                className=" opacity-25 h-[50px] rounded-l-[50px] text-white p-5 border-collapse w-80 "
              />{" "}
              <button className="bg-white h-[50px] px-7 rounded-r-[50px] text-[#620000] ">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <img src={bgimg} alt="" className="h-full w-" />
        </div>
      </div>
    </div>
  )
}

export default LandingComponent