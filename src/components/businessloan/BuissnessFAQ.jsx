import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
	{
		isActive: true,
		question: "What is a business loan?",
		answer:
			"A business loan is a loan specifically intended for business purposes. It can be used to cover operational costs, expand the business, purchase new equipment, or manage cash flow.",
	},
	{
		isActive: false,
		question: "What are the eligibility criteria for a business loan?",
		answer:
			"Eligibility for a business loan depends on factors such as the company's turnover, years of operation, profit margins, credit score, and the type of business. Lenders may also consider the business owner's personal credit score.",
	},
	{
		isActive: false,
		question: "How much can I borrow with a business loan?",
		answer:
			"The loan amount you can borrow with a business loan varies by lender and your business profile. Typically, the loan amounts can range from ₹1 lakh to ₹5 crores or more, depending on the lender and your business's financial health.",
	},
	{
		isActive: false,
		question: "What is the interest rate on business loans?",
		answer:
			"Interest rates for business loans depend on various factors such as the type of business loan, the borrower's credit profile, and the lender's policies. Typically, interest rates range from 10% to 18%.",
	},
	{
		isActive: false,
		question: "Can I prepay or foreclose a business loan?",
		answer:
			"Yes, many lenders allow prepayment or foreclosure of business loans, although there may be penalties. It is important to check the prepayment terms before opting for early loan closure.",
	},
	{
		isActive: false,
		question: "What is the tenure for repaying a business loan?",
		answer:
			"Repayment tenures for business loans vary depending on the lender and type of loan, typically ranging from 1 to 7 years. Short-term loans may have a shorter repayment period, while long-term loans offer more time.",
	},
	{
		isActive: false,
		question: "Can I apply for a business loan online?",
		answer:
			"Yes, many lenders offer the option to apply for a business loan online. The process usually involves filling out an application form and submitting the required documents digitally.",
	},
];

const FaqItem = ({ faq }) => {
	const [isOpen, setIsOpen] = useState(faq.isActive);

	const toggleFaq = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			className={`${isOpen && "active"} shadow dark:shadow-none bg-white dark:bg-[#1E2735] rounded-lg mt-6`}
		>
			<a
				href="#!"
				className="btn p-4 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer"
				onClick={toggleFaq}
			>
				<span>{faq.question}</span>
				<FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
			</a>
			<div className={`${isOpen ? "block" : "hidden"} p-4 lg:p-6 pt-0`}>
				<p className="opacity-50">{faq.answer}</p>
			</div>
		</div>
	);
};

FaqItem.propTypes = {
	faq: PropTypes.object.isRequired,
};

const BusinessFAQ = () => {
	return (
		<section className="ezy__faq1 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-16 md:px-8 lg:px-28">
				<div className="grid grid-cols-12 justify-center md:mb-6">
					<div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
						<h2 className="text-4xl text-center font-bold text-blue-600 uppercase mb-8">
							Frequently Asked Questions about Business Loans
						</h2>
						<p className="">
							Get answers to common questions about business loans and learn how they can help your business grow.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-12 gap-0 md:gap-6">
					<div className="col-span-12 md:col-span-6">
						{faqList.slice(0, Math.floor(faqList.length / 2)).map((faq, i) => (
							<FaqItem faq={faq} key={i} />
						))}
					</div>
					<div className="col-span-12 md:col-span-6">
						{faqList
							.slice(Math.floor(faqList.length / 2), faqList.length)
							.map((faq, i) => (
								<FaqItem faq={faq} key={i} />
							))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default BusinessFAQ;
