import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitterSquare,
  faYoutube,
  faFacebookSquare,
  faPinterest,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import logo from '../assets/Goal logo orange.png'

const quickLinks = [
  { value: "Company Profile", href: "/about" },
  { value: "Director Message", href: "/about" },
  { value: "Vision & Mission", href: "/about" },
  { value: "Our Approach", href: "/about" },
];

const socialMedia = [
  { value: "Facebook", href: "www.facebook.com" },
  { value: "Instagram", href: "#!" },
  { value: "LinkedIn", href: "#!" },
  { value: "Twitter", href: "#!" },
];

const jobInfo = [
  { value: "Select", href: "#!" },
  { value: "Service", href: "#!" },
  { value: "Payment", href: "#!" },
];









const equipment = [
  { value: "Home Loan", href: "/homeloan" },
  { value: "Loan Against Property", href: "/loanagaints" },
  { value: "Working Capital Loan", href: "/workingcapital" },
  { value: "Business Loan", href: "/businessloan" },
  { value: "Personal Loan", href: "personalloan" },
  { value: "Debt Restructuring", href: "/debtrestructure" },
];

const language = [
  {
    value: "en",
    text: "English",
  },
];

const sociaIcons = [
  {
    icon: faLinkedin,
    href: "#!",
  },
  {
    icon: faTwitterSquare,
    href: "#!",
  },
  {
    icon: faYoutube,
    href: "#!",
  },
  {
    icon: faFacebookSquare,
    href: "#!",
  },
  {
    icon: faPinterest,
    href: "#!",
  },
  {
    icon: faWordpress,
    href: "#!",
  },
];

const QuickLinks = ({ qLink }) => (
  <li>
    <a
      href={qLink.href}
      className="text-gray-800 font-semibold hover:text-[#007BFF]  transition-colors duration-300"
    >
      {qLink.value}
    </a>
  </li>
);
const Equipment = ({ equip }) => (
  <li>
    <a
      href={equip.href}
      className="text-gray-800 font-semibold hover:text-[#007BFF]  transition-colors duration-300"
    >
      {equip.value}
    </a>
  </li>
);
QuickLinks.propTypes = {
  qLink: PropTypes.object.isRequired,
};

const SocialMedia = ({ media }) => (
  <li>
    <a
      href={media.href}
      className="text-gray-800 font-semibold hover:text-[#007BFF]  transition-colors duration-300"
    >
      {media.value}
    </a>
  </li>
);
SocialMedia.propTypes = {
  media: PropTypes.object.isRequired,
};

const JobInfo = ({ job }) => (
  <li>
    <a
      href={job.href}
      className="text-gray-800 font-semibold hover:text-[#007BFF]  transition-colors duration-300"
    >
      {job.value}
    </a>
  </li>
);
JobInfo.propTypes = {
  job: PropTypes.object.isRequired,
};

const LanguageItem = ({ language }) => (
  <option value={language.value}>{language.text}</option>
);
LanguageItem.propTypes = {
  language: PropTypes.object.isRequired,
};

const NavigationItem = ({ item }) => (
  <a
    className="ml-2 text-gray-800 font-semibold hover:text-[#007BFF]  transition-colors duration-300"
    href={item.href}
  >
    {item.value}
  </a>
);

NavigationItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const SocialItem = ({ social }) => (
  <li className="inline-block mr-4">
    <a
      href={social.href}
      className="text-gray-800 hover:text-indigo-500 transition-opacity duration-300"
    >
      <FontAwesomeIcon icon={social.icon} className="text-xl" />
    </a>
  </li>
);

SocialItem.propTypes = {
  social: PropTypes.object.isRequired,
};

const Footer = () => {
  return (
    <footer className="bg-[#E0EAF5] text-[#1A237E]  py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <img src={logo} height="50" alt="Logo" />
          </div>
          <div className="flex flex-col md:flex-row md:w-3/4 justify-between ">
            <div className="mb-6 md:mb-0">
              <h5 className="font-bold mb-3 text-[20px]">Quick Links</h5>
              <ul className="space-y-2">
                {quickLinks.map((qLink, i) => (
                  <QuickLinks qLink={qLink} key={i} />
                ))}
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h5 className="font-bold mb-3 text-[20px]">Loans</h5>
              <ul className="space-y-2">
                {equipment.map((equip, i) => (
                  <Equipment equip={equip} key={i} />
                ))}
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h5 className="font-bold mb-3 text-[20px]">Social Media</h5>
              <ul className="space-y-2">
                {socialMedia.map((media, i) => (
                  <SocialMedia media={media} key={i} />
                ))}
              </ul>
            </div>
            {/* <div className="mb-6 md:mb-0">
              <h5 className="font-bold mb-3">Job Info</h5>
              <ul className="space-y-2">
                {jobInfo.map((job, i) => (
                  <JobInfo job={job} key={i} />
                ))}
              </ul>
            </div> */}
            <div className="mb-6 md:mb-0">
              <h5 className="font-bold mb-3 text-[20px]">Corporate Address</h5>
            
                <span  className=" text-gray-800 font-semibold hover:text-[#007BFF] transition-colors duration-300">Goal Corporation pvt ltd <br /> 
                  No 250/15, Ground Floor,<br />
                  6th Cross, 9th Main,<br />
                  2nd Block, Jayanagar,<br />
                  Bangalore - 560011. Karnataka India <br />
                  Phone: +91 9606 96 5186 <br />
                  E-Mail:info@goalcorporation.com</span> 
            
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center md:justify-start">
          <label htmlFor="footer-language" className="mr-2">
            Language:
          </label>
          <select
            id="footer-language"
            className="bg-transparent border-none text-[#1A237E] focus:outline-none"
          >
            {language.map((lang, i) => (
              <LanguageItem language={lang} key={i} />
            ))}
          </select>
        </div>

        <div className="mt-6">
          <ul className="flex justify-center md:justify-start">
            {sociaIcons.map((social, i) => (
              <SocialItem social={social} key={i} />
            ))}
          </ul>
        </div>

        <div className="mt-6 text-center md:text-left text-gray-800">
          <span>Copyright &copy; Goal Corporation, All rights reserved</span>
          {/* <div className="mt-2 md:mt-0 inline-block md:ml-2">
            {quickLinks.map((item, i) => (
              <NavigationItem item={item} key={i} />
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
