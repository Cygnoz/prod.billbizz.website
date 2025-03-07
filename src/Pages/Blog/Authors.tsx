import img4 from "../../assets/images/Rectangle 3003 (1).png";
import Twitter from "../../assets/icons/Twitter";
import Facebook from "../../assets/icons/Facebook";
import Instagram from "../../assets/icons/Instagram";

type Props = {}

function Authors({}: Props) {
  return (
    <div>
        <h3 className="text-[21px] font-semibold capitalize mb-5">
                  <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#EE3FD8] to-[#FFDD65]">
                    Our
                  </span>
                  <span className="text-[#222222]"> Authors</span>
                </h3>
                <div className="flex ">
                  <img src={img4} alt="" className="h-20 w-20" />
                  <div className="ps-3 space-y-2">
                    <p className="text-[#222222] text-[17px] font-semibold font-['Inter'] capitalize leading-[17px]">
                      Muhsin
                    </p>
                    <p className="text-[#666666] text-xs font-light font-['Inter'] capitalize leading-[18px]">
                      CEO Cygnoz
                    </p>
                    <div className="flex gap-2 pt-2">
                      <div className="border p-1 w-6 h-6 flex items-center justify-center rounded-md hover:bg-[#FFDD65] hover:text-white">
                        <Facebook />
                      </div>
                      <div className="border p-1 w-6 h-6 flex items-center justify-center rounded-md hover:bg-[#FFDD65] hover:text-white">
                        <Twitter />
                      </div>
                      <div className="border p-1 w-6 h-6 flex items-center justify-center hover:bg-[#FFDD65] rounded-md hover:text-white">
                        <Instagram />
                      </div>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default Authors