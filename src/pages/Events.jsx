import React from "react";
import EventList from "../components/EventList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Events() {
	return (
		<div className="">
			<Navbar />
			<div className="max-w-5xl mx-auto my-10">
				<h1 className="text-4xl md:text-5xl lg:text-6xl text-primary font-bold mt-6 text-center mb-10">
					All Events
				</h1>
				<EventList />
			</div>
			<Footer />
		</div>
	);
}
