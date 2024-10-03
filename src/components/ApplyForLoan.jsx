import React from "react";

const ApplyForLoan = () => {
	return (
		<section className="ezy__cta2 light relative overflow-hidden py-10 md:py-20 bg-[#32b1db]">
			{/* shapes */}
			<div className="w-[400px] h-[400px] bg-white bg-opacity-5 rounded-full -m-[100px] absolute left-0 top-0"></div>
			<div className="w-[400px] h-[400px] bg-white bg-opacity-5 rounded-full -m-[100px] absolute right-0 bottom-0"></div>

			<div className="container relative px-4">
				<div className="grid grid-cols-12 justify-between items-center text-white">
					{/* Text on the left with padding */}
					<div className="col-span-6 text-left pl-20">
						<h2 className="text-2xl md:text-[45px] leading-none font-bold">
						Your Loan is Just a Click Away
						</h2>
					</div>

					{/* Button on the right with padding */}
					<div className="col-span-6 text-right pr-8">
						<button
							type="submit"
							className="bg-white text-black font-bold py-3 px-7 rounded transition"
						>
							Apply for loan
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ApplyForLoan;
