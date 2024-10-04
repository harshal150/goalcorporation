import  { useState } from "react";
import {
	faEnvelopeOpenText,
	faHdd,
	faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const contactInfoList = [
	{
		icon: faEnvelopeOpenText,
		label: "support@goalcorporation.com",
		href: "mailto:harshhh30601@gmail.com",
	},
	{
		icon: faPhoneAlt,
		label: "+91 9881519650",
		href: "callto:+91 9881519650",
	},
	{ icon: faHdd, label: "goalcorporation.com", href: "www.goalcorporation.com" },
];

const ContactForm = () => {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);

        console.log("first")
	};

	return (
		<form className="" noValidate validated={validated} onSubmit={handleSubmit}>
			<div className="mb-4">
				<input
					type="text"
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Name"
				/>
			</div>
			<div className="mb-4">
				<input
					type="email"
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Email"
				/>
			</div>
			<div className="mb-4">
				<textarea
					name="message"
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Message"
					rows="4"
				></textarea>
			</div>
			<div className="text-start">
				<button
					type="submit"
					className="bg-[#3B82F6] hover:bg-opacity-90 text-white px-8 py-3 rounded mb-4"
				>
					Submit
				</button>
			</div>
		</form>
	);
};

const ContactFormCard = () => (
	<div className="bg-white dark:bg-[#162231] shadow-xl rounded-2xl p-6 md:p-12">
		<h2 className="text-xl md:text-[35px] leading-none font-bold mb-4">
        We’re just a message away

		</h2>

		<ContactForm />
	</div>
);

const ContactInfo = ({ contactInfoList }) => (
	<div classNameName="mt-5 pt-md-4">
		{contactInfoList.map((info, i) => (
			<div
				className="bg-gray-100 shadow dark:bg-gray-800 max-w-[380px] mt-6 flex items-center rounded-xl p-5"
				key={i}
			>
				<FontAwesomeIcon icon={info.icon} className="text-3xl px-2" />
				<i className="fas fa-envelope-open-text text-3xl px-2"></i>
				<a className="text-lg  font-medium  ml-3" href={info.href || "#!"}>
					{info.label}
				</a>
			</div>
		))}
	</div>
);



const AboutContact = () => {
	return (
		<section className="ezy__contact9 light py-14 md:mx-36 md:py-24   text-zinc-900 dark:text-white overflow-hidden">
			<div className="container px-4">


            <div className="flex items-center justify-center text-center mb-6 md:mb-12">
          <div className="max-w-xl">
          <h1 className="text-6xl font-extrabold text-center text-indigo-800 mb-10">Contact Us</h1>

            {/* <h2 className="text-[32px] font-bold">
            We’re just a message away
            </h2> */}
          </div>
        </div>


				<div className="grid grid-cols-12 py-6 lg:gap-8">
					<div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0">
						{/* <h2 className="text-2xl leading-none md:text-[45px] font-bold mb-6">
							How can we help you?
						</h2> */}
						<p className="text-md">
                        We'd love to hear from you! Whether you have a question about our services, need assistance with your account, or just want to say hello, we're here to help. Feel free to reach out to us using the contact information provided below, and we'll get back to you as soon as possible.
						</p>

						<ContactInfo contactInfoList={contactInfoList} />
					</div>

					<div className="col-span-12 lg:col-span-5 lg:col-start-8">
						<ContactFormCard />
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutContact;