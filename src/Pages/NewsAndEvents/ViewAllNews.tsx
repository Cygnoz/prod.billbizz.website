import { useState } from "react";
import ChevronLeft from "../../assets/icons/ChevronLeft"
import Clock from "../../assets/icons/Clock";
import Calendar from "../../assets/icons/Calendar";
import image1 from '../../assets/images/Frame 1618873150.png'
import { useNavigate } from "react-router-dom";
import FilterIcon from "../../assets/icons/FilterIcon";
type Props = {}

const ViewAllNews = ({ }: Props) => {
    const [searchTerm, setSearchTerm] = useState("");
    console.log(searchTerm);
    
    const navigate=useNavigate()
    return (
        <div>
            <div className="p-6">
                <div className="flex items-center justify-between">
                    <div className="flex gap-4 items-center">
                        <div onClick={() => navigate("/news-and-events")} className="bg-[#5D5D5D1A] w-12 h-12 cursor-pointer rounded-full border-2 border-[#FFFFFFA6] items-center flex justify-center">
                            <ChevronLeft size={20} />
                        </div>
                        <p className="text-2xl font-bold text-black">
                            News
                        </p>
                    </div>
                    <div className="flex gap-4">
                    <div className="bg-[#FFFFFF] rounded-3xl w-fit h-11 border items-center flex justify-center px-3 gap-2">
                        <FilterIcon/>
                            <p className="text-[#565148] text-sm font-normal">News Category</p>
                        </div>
                    <div className="flex items-center w-80 max-w-sm rounded-[20px] border px-4 py-2">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full outline-none bg-transparent pl-2 text-[#565148] text-sm font-normal"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    </div>
                </div>
                <div onClick={() => navigate("/news-and-events/view-all-news/view-news")} className="mx-3 my-4 border-b pb-4 cursor-pointer">
                    <div className="grid grid-cols-12  gap-5">
                        <div className="col-span-2 flex items-center justify-center">
                            <img src={image1} alt="News" className=" h-[124px] w-full " />
                        </div>
                        <div className="col-span-10">
                            <h2 className="text-xl font-semibold my-3">Exciting Launch Ahead: BizTrack ERP Software Set to Transform Inventory Management!</h2>
                            <div className="flex items-center text-gray-500 text-sm mt-1 space-x-3">
                                {/* <div className="flex items-center gap-2 me-2">
                                    <Calendar />
                                    <span> </span>
                                </div> | */}
                                <div className="bg-[#EAD1D1] rounded-3xl w-44 h-7 flex gap-3 items-center px-4">
                                    <div className="bg-[#393939] rounded-full w-2 h-2"></div>
                                    <p>ERP Software</p>
                                </div>
                                <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
                                <div className="flex items-center gap-2 me-2">
                                    <Calendar />
                                    <span>02 december 2022</span>
                                </div> 
                                <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
                                <div className="flex items-center gap-2">
                                    <Clock />
                                    <span>8 Hours Ago</span>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm mt-3 ">
                                <p
                                    className="text-lg font-semibold whitespace-pre-wrap text-black mt-2"
                                    // dangerouslySetInnerHTML={{
                                    //     __html: DOMPurify.sanitize(item.content),
                                    // }}
                                />
                                Join industry leaders, business owners, and financial experts at the Bill Bizz Annual Business Summit 2025. This event will cover the latest trends in billing and financial management, product updates, and networking opportunities.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mx-3 my-4 border-b pb-4">
                    <div className="grid grid-cols-12  gap-5">
                        <div className="col-span-2 flex items-center justify-center">
                            <img src={image1} alt="News" className=" h-[124px] w-full " />
                        </div>
                        <div className="col-span-10">
                            <h2 className="text-xl font-semibold my-3">Exciting Launch Ahead: BizTrack ERP Software Set to Transform Inventory Management!</h2>
                            <div className="flex items-center text-gray-500 text-sm mt-1 space-x-3">
                                <div className="bg-[#EAD1D1] rounded-3xl w-44 h-7 flex gap-3 items-center px-4">
                                    <div className="bg-[#393939] rounded-full w-2 h-2"></div>
                                    <p>ERP Software</p>
                                </div>
                                <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
                                <div className="flex items-center gap-2 me-2">
                                    <Calendar />
                                    <span>02 december 2022</span>
                                </div>
                                <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
                                <div className="flex items-center gap-2">
                                    <Clock />
                                    <span>8 Hours Ago</span>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm mt-3 ">
                                <p
                                    className="text-lg font-semibold whitespace-pre-wrap text-black mt-2"
                                    // dangerouslySetInnerHTML={{
                                    //     __html: DOMPurify.sanitize(item.content),
                                    // }}
                                />
                                Join industry leaders, business owners, and financial experts at the Bill Bizz Annual Business Summit 2025. This event will cover the latest trends in billing and financial management, product updates, and networking opportunities.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mx-3 my-4 border-b pb-4">
                    <div className="grid grid-cols-12  gap-5">
                        <div className="col-span-2 flex items-center justify-center">
                            <img src={image1} alt="News" className=" h-[124px] w-full " />
                        </div>
                        <div className="col-span-10">
                            <h2 className="text-xl font-semibold my-3">Exciting Launch Ahead: BizTrack ERP Software Set to Transform Inventory Management!</h2>
                            <div className="flex items-center text-gray-500 text-sm mt-1 space-x-3">
                                {/* <div className="flex items-center gap-2 me-2">
                                    <Calendar />
                                    <span> </span>
                                </div> | */}
                                <div className="bg-[#EAD1D1] rounded-3xl w-44 h-7 flex gap-3 items-center px-4">
                                    <div className="bg-[#393939] rounded-full w-2 h-2"></div>
                                    <p>ERP Software</p>
                                </div>
                                <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
                                <div className="flex items-center gap-2 me-2">
                                    <Calendar />
                                    <span>02 december 2022</span>
                                </div> 
                                <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
                                <div className="flex items-center gap-2">
                                    <Clock />
                                    <span>8 Hours Ago</span>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm mt-3 ">
                                <p
                                    className="text-lg font-semibold whitespace-pre-wrap text-black mt-2"
                                    // dangerouslySetInnerHTML={{
                                    //     __html: DOMPurify.sanitize(item.content),
                                    // }}
                                />
                                Join industry leaders, business owners, and financial experts at the Bill Bizz Annual Business Summit 2025. This event will cover the latest trends in billing and financial management, product updates, and networking opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllNews