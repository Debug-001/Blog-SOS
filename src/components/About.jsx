import React from "react";
import EventList from "./EventList";

function About() {
	return (
		<div className="max-w-5xl mx-auto">
			<h1 className="text-4xl md:text-5xl lg:text-6xl text-primary font-bold mt-6 text-center">
				School of Sciences
			</h1>
			<section className="p-10">
				<h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
					About
				</h2>
				<p className="text-justify text-lg">
					School of Sciences at CHRIST (Deemed to be University) Delhi- NCR has
					created a niche in the realm of higher education in India through its
					programmes. Currently, the School of Sciences offers a wide array of
					undergraduate courses with multiple specializations. It offers
					undergraduate and doctoral programmes in the disciplines of Computer
					Science, Statistics & Mathematics. A dedicated research block with all
					the latest research facilities boosts the morale of the faculty and
					research scholars alike. This is an ideal place for students with a
					research bent of mind to explore his/her passion. Apart from
					academics, students are moulded holistically through various
					co-curricular and extracurricular activities.
				</p>
			</section>
			<div className="p-10">
				<h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-5xl mb-10">
					Live/Upcoming Events
				</h2>
				<EventList max={3} />
			</div>
		</div>
	);
}

export default About;
