import React from "react";
import Navbar from "../components/Navbar";
import Clogo from "../assets/clogo.png";
import Footer from "../components/Footer";
import Image from "../assets/profile.png";
import Image1 from "../assets/sanskriti.png";
import Image2 from "../assets/vs.png";
import { FaInstagram } from "react-icons/fa";

const ScienceClub = () => {
	return (
		<div>
			<Navbar />
			<div className="max-w-5xl mx-auto">
				<div className="flex items-center justify-center flex-col md:flex-row px-10">
					<div className="max-w-xs">
						<img src={Clogo} alt="science club logo" className="w-100" />
					</div>
					<h1 className="text-4xl md:text-5xl lg:text-6xl text-primary font-bold mt-6 text-center">
						EULIM SCIENCE CLUB
					</h1>
				</div>
				<section className="p-10">
					<p className="text-justify text-lg">
						EULIM Science Club Is An Initiative By The School Of Sciences Where
						The Members With The Help Of The Faculty Incharges Host Vairous
						Events. They Plan And Organize Various Activities And Events Related
						Science, Environment Etc.., And Also Webinars.We Also Organise A
						Where Other Students Get To Display Their Science Projects And
						Models.
					</p>
				</section>
				<section className="p-10">
					<h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-5xl mb-10">
						Faculty Co-ordinators
					</h2>
					<div class="text-center">
						<img
							src={Image}
							class="rounded-full w-32 h-32 object-cover mb-4 mx-auto"
							alt="Avatar"
						/>
						<h5 class="text-2xl font-medium leading-tight mb-2">
							Dr STEPHENRAJ S
						</h5>
						<p class="text-gray-500 text-lg">
							MSc, PhD (School Of Sciences), Delhi NCR Campus
						</p>
					</div>
				</section>
				<section className="p-10">
					<h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-5xl mb-10">
						Student Co-ordinators
					</h2>
					<div className="flex md:flex-row flex-col gap-10 justify-evenly">
						<div class="text-center">
							<img
								src={Image1}
								class="rounded-full w-32 h-32 object-cover mb-4 mx-auto"
								alt="Avatar"
							/>
							<h5 class="text-2xl font-medium leading-tight mb-2">
								Sanskriti Saran
							</h5>
							<p class="text-gray-500 text-lg">BCA (3BCANCR)</p>
						</div>
						<div class="text-center">
							<img
								src={Image2}
								class="rounded-full w-32 h-32 object-cover mb-4 mx-auto"
								alt="Avatar"
							/>
							<h5 class="text-2xl font-medium leading-tight mb-2">
								Vaishali Pant
							</h5>
							<p class="text-gray-500 text-lg">BSC EMS (3EMS)</p>
						</div>
					</div>
				</section>
				<a
					href="https://www.instagram.com/eulim_scienceclub/"
					className="w-fit px-4 py-2 rounded m-10 mx-auto flex items-center justify-center gap-3 bg-primary hover:bg-primaryLight transition-all text-white"
				>
					Follow us on Instagtam <FaInstagram />
				</a>
			</div>
			<Footer />
		</div>
	);
};

export default ScienceClub;
