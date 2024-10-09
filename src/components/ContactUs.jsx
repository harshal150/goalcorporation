import { useState } from "react";
import { motion } from "framer-motion";
import { AddressMap } from "./CompanyMapLocation";
import { Navbar } from "./Navbar";
import Footer from "./Footer";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const AboutContact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div className="home-page-container" style={{ overflowX: 'hidden' }}>
      <Navbar />

      <section className="container mx-2 my-10">
        <h1 className="text-5xl font-bold text-center text-indigo-800 mb-10">
          CONTACT US
        </h1>

        {/* Note Section */}
        <div className="max-w-6xl mx-auto bg-red-100 p-4 mb-6 rounded-md text-sm">
          <p className="flex items-center">
            <span className="text-yellow-600 text-lg mr-2">⚠️</span>
            <strong>Note:</strong> We do not charge for our services to customers. If any personnel takes any charges other than bank fees, please immediately contact our toll-free number.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {/* Left: Form */}
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
            className="space-y-6 lg:col-span-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                className="w-full h-12 border border-gray-300 rounded-md p-4"
                placeholder="Name"
              />
              <input
                type="email"
                className="w-full h-12 border border-gray-300 rounded-md p-4"
                placeholder="Email Id"
              />
              <input
                type="tel"
                className="w-full h-12 border border-gray-300 rounded-md p-4"
                placeholder="Mobile Number"
              />
              <select className="w-full h-12 border border-gray-300 rounded-md text-gray-500 px-4">
                <option value="" className="text-gray-500">
                  Select State
                </option>
                {indianStates.map((state) => (
                  <option key={state} value={state} className="text-gray-800">
                    {state}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className="w-full h-12 border border-gray-300 rounded-md p-4"
                placeholder="City"
              />
              <select className="w-full h-12 border border-gray-300 rounded-md text-gray-500 px-4">
                <option value="" className="text-gray-500">
                  Reason to Connect
                </option>
                <option className="text-gray-800">Inquiry</option>
                <option className="text-gray-800">Support</option>
                <option className="text-gray-800">Feedback</option>
              </select>
            </div>
            <input
              type="text"
              className="w-full h-12 border border-gray-300 rounded-md p-4"
              placeholder="Subject"
            />
            <textarea
              className="w-full border border-gray-300 rounded-md p-4"
              rows="4"
              placeholder="Message"
            ></textarea>
            <button
              type="submit"
              className="w-full h-12 hover:bg-blue-600 bg-[#4ade80] text-white font-bold rounded-md"
            >
              SEND MESSAGE
            </button>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <p className="font-bold">WORKING HOURS</p>
                <p>MON-SAT</p>
                <p>09:30 AM - 06:30 PM</p>
              </div>
              <div className="text-center">
                <p className="font-bold">Head Office</p>
                <p>
                  Goal Corporation Pvt Ltd No 250/15, Ground Floor,6th Cross,
                  9th Main,2nd Block,
                </p>
                <p>Jayanagar, Bangalore - 560011, Karnataka, India</p>
              </div>

              <div className="text-center">
                <p className="font-bold">EMAIL</p>
                <a
                  href="mailto:info@goalcorporation.com"
                  className="text-blue-500 hover:text-blue-700 font-bold"
                >
                  info@goalcorporation.com
                </a>
              </div>
              <div className="text-center">
                <p className="font-bold">PHONE</p>
                <a
                  href="tel:+91 9606 96 5186"
                  className="text-blue-500 hover:text-blue-700 font-bold"
                >
                  +91 9606 96 5186
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Address Map */}
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
            className="h-full lg:col-span-4"
          >
            <AddressMap />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutContact;
