import member1 from '../../assets/DirectorImage.jpg';

const teamMembers = [
  {
    img: member1,
    name: "Amol Kanse",
    designation: "Founder / CEO",
  },
  {
    img: member1,
    name: "Prashant Ghopal",
    designation: "Founder / COO",
  },
  {
    img: member1,
    name: "Abhishek Jadhav",
    designation: "Graphics Designer / Video Editor",
  },
  {
    img: member1,
    name: "Pramil Landge",
    designation: "UI/UX Designer",
  },
  {
    img: member1,
    name: "Rushikesh Pawar",
    designation: "Digital Marketing Executive",
  },
  {
    img: member1,
    name: "Tejas Jadhav",
    designation: "Graphics Designer",
  },
  {
    img: member1,
    name: "Nayan Dhongadi",
    designation: "Full Stack Developer",
  },
  {
    img: member1,
    name: "Harshal Patil",
    designation: "MERN Stack Developer",
  },
];

const TeamMemberItem = ({ member }) => (
  <div className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-4 h-[100%] transition-transform duration-400 ease-in-out hover:scale-[1.05] hover:shadow-2xl hover:bg-indigo-50 dark:hover:bg-slate-700">
    <div>
      <img
        src={member.img}
        alt={member.name}
        className="w-full h-72 object-cover rounded-t-2xl transition-opacity duration-300 hover:opacity-90"
      />
      <div className="p-4">
        <h5 className="text-2xl mb-2 font-bold text-gray-900 dark:text-white">{member.name}</h5>
        <p className="text-sm opacity-75 text-gray-600 dark:text-gray-300">{member.designation}</p>
      </div>
    </div>
  </div>
);

const Ourteam = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-[#0b1727] text-gray-900 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center text-center">
          <div className="sm:max-w-5xl">
            <h1 className="text-5xl font-bold text-center text-indigo-800 dark:text-indigo-400 mb-6">
             BOARD OF DIRECTORS & KEY MEMBERS
            </h1>
            <p className="font-semibold text-base text-gray-600 dark:text-gray-300 opacity-80 mb-12">
              Meet the talented individuals who power our vision and drive our mission forward. Each member brings unique expertise and passion
              to our team, united by a shared dedication to excellence and innovation.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, i) => (
            <div key={i}>
              <TeamMemberItem member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourteam;
