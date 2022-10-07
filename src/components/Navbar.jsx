import React, { Fragment } from 'react'
import Logo from '../assets/logo.png'
import { Disclosure, Transition } from '@headlessui/react'
import { useLocation, useNavigate } from 'react-router'

import { FaBars, FaArrowLeft  } from 'react-icons/fa'
import { MdOutlineClear  } from 'react-icons/md'

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const navigation = [
	{ name: 'Home', href: '/',  available: 1 },
	{ name: 'Clubs', href: '/',  available: 1 },
	{ name: 'Courses', href: '/',  available: 1 },
	{ name: 'Upcoming Events', href: '/',  available: 1 },
	{ name: 'Faculty List', href: '/faculty',  available: 1 },
]
  const events = [
    {
      text: "Mobile-Siksha",
      url: "#mb"
    },
    {
      text: "ShahMat",
      url: "#shahmat"
    },
    {
      text: "Ideathon",
      url: "#ideathon"
    },
  ]
  const courses = [
    {
      text: "Master of Computer Applications (MCA)",
      url: "https://ncr.christuniversity.in/courses/main-campus/school-of-sciences/sciences-ncr/mca_ncr22"
    },
    {
      text: "Bachelor of Computer Application (BCA)",
      url: "https://ncr.christuniversity.in/courses/main-campus/school-of-sciences/sciences-ncr/bca-ncr"
    },
    {
      text: "Bachelor of Science (BSc) Computer Science, Mathematics, Statistics (CMS)",
      url: "https://ncr.christuniversity.in/courses/main-campus/school-of-sciences/sciences-ncr/bsc-cms-ncr"
    },
    {
      text: "Bachelor of Science (BSc) Economics, Mathematics, Statistics (EMS)",
      url: "https://ncr.christuniversity.in/courses/main-campus/school-of-sciences/sciences-ncr/bsc-ems-ncr"
    },
    {
      text: "Bachelor of Science (BSc) (Data Science and Artificial Intelligence- Honours)",
      url: "https://ncr.christuniversity.in/courses/main-campus/school-of-sciences/sciences-ncr/bsc-(data-science-and-ai-honours)"
    },
  ]
  const clubs = [
    {
      text: "Science Club",
      url: "/scienceclub"
    },
    {
      text: "DSA",
      url: "/dsa"
    },
    {
      text: "Sports Club",
      url: "/sportsclub"
    },
    {
      text: "Technical Club",
      url: "/technicalclub"
    },
    {
      text: "Cultural Club",
      url: "/culturalclub"
    },
    {
      text: "Corporate Interface Club",
      url: "/cic"
    }
  ]
  return (
    <Disclosure as="nav" className="bg-white py-2 sticky top-0 left-0 z-50 shadow-md border-primary border-b-[20px]" id="header">
			{({ open }) => (
				<div>
					<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center md:hidden">
								{location.pathname !== "/" && (
									<div className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primaryLight  focus:outline-none">
										<FaArrowLeft onClick={() => {
											navigate(-1)
										}}  className="block h-6 w-6" aria-hidden="true" />
									</div>)
								}
							</div>
							<div className="flex-1 flex items-center justify-center md:items-center md:justify-between">
								<a className="flex-shrink-0 flex items-center" href="/">
									<img
										className="block h-12 w-auto"
										src={Logo}
										alt="christ logo"
									/>
								</a>
								<div className="hidden md:block md:ml-6">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												onClick={() => {
													if (item.available === 0) {
														alert("Coming Soon")
													}
												}}
												className='text-primary hover:text-primaryLight px-3 py-2  text-md font-medium transition-colors'

											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center md:hidden">
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primaryLight  focus:outline-none">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<MdOutlineClear className="block h-6 w-6" aria-hidden="true" />
									) : (
										<FaBars className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
						</div>
					</div>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Disclosure.Panel className="md:hidden">
							<div className="px-2 pt-2 pb-3 space-y-1">
								{navigation.map((item) => (
									<Disclosure.Button
										key={item.name}
										as="a"
										onClick={() => {
											if (item.available === 0) {
												alert("Coming Soon")
											}
										}}
										href={item.href}
										className='text-primary hover:text-primaryLight block px-3 py-2 text-base font-medium transition-colors'
									>
										{item.name}
									</Disclosure.Button>
								))}
							</div>
						</Disclosure.Panel>
					</Transition>
				</div>
			)}
		</Disclosure>
  )
}

export default Navbar
