import React, { useState } from "react";

const professions = [
  "Software Engineer",
  "Doctor",
  "Teacher",
  "Business Owner",
  "Freelancer",
  "Lawyer",
  "Accountant",
  "Consultant",
  "Architect",
];

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const BecomeAPartner = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    panNumber: "",
    profession: "",
    state: "",
    city: "",
    mobileNumber: "",
    email: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-4">
      <form
        className="bg-white p-10 rounded-lg shadow-2xl max-w-3xl w-full space-y-6 transform hover:scale-105 transition-transform duration-300"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-extrabold text-blue-700 text-center mb-2">
          Become Our Loan Partner
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm font-medium">
          Join us today and unlock opportunities with Ruloans Loan Partner Program!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border-2 border-gray-200 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="First Name"
            />
          </div>
          {/* Middle Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Middle Name</label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              className="border-2 border-gray-200 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Middle Name"
            />
          </div>
          {/* Last Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border-2 border-gray-200 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Last Name"
            />
          </div>
          {/* Mobile Number */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              className="border-2 border-gray-200 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Mobile Number"
            />
          </div>
          {/* PAN Number */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">PAN Number</label>
            <input
              type="text"
              name="panNumber"
              value={formData.panNumber}
              onChange={handleChange}
              required
              className="border-2 border-gray-200 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="PAN Number"
            />
          </div>
          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-2 border-gray-200 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Email"
            />
          </div>
          {/* Profession */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Select Profession</label>
            <select
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              required
              className="border-2 border-gray-200 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option value="">Select Profession</option>
              {professions.map((profession, index) => (
                <option key={index} value={profession}>
                  {profession}
                </option>
              ))}
            </select>
          </div>
          {/* State */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Select State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="border-2 border-gray-200 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option value="">Select State</option>
              {indianStates.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          {/* City */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="border-2 border-gray-200 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="City"
            />
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            required
            className="mt-1"
          />
          <label className="text-gray-700 text-sm">
            I agree to the{" "}
            <a href="#" className="text-blue-500 underline hover:text-blue-700">
              terms & conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500 underline hover:text-blue-700">
              privacy policy
            </a>.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-sky-500 text-white py-3 rounded-lg font-semibold hover:bg-sky-600 hover:shadow-lg transition-all duration-300"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default BecomeAPartner;
