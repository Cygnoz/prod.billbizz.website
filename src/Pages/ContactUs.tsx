import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "General Inquiry",
    message: ""
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="m-5 rounded-lg ">
      <div className="bg-[#f2f2f2]  rounded-2xl  ps-14 py-5 flex">
        <div>
          <h2 className="text-[64px] font-semibold">We’d Love to <br /> Hear From You</h2>
          <p className="text-[#5F5E5E] text-2xl mt-2 mb-5">Have questions or want to collaborate? We’re just a message <br /> away! Let’s work together to bring your ideas to life.</p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div className=" mx-auto p-6 grid md:grid-cols-2 gap-8">


        <div>

          <div className="mt-6 ms-14">
            <p className="text-[64px] font-semibold text-black">Drop us a <br /> message—  <br /><span className="text-[#750707]">we’re here to <br /> help</span></p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-600">📞 +1012 3456 789</p>
              <p className="text-gray-600">✉️ demo@gmail.com</p>
              <p className="text-gray-600">📍 132 Dartmouth Street, Boston, MA 02156, United States</p>
            </div>
          </div>
        </div>

        <div className="bg-[#F7E7CE] p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Contact Information</h3>
          <p className="text-gray-600 mb-4">Say something to start a live chat!</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* <div className="grid grid-cols-2 gap-4">
                <input type="text" name="firstName" placeholder="First Name" className="my-1 border-b border-[#820000] text-[#820000] text-sm font-normal bg-[#F7E7CE] focus:ring-0 focus:outline-none w-full p-2 outline-none" onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" className="border-b w-full p-2 outline-none" onChange={handleChange} required />
              </div>
              <input type="email" name="email" placeholder="Email" className="border-b w-full p-2 outline-none" onChange={handleChange} required />
              <input type="tel" name="phoneNumber" placeholder="Phone Number" className="border-b w-full p-2 outline-none" onChange={handleChange} required /> */}
            <div className="grid grid-cols-2 gap-10">
              <div className="w-full mt-6">
                <label className="text-[#820000] text-lg font-semibold block">First Name</label>
                <input type="text" placeholder="" className="my-1 border-b border-[#820000] text-[#820000] text-sm font-normal bg-[#F7E7CE] focus:ring-0 focus:outline-none w-full p-2 outline-none" onChange={handleChange} required />
              </div>
              <div className="w-full mt-6">
                <label className="text-[#820000] text-lg font-semibold block">Last Name</label>
                <input type="text" placeholder="" className="my-1 border-b border-[#820000] text-[#820000] text-sm font-normal bg-[#F7E7CE] focus:ring-0 focus:outline-none w-full p-2 outline-none" onChange={handleChange} required />
              </div>
              <div className="w-full">
                <label className="text-[#820000] text-lg font-semibold block">Email</label>
                <input type="text" placeholder="" className="my-1 border-b border-[#820000] text-[#820000] text-sm font-normal bg-[#F7E7CE] focus:ring-0 focus:outline-none w-full p-2 outline-none" onChange={handleChange} required />
              </div>
              <div className="w-full">
                <label className="text-[#820000] text-lg font-semibold block">Phone Number</label>
                <input type="text" placeholder="" className="my-1 border-b border-[#820000] text-[#820000] text-sm font-normal bg-[#F7E7CE] focus:ring-0 focus:outline-none w-full p-2 outline-none" onChange={handleChange} required />
              </div>
              <div className="w-full">
                <label className="text-[#820000] text-lg font-semibold block">Company Name</label>
                <input type="text" placeholder="" className="my-1 border-b border-[#820000] text-[#820000] text-sm font-normal bg-[#F7E7CE] focus:ring-0 focus:outline-none w-full p-2 outline-none" onChange={handleChange} required />
              </div>
              <div className="w-full">
                <label className="text-[#820000] text-lg font-semibold block">Company Adress</label>
                <input type="text" placeholder="" className="my-1 border-b border-[#820000] text-[#820000] text-sm font-normal bg-[#F7E7CE] focus:ring-0 focus:outline-none w-full p-2 outline-none" onChange={handleChange} required />
              </div>
            </div>
            <div className="">
              <p className="font-semibold">Select Subject?</p>
              <div className="flex gap-4 mt-3">
                {["General Inquiry", "Need Assistance", "Business Opportunity", "Consultation"].map((subject) => (
                  <label key={subject} className="flex items-center gap-2">
                    <input type="radio" name="subject" value={subject} checked={formData.subject === subject} onChange={handleChange} />
                    {subject}
                  </label>
                ))}
              </div>
            </div>
            <label className="text-[#820000] text-xl font-normal block">Message</label>
            <textarea name="message" placeholder="Write your message..." className="border-b border-[#820000] text-[#820000] text-sm font-normal bg-[#F7E7CE] focus:ring-0 focus:outline-none w-full p-2 outline-none" onChange={handleChange} required rows={1}/>
            <button type="submit" className="bg-black text-white w-full py-2 rounded">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
