import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function SportsClub() {
	return (
		<div>
			<Navbar />
			<div className="max-w-5xl mx-auto">
				<div className="flex items-center justify-center flex-col md:flex-row px-10">
					<div className="max-w-xs">
						<img src="#" alt="dsa club logo" className="w-100" />
					</div>
					<h1 className="text-4xl md:text-5xl lg:text-6xl text-primary font-bold mt-6 text-center">
						SPORTS CLUB
					</h1>
				</div>
				<section className="p-10">
					<p className="text-justify text-lg">
						Departmental Social Action Is An Initiative By The School Of
						Sciences Where The Members With The Help Of The Faculty Incharges
						Host Vairous Events. They Plan And Organize Various Activities And
						Events Related Science, Environment Etc.., And Also Webinars.We Also
						Organise A Where Other Students Get To Display Their Science
						Projects And Models
					</p>
				</section>
				<section className="p-10">
					<h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-5xl mb-10">
						Faculty Co-ordinators
					</h2>
					<div className="flex md:flex-row flex-col gap-10 justify-evenly">
						<div class="text-center">
							<img
								src=""
								class="rounded-full w-32 h-32 object-cover mb-4 mx-auto"
								alt="Avatar"
							/>
							<h5 class="text-2xl font-medium leading-tight mb-2">
								CHANDRAKETU SINGH
							</h5>
							<p class="text-gray-500 text-lg">Lorem, ipsum dolor.</p>
						</div>
						<div class="text-center">
							<img
								src=""
								class="rounded-full w-32 h-32 object-cover mb-4 mx-auto"
								alt="Avatar"
							/>
							<h5 class="text-2xl font-medium leading-tight mb-2">
								VANDANA MEHNDIRATTA
							</h5>
							<p class="text-gray-500 text-lg">Lorem, ipsum dolor.</p>
						</div>
					</div>
				</section>
				<section className="p-10">
					<h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-5xl mb-10">
						Student Co-ordinators
					</h2>
					<div className="flex md:flex-row flex-col gap-10 justify-evenly">
						<div class="text-center">
							<img
								src=""
								class="rounded-full w-32 h-32 object-cover mb-4 mx-auto"
								alt="Avatar"
							/>
							<h5 class="text-2xl font-medium leading-tight mb-2">
								Harshit Bisht
							</h5>
							<p class="text-gray-500 text-lg">BCA (3BCANCR)</p>
						</div>
						<div class="text-center">
							<img
								src=""
								class="rounded-full w-32 h-32 object-cover mb-4 mx-auto"
								alt="Avatar"
							/>
							<h5 class="text-2xl font-medium leading-tight mb-2">
								Nimisha Singh
							</h5>
							<p class="text-gray-500 text-lg">BDA (3BDANCR)</p>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	);
}
