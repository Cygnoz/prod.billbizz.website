import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import signupbg from "../assets/images/signupBG.png";
import future from "../assets/images/Future-proof cloud tools for your evolving needs.png";
import billbizz from "../assets/icons/Billbizz-Logo_White 1.png";
import { endpoints } from "../Services/ApiEndpoints";
import useApi from "../Hooks/useApi";
import toast from "react-hot-toast";
import ChevronDown from "../assets/icons/ChevronDown";


interface ReusableModalProps {
  open: boolean;
  onClose: () => void;
  onAction: () => void;
}

const ReusableModal: React.FC<ReusableModalProps> = ({
  open,
  onClose,

}) => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    project: "SewNex",
    companyName: "",
    phone: "",
    companyAddress: "",
    email: "",
    country: "",
    regionId: "",
    areaId: "",
  });

  // State for dropdown options
  const [options, setOptions] = useState({
    country: [
      { value: 'India', label: 'India' },
      { value: 'UAE', label: 'UAE' },
      { value: "Saudi Arabia", label: 'Saudi Arabia' }
    ] as { value: string; label: string }[],
    region: [] as { value: string; label: string }[],
    area: [] as { value: string; label: string; regionId: string }[],
    filteredArea: [] as { value: string; label: string; regionId: string }[],
  });
  const { request: getRegionArea } = useApi('get', 3003)
  const { request: addWebsiteLead } = useApi('post', 3001)

  const getAreaRegion = async () => {
    try {
      console.log("end", endpoints.GET_REGION_AREA);

      const { response, error } = await getRegionArea(endpoints.GET_REGION_AREA)
      if (response && !error) {
        console.log("res", response);
        const regionData = response.data?.regions.map((reg: any) => ({
          label: reg.regionName,
          value: reg._id
        }))
        const areaData = response.data?.areas.map((reg: any) => ({
          label: reg.areaName,
          value: reg._id,
          regionId: reg.region._id
        }))
        setOptions((prev) => ({
          ...prev,
          region: regionData,
          area: areaData
        }))
      } else {
        console.log("err", error)
      }
    } catch (err) {
      console.log("err", err);
    }
  }

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.firstName) {
      toast.error("First Name is required");
      return false;
    }
    if (!formData.lastName) {
      toast.error("Last Name is required");
      return false;
    }
    if (!formData.phone) {
      toast.error("Mobile Number is required");
      return false;
    }
    if (!formData.country) {
      toast.error("Country is required");
      return false;
    }
    if (!formData.regionId) {
      toast.error("Region is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      try {
        const { response, error } = await addWebsiteLead(endpoints.ADD_WEBSITE_LEAD, formData)
        console.log("res", response)
        console.log('err', error)
        if (response && !error) {
          toast.success(response.data.message)
          onClose()
        } else {
          toast.error(error.response.data.message)
        }
      } catch (err) {
        console.log("err", err);

      }
      // Proceed with API call or other logic
    }
  };

  useEffect(() => {
    getAreaRegion()
  }, [])

  useEffect(() => {
    if (formData.regionId) {
      const filteredArea = options.area.filter((area) => area.regionId === formData.regionId);

      setOptions((prev) => ({
        ...prev,
        filteredArea, // Store the filtered list separately
      }));
    }
  }, [formData.regionId]);

  console.log("op", options.area)
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
              <div className="flex gap-2">
              <img src={billbizz} alt="" className="w-[50px] h-[50px] mb-7" />
              <p className="text-[#232222] text-3xl font-medium mt-2">BillBizz</p>
              </div>
                <h5 className=" font-bold pb-5 text-xl">Sign Up</h5>
                <form onSubmit={handleSubmit} className="grid grid-cols-2  text-[#2D3748] gap-6">
                  {/* First Name */}
                  <div className="col-span-1 max-[530px]:col-span-2">
                    <label className="block text-sm font-medium">
                      First name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full p-2 border-[#D1D1D1] border rounded-md"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="col-span-1 max-[530px]:col-span-2">
                    <label className="block text-sm font-medium">
                      Last name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full p-2 border-[#D1D1D1] border rounded-md"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="col-span-1 max-[530px]:col-span-2">
                    <label className="block text-sm font-medium">Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full p-2 border-[#D1D1D1] border rounded-md"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="col-span-1 max-[530px]:col-span-2">
                    <label className="block text-sm font-medium">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-2 border-[#D1D1D1] border rounded-md"
                    />
                  </div>

                  {/* Company Address */}
                  <div className="col-span-2">
                    <label className="block text-sm font-medium">
                      Company Address
                    </label>
                    <input
                      type="text"
                      name="companyAddress"
                      value={formData.companyAddress}
                      onChange={handleInputChange}
                      className="w-full p-2 border-[#D1D1D1] border rounded-md"
                    />
                  </div>

                  {/* Email */}
                  <div className="col-span-1 max-[530px]:col-span-2">
                    <label className="block text-sm font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 border-[#D1D1D1] border rounded-md"
                    />
                  </div>

                  {/* Country Dropdown */}
                  <div className="col-span-1 max-[530px]:col-span-2">
                    <label className="block text-sm font-medium">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="block w-full h-9 px-3 pr-8 text-sm border border-[#D1D1D1] rounded-md appearance-none"
                      >
                        <option value="">Select</option>
                        {options.country.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                        <ChevronDown color="gray" />
                      </div>
                    </div>
                  </div>

                  {/* Region Dropdown */}
                  <div className="col-span-1 max-[530px]:col-span-2">
                    <label className="block text-sm font-medium">
                      Region <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="regionId"
                        value={formData.regionId}
                        onChange={handleInputChange}
                        className="block w-full h-9 px-3 pr-8 text-sm border border-[#D1D1D1] rounded-md appearance-none"
                      >
                        <option value="">Select Region</option>
                        {options.region.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                        <ChevronDown color="gray" />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 max-[530px]:col-span-2">
                    <label className="block text-sm font-medium">
                      Area<span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="areaId"
                        value={formData.areaId}
                        onChange={handleInputChange}
                        className="block w-full h-9 px-3 pr-8 text-sm border border-[#D1D1D1] rounded-md appearance-none"
                      >
                        <option value="">
                          {formData?.regionId === "" ? "Select Region" : "Select Area"}
                        </option>
                        {formData.regionId &&
                          options?.filteredArea.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                      </select>
                      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                        <ChevronDown color="gray" />
                      </div>
                    </div>

                  </div>

                  {/* Sign Up Button */}
                  <div className="col-span-2 flex justify-start mt-4">
                    <button type="submit" className="bg-[#19A761] text-white px-14 py-2 rounded-2xl hover:bg-green-600">
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
