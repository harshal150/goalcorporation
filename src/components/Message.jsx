


import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAngleLeft,
	faAngleRight,
	faStar,
	faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

const testimonialList = [
	[
		{
			
			name: "Jacinta Hunter",
			
			content:
				'"I highly recommend Goal Corporations to other Surgical Technology programs setting up OR rooms. It is a very economical way to get high quality equipment at an affordable price"',
		},
		{
			
			name: "Heather Dawson",
		
			content:
				'"Our facility has enjoyed nothing but first-class service from Goal Corporations. The equipment we purchased was like new and was very completively priced."',
		},
		{
			
			name: "Darren Miller",
			
			content:
				'"Our experience with Goal Corporations has been awesome! We have had great service and excellent products and I definitely will use Goal Corporations for future purchases"',
		},
	],
	[
		{
			
			name: "Jacinta Hunter",
			
			content:
				'"I highly recommend Goal Corporations to other Surgical Technology programs setting up OR rooms. It is a very economical way to get high quality equipment at an affordable price"',
		},
		{
			
			name: "Darren Miller",
			
			content:
				'"Our experience with Goal Corporations has been awesome! We have had great service and excellent products and I definitely will use Goal Corporations for future purchases"',
		},
		{
			
			name: "Heather Dawson",
		
			content:
				'"Our facility has enjoyed nothing but first-class service from Goal Corporations. The equipment we purchased was like new and was very completively priced."',
		},
	],
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
	<p className={classNames("mb-6", className)} {...rest}>
		<span>
			{[...Array(5)].map((_, i) => {
				const index = i + 1;
				let content = "";
				if (index <= Math.floor(rating))
					content = (
						<FontAwesomeIcon icon={faStar} className="text-yellow-500" />
					);
				else if (rating > i && rating < index + 1)
					content = (
						<FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />
					);
				else if (index > rating)
					content = (
						<FontAwesomeIcon
							icon={faStar}
							className="text-yellow-200 dark:text-opacity-20"
						/>
					);

				return <Fragment key={i}>{content}</Fragment>;
			})}
		</span>
		{showLabel && <span>{rating.toFixed(1)}</span>}
	</p>
);

Rating.propTypes = {
	rating: PropTypes.number.isRequired,
	showLabel: PropTypes.bool,
	className: PropTypes.string,
};

const TestimonialItem = ({ item }) => {
	const { rating, content, photo, name } = item;
	return (
		<div className="bg-white dark:text-slate-800 shadow-xl rounded-xl hover:-translate-y-1 h-full duration-300 p-6">
			<div className="mt-4">
				{/* <Rating rating={rating} showLabel={false} /> */}
				<p className="opacity-50 mb-6 leading-loose font-semibold">{content}</p>
				<div className="flex items-center">
					{/* <div className="mr-2">
						<img
							src={photo}
							alt={name}
							className="max-w-full h-auto rounded-full border"
							width="47"
						/>
					</div> */}
					<div>
						<h5 className="text-xl font-bold">{name}</h5>
					</div>
				</div>
			</div>
		</div>
	);
};
TestimonialItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Message = () => {
	const [index, setIndex] = useState(0);

	const handleControl = (type) => {
		if (type === "prev") {
			setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
		} else if (type === "next") {
			setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
		}
	};
	return (
		<section className="ezy__testimonial20 light py-14 md:py-24 bg-white dark:bg-[#F9F6F1] text-zinc-900 dark:text-white flex justify-center">
			<div className="container relative">
				<div className="flex justify-between mb-md-4">
					<div className="w-2/3 lg:max-w-lg">
						<h2 className="font-bold text-3xl md:text-[45px] leading-none mb-6 text-black">
							What Our Clients Say
						</h2>
						{/* <p className="text-lg leading-relaxed">
							Assumenda non repellendus distinctio nihil dicta sapiente,
							quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
						</p> */}
					</div>
					<div className="w-1/3">
						<div className="flex justify-end items-center relative h-full">
							<button
								className="text-lg bg-white shadow-xl dark:bg-slate-800 opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full mr-4"
								onClick={() => handleControl("prev")}
							>
								<FontAwesomeIcon icon={faAngleLeft} />
							</button>
							<button
								className="text-lg bg-white shadow-xl dark:bg-slate-800 opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full"
								onClick={() => handleControl("next")}
							>
								<FontAwesomeIcon icon={faAngleRight} />
							</button>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-6 gap-y-6 md:gap-x-6 mt-12">
					{testimonialList[index].map((item, i) => (
						<div className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
							<TestimonialItem item={item} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Message;

