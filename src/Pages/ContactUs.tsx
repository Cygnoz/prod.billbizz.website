import { useState } from "react";
import bgimg from "../assets/images/contactUs.png";
import useApi from "../Hooks/useApi";
import { endpoints } from "../Services/ApiEndpoints";
import toast, { Toaster } from "react-hot-toast";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    project: "BillBizz",
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    companyName: "",
    companyAddress: "",
    subject: "",
    message: "",
  })

  const { request: addContact } = useApi('post', 3001)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await addContact(endpoints.ADD_CONTACT, formData);
  
      console.log("Result:", result); // Debugging log
  
      if (result?.response && !result?.error) {
        const successMessage = result.response.data?.message || "Message sent successfully!";
        toast.success(successMessage, { duration: 3000 }); // Ensure toast displays
        setTimeout(() => {
          window.location.reload(); // or navigate('/some-route') if using React Router
        }, 1000);
      } else {
        const errorMessage = result?.error?.response?.data?.message || "Something went wrong.";
        toast.error(errorMessage, { duration: 3000 });
      }
    } catch (error: any) {
      console.error("Error occurred:", error);
      toast.error(error?.message || "An unexpected error occurred.", { duration: 3000 });
    }
  };

  return (
    <div className="m-5 rounded-lg">
      <div className="bg-[#f2f2f2] rounded-2xl px-8 py-6 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-[64px] font-semibold leading-tight">
            We’d Love to <br /> Hear From You
          </h2>
          <p className="text-[#5F5E5E] text-lg md:text-2xl mt-4">
            Have questions or want to collaborate? We’re just a message away! Let’s work together to bring your ideas to life.
          </p>
        </div>
        <div className=" lg:mt-0 lg:ml-auto">
          <img src={bgimg} loading="lazy" alt="" className="w-[400px] mt-6 h-[240px]" />
        </div>
      </div>

      <div className="mx-auto p-6 grid gap-8 md:grid-cols-2">
        <div className="lg:mt-48 lg:ml-24">
          <h3 className="text-4xl md:text-6xl font-semibold text-black">
            Drop us a <br /> message— <br />
            <span className="text-[#750707]">we’re here to <br /> help</span>
          </h3>

        </div>

        <div className="bg-[#F7E7CE] p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Contact Information</h3>
          <p className="text-gray-600 mb-4">Say something to start a live chat!</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="w-full">
                <label className="text-[#820000] text-lg font-semibold block">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter First Name"
                  className="my-1 border-b border-[#820000] text-[#820000] text-sm font-normal bg-[#F7E7CE] focus:ring-0 focus:outline-none w-full p-2"
                  required
                />
              </div>
              <div className="w-full">
                <label className="text-[#820000] text-lg font-semibold block">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter Last Name"
                  className="my-1 border-b border-[#820000] text-[#820000] text-sm font-normal bg-[#F7E7CE] focus:ring-0 focus:outline-none w-full p-2"
                  required
                />
              </div>
              <div className="w-full">
                <label className="text-[#820000] text-lg font-semibold block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Email"
                  className="my-1 border-b border-[#820000] text-[#820000] text-sm font-normal bg-[#F7E7CE] focus:ring-0 focus:outline-none w-full p-2"
                  required
                />
              </div>
              <div className="w-full">
                <label className="text-[#820000] text-lg font-semibold block">
                  Phone Number
                </label>
                {/* <input
                    type="text"
                    name="phoneNo"
                    maxLength={10}
                    value={formData.phoneNo}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, ""); 
                      if (value.length <= 10) {
                        handleInputChange(e); 
                      }
                    }}
                    placeholder="Enter Phone No"
                    className="my-1 border-b border-[#820000] text-[#820000] text-sm font-normal bg-[#F7E7CE] focus:ring-0 focus:outline-none w-full p-2"
                    required
                  /> */}
                <input
                  type="text"
                  name="phoneNo"
                  maxLength={10}
                  value={formData.phoneNo}
                  onChange={(e) => {
                    const numericValue = e.target.value.replace(/\D/g, ""); // Keep only digits

                    if (numericValue.length <= 10) {
                      // Create a new event-like object with the filtered value
                      handleInputChange({
                        target: {
                          name: e.target.name,
                          value: numericValue,
                        },
                      } as React.ChangeEvent<HTMLInputElement>);
                    }
                  }}
                  placeholder="Enter Phone No"
                  className="my-1 border-b border-[#820000] text-[#820000] text-sm font-normal bg-[#F7E7CE] focus:ring-0 focus:outline-none w-full p-2"
                  required
                />

              </div>
              <div className="w-full">
                <label className="text-[#820000] text-lg font-semibold block">
                  Comapny Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Enter Company Name"
                  className="my-1 border-b border-[#820000] text-[#820000] text-sm font-normal bg-[#F7E7CE] focus:ring-0 focus:outline-none w-full p-2"
                  required
                />
              </div>
              <div className="w-full">
                <label className="text-[#820000] text-lg font-semibold block">
                  Company Address
                </label>
                <input
                  type="text"
                  name="companyAddress"
                  value={formData.companyAddress}
                  onChange={handleInputChange}
                  placeholder="Enter Address"
                  className="my-1 border-b border-[#820000] text-[#820000] text-sm font-normal bg-[#F7E7CE] focus:ring-0 focus:outline-none w-full p-2"
                  required
                />
              </div>
            </div>

            <div>
              <p className="font-semibold">Select Subject</p>
              <div className="flex flex-wrap gap-4 mt-3">
                {["General Inquiry", "Need Assistance", "Business Opportunity", "Consultation"].map((subject) => (
                  <label key={subject} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="subject"
                      value={subject}
                      checked={formData.subject === subject}
                      onChange={handleInputChange}
                    />
                    {subject}
                  </label>
                ))}
              </div>
            </div>

            <label className="text-[#820000] text-xl font-normal block">
              Message
            </label>
            <textarea
              typeof="text"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Write your message..."
              className="border-b border-[#820000] text-[#820000] text-sm font-normal bg-[#F7E7CE] focus:ring-0 focus:outline-none w-full p-2"
              required
              rows={3}
            />

            <button
              type="submit"
              className="bg-black text-white w-full py-3 rounded-lg hover:bg-[#820000] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ContactUs;
