import Calendar from "../../assets/icons/Calendar";
import Clock from "../../assets/icons/Clock";
import img3 from "../../assets/images/Rectangle 2977.png";
import img from "../../assets/images/Ellipse 322.png";

type Props = {}

function RecentlyUploaded({}: Props) {
  return (
    <div>
        <div className=" flex">
              <img src={img3} className="w-[266px] h-[180px] rounded-[5px]" />
              <div className="ps-4">
                <span className="h-5 px-2 py-1 bg-[#f3e6e6] rounded-[3px] text-xs font-normal capitalize leading-3 text-[#666666]">
                  CRM
                </span>
                <p className="w-[642px] text-[27px] font-semibold capitalize leading-[37.80px] text-[#222222]">
                  How Bill Bizz Simplifies Inventory Management
                </p>
                <div className="flex items-center gap-2 text-xs text-[#777777] mt-2">
                  <img
                    src={img}
                    alt=""
                    className="h-[18px] w-[18px] rounded-full"
                  />
                  <span>Jenny kiaa</span> |
                  <Calendar /> <span>02 December 2022</span> |
                  <Clock /> <span>3 Min. to Read</span>
                </div>
                <p className="w-[401px] mt-4 text-[15px] text-[#555555] leading-snug">
                  Expense tracking isn’t just about recording numbers; it’s
                  about making informed financial decisions.
                </p>
              </div>
            </div>
    </div>
  )
}

export default RecentlyUploaded