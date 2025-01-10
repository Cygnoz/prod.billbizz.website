import React from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import signupbg from "../assets/images/signupBG.png";
import future from "../assets/images/Future-proof cloud tools for your evolving needs.png";
import billbizz from "../assets/icons/Billbizz-Logo_White 1.png";

interface ReusableModalProps {
  open: boolean;
  onClose: () => void;
  onAction: () => void;
}

const ReusableModal: React.FC<ReusableModalProps> = ({
  open,
  onClose,
 
}) => {
  return (
    <Modal open={open} onClose={onClose} closeAfterTransition>
      <Fade in={open}>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 ">
          <div className="w-[1320px] h-[]720px bg-slate-200 relative rounded-xl">
            <div className="flex">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-black font-bold text-2xl rounded-lg p-2  hover:bg-gray-100 focus:outline-none"
              >
                ✕
              </button>

              <div
                className="w-full lg:w-1/3 p-8 flex items-center rounded-l-xl"
                style={{
                  backgroundImage: `url(${signupbg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h2 className="text-3xl font-bold">
                  <img src={future} alt="Future-proof cloud tools" />
                </h2>
              </div>

              <div className="w-full lg:w-2/3 bg-white text-black p-8 rounded-xl">
                <img src={billbizz} alt="" className="w-[50px] h-[50px] mb-7" />
                <h5 className=" font-bold pb-5 text-xl">Sign Up</h5>
                <form className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                  {/* First Name */}
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-sans mb-2"
                      htmlFor="first-name"
                    >
                      First Name <span className='text-red-600'>*</span>
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="first-name"
                      type="text"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-sans mb-2"
                      htmlFor="last-name"
                    >
                      Last Name <span className='text-red-600'>*</span>
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="last-name"
                      type="text"
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-sans mb-2"
                      htmlFor="company-name"
                    >
                      Company Name 
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="company-name"
                      type="text"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-sans mb-2"
                      htmlFor="mobile-number"
                    >
                      Mobile Number <span className='text-red-600'>*</span>
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="mobile-number"
                      type="text"
                    />
                  </div>

                  {/* Company Address */}
                  <div className="col-span-2">
                    <label
                      className="block text-gray-700 text-sm font-sans mb-2"
                      htmlFor="company-address"
                    >
                      Company Address
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="company-address"
                      type="text"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-sans mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                    />
                  </div>

                  {/* Country */}
                  <div className="relative">
                    <label
                      className="block text-gray-700 text-sm font-sans mb-2"
                      htmlFor="state"
                    >
                      State <span className='text-red-600'>*</span>
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="state"
                    >
                      <option value="">Select</option>
                      <option value="california">IND</option>
                      <option value="texas">JAP</option>

                      {/* Add more options as needed */}
                    </select>
                    <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                      <svg
                        className="w-6 h-6 text-gray-700 mt-7"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* State */}
                  <div className="relative">
                    <label
                      className="block text-gray-700 text-sm font-sans mb-2"
                      htmlFor="state"
                    >
                      State <span className="text-red-600">*</span>
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="state"
                    >
                      <option value="">Select</option>
                      <option value="california">Kerala</option>

                      {/* Add more options as needed */}
                    </select>
                    <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                      <svg
                        className="w-6 h-6 text-gray-700 mt-7"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* City */}
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-sans mb-2"
                      htmlFor="city"
                    >
                      City
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="city"
                      type="text"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="col-span-2 flex items-center justify-start mt-4 ">
                    <button
                      className="bg-[#CC1111] hover:bg-red-700 text-white font-sans py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-[204px]"
                      type="button"
                      style={{
                        background:
                          "linear-gradient(272.11deg, #CC1111 4.31%, #8F0100 92.61%)",
                      }}
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default ReusableModal;
