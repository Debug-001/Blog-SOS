import React, { useState } from "react";
import Image from "../assets/cs.png";
import Image2 from "../assets/aparoksha.jpg";
import 	Image3 from "../assets/codemania.png";
import { useEffect } from "react";

export default function EventList({ max }) {
	const [events, setEvents] = useState([
		{
			name: "Computer Saksharta",
			description: `Greetings From School Of Sciences, CHRIST (Deemed To Be University) Delhi NCR. This Is To Inform You that The Departmental Social Action(DSA) is a departmental level  club for School of Sciences which focuses on social welfare that includes donation drives, educating children, providing food for the ones in need, plantation drives etc. The Departmental Social Action brings you COMPUTER SHIKSHA, which includes educating the underprivileged children about computers, how to use them, how they work and about other Technology.`,
			url: "https://docs.google.com/forms/d/e/1FAIpQLSdael3PKMX8lc3oNkFOFKF3-kFlE9jVPopbYoE397_oJ9_4Xg/closedform",
			image: Image,
		},
		{
			name: "Aparoksha",
			description: `Greetings From School Of Sciences, CHRIST (Deemed To Be University) Delhi NCR. We are excited to announce that our biggest Intra-Department Fest - APAROKSHA 2k22 is finally here. Brace yourself for an exciting journey of Technical and Cultural events coupled with loads of fun🎊✨ 
			Remember the dates: 7th Nov to 12th Nov`,
			url: "https://docs.google.com/forms/d/e/1FAIpQLScvdeKyXSPwjFJYuw138boPwL_xPkbY4gWEIDAYNw7nRkgVrQ/viewform",
			image: Image2,
		},
		{
			name: "Codemania",
			description: `Greetings From School Of Sciences, CHRIST (Deemed To Be University) Delhi NCR. We are proud to announce our first ever offline coding event! Its called Codemania, seems fun right? It is, This event is full of exciting questions and prizes. In this event you have to solve coding questions and based on some criteria you will be selected for the final round i.e. web dev. round. After registering, you are requested to check your inbox regularly for the updates regarding the event.

			`,
			url: "https://docs.google.com/forms/d/e/1FAIpQLSe0Sex0BAYuDFgD7PAX6LjGoDHy2riOpDy71yotRjScG7rUYg/closedform",
			image: Image3,
		},
	]);

	useEffect(() => {
		if (max) {
			const events_ = events.slice(0, max);
			setEvents(events_);
		}
	}, [max]);
	return (
		<div className="p-10 pt-0">
			{events.map(({ name, description, url, image }) => (
				<section className="mt-16 flex flex-wrap md:flex-nowrap gap-6 justify-center">
					<div className="max-w-[70%] mx-auto min-w-[300px] max-h-[400px] flex-1">
						<img src={image} alt="" className="w-full h-full object-contain" />
					</div>
					<div className="flex flex-col justify-center items-start">
						<h3 className="text-primary font-bold text-2xl md:text-3xl lg:text-4xl mb-4">
							{name}
						</h3>
						<p className="text-justify text-lg my-5">{description}</p>
						<a
							href={url}
							className="px-4 py-2 bg-primary hover:bg-primaryLight rounded flex-none text-white"
						>
							Read More
						</a>
					</div>
				</section>
			))}
		</div>
	);
}
