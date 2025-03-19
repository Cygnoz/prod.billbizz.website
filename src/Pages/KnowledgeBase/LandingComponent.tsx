import { useState } from "react";
import Rectangle from "../../assets/icons/Rectangle";
import bgimg from "../../assets/images/Group 39180.png";
import logo from "../../assets/icons/bill bizz logo-2 2.png";

type Props = {
  data?: { category: string; subCategory: string; article: string }[];
  setData?:any
};

const LandingComponent = ({ data,setData }: Props) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (data) {
      const results = data.filter(
        (item:any) =>
          item.categoryName?.toLowerCase().includes(query.toLowerCase()) ||
          item.subCategoryName?.toLowerCase().includes(query.toLowerCase()) ||
          item.article?.toLowerCase().includes(query.toLowerCase())
      );
      setData(results);
    }
  };

  console.log(data)

  return (
    <div>
    <div className="bg-[#620000] min-h-[457px] grid grid-cols-1 lg:grid-cols-2">
      {/* Left Content */}
      <div className="p-8 flex flex-col justify-center">
        <div className="flex gap-2 items-center">
          <img src={logo} alt="BillBizz Logo" className="h-7 w-6" />
          <p className="text-[#F7E7CE] font-medium">BILLBIZZ</p>
        </div>

        <div className="text-[#F7E7CE] p-4 md:p-10 space-y-4">
          <p className="text-lg flex items-center">
            <Rectangle />
            <span className="ml-3">FIND ANSWERS, FASTER.</span>
          </p>

          <p className="font-bold text-2xl md:text-[34px] leading-tight">
            Empower Your Support with Knowledge Base
          </p>

          { data && <div className="flex w-full max-w-xl">
              <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Serach your queries here"
                className=" opacity-25 h-[50px] rounded-l-[50px] text-white p-5 border-collapse w-80 "
              />{" "}
              <button className="bg-white h-[50px] lg:px-7 rounded-r-[50px] text-[#620000] "   onClick={handleSearch}>
                Search
              </button>
            </div>}
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden lg:flex justify-end items-center">
        <img src={bgimg} alt="Background" className="h-full w-auto object-cover" />
      </div>
    </div>
    </div>
  );
};

export default LandingComponent;
