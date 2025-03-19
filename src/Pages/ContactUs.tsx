import { useState } from "react";
import bgimg from "../assets/images/contactUs.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    companyAddress: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="m-5 rounded-lg">
      <div className="bg-[#f2f2f2] rounded-2xl px-8 py-6 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
            We’d Love to <br /> Hear From You
          </h2>
          <p className="text-[#5F5E5E] text-lg md:text-2xl mt-4">
            Have questions or want to collaborate? We’re just a message away! Let’s work together to bring your ideas to life.
          </p>
        </div>
        <div className=" lg:mt-0 lg:ml-auto">
          <img src={bgimg} alt="" className="w-[400px] mt-6 h-[240px]" />
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
              {[
                { label: "First Name", name: "firstName" },
                { label: "Last Name", name: "lastName" },
                { label: "Email", name: "email" },
                { label: "Phone Number", name: "phoneNumber" },
                { label: "Company Name", name: "companyName" },
                { label: "Company Address", name: "companyAddress" },
              ].map((field) => (
                <div key={field.name} className="w-full">
                  <label className="text-[#820000] text-lg font-semibold block">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    name={field.name}
                    value={(formData as any)[field.name]}
                    onChange={handleChange}
                    placeholder=""
                    className="my-1 border-b border-[#820000] text-[#820000] text-sm font-normal bg-[#F7E7CE] focus:ring-0 focus:outline-none w-full p-2"
                    required
                  />
                </div>
              ))}
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
                      onChange={handleChange}
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
              name="message"
              value={formData.message}
              onChange={handleChange}
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
    </div>
  );
};

export default ContactUs;
