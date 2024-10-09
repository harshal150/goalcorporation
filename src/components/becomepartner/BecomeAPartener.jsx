import { useState, useEffect, useRef } from "react";
import "animate.css"; // Import Animate.css
import partner from '../../assets/becomepartner.jpg'

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

const professions = [
  "Agriculture/Farmer",
  "Builder",
  "Chartered Accountant",
  "DSA/DST",
  "Ex-banker",
  "Financial Analyst",
  "Financial Consultant",
  "Freelancer",
  "Insurance Advisor",
  "Loan Agent",
  "Mutual Fund Agent",
  "Real Estate Agent/Broker",
  "Tax Consultant",
  "Others",
];

const BecomeAPartner = () => {
  const [validated, setValidated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`container mx-auto my-10 ${
        isVisible ? "animate__animated animate__bounceIn" : ""
      }`}
    >
      <h1 className="text-4xl font-bold text-center text-blue-700 capitalize mb-10">
        We are committed to becoming India’s Leading Loan Distributor!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Form Section (2/3 width) */}
        <form
          className="space-y-6 col-span-2 "
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              className="w-full h-12 border border-gray-300 rounded-lg px-4 text-gray-800"
              placeholder="First Name"
            />
            <input
              type="text"
              className="w-full h-12 border border-gray-300 rounded-lg px-4 text-gray-800"
              placeholder="Middle Name"
            />
            <input
              type="text"
              className="w-full h-12 border border-gray-300 rounded-lg px-4 text-gray-800"
              placeholder="Last Name"
            />
            <input
              type="tel"
              className="w-full h-12 border border-gray-300 rounded-lg px-4 text-gray-800"
              placeholder="Mobile Number"
            />
            <input
              type="text"
              className="w-full h-12 border border-gray-300 rounded-lg px-4 text-gray-800"
              placeholder="Pan Number"
            />
            <input
              type="email"
              className="w-full h-12 border border-gray-300 rounded-lg px-4 text-gray-800"
              placeholder="Email"
            />
            <select className="w-full h-12 border border-gray-300 rounded-lg px-4 text-gray-500">
              <option value="">Select Profession</option>
              {professions.map((profession) => (
                <option key={profession} value={profession}>
                  {profession}
                </option>
              ))}
            </select>
            <select className="w-full h-12 border border-gray-300 rounded-lg px-4 text-gray-500">
              <option value="">Select State</option>
              {indianStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <input
              type="text"
              className="w-full h-12 border border-gray-300 rounded-lg px-4 text-gray-800"
              placeholder="City Name"
            />
          </div>

          <div className="flex items-center mt-4">
            <input
              id="agree"
              type="checkbox"
              className="h-4 w-4 border border-gray-300 rounded mr-2"
            />
            <label htmlFor="agree" className="text-sm text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-blue-600 underline">
                terms & conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 underline">
                privacy policy
              </a>.
            </label>
          </div>

          <button
            type="submit"
            className="w-full h-12 hover:bg-blue-600 bg-[#4ade80] text-white font-bold rounded-lg transition-all duration-300"
          >
            SUBMIT
          </button>
        </form>

        {/* Image Section (1/3 width) */}
        <div className="col-span-1">
          <img
            src={partner}
            alt="Partner Banner"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default BecomeAPartner;
