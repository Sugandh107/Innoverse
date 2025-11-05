import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import {
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	Phone,
	Twitter,
} from "lucide-react";

const Footer = () => {
	const navLinks = [
		{ name: "Home", to: "#", type: "hash" }, // Home usually scrolls to the top
		{ name: "About", to: "#about", type: "hash" },
		{ name: "Domains", to: "#domains", type: "hash" },
		{ name: "Timeline", to: "#timeline", type: "hash" },
		{ name: "Prizes", to: "#prizes", type: "hash" },
		{ name: "Team", to: "#team", type: "hash" },
		{ name: "FAQ", to: "#faq", type: "hash" },
		{ name: "Contact", to: "#contact", type: "hash" },
		{ name: "Rules", to: "/rules", type: "route" },
	];

	const NavLinkItem = ({ link }) => {
		const commonClasses =
			"hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm block";

		if (link.type === "hash") {
			return (
				<HashLink to={link.to} smooth className={commonClasses}>
					{link.name}
				</HashLink>
			);
		}

		// If type is 'route', use standard Link
		return (
			<Link to={link.to} className={commonClasses}>
				{link.name}
			</Link>
		);
	};

	return (
		<footer className='bg-white dark:bg-slate-950'>
			<div className='mx-auto w-full max-w-screen-xl p-6 lg:p-10'>
				<div className='md:flex md:justify-between mb-8'>
					<div className='mb-8 md:mb-0'>
						<a
							href='https://git.edu/'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center'>
							<img
								src='./3.png'
								className='h-8 me-1 sm:me-3 rounded-md'
								alt='KLS Logo'
							/>
							<span className='self-center text-sm sm:text-lg md:text-xl lg:text-xl font-bold whitespace-nowrap text-gray-900 dark:text-white tracking-tight'>
								KLS Gogte Institute of Technology
							</span>
							<img
								src='./logo.png'
								className='h-8 ms-1 sm:ms-3 rounded-md'
								alt='GIT Logo'
							/>
						</a>
						<p className='mt-2 text-xs sm:text-sm text-gray-500 max-w-sm'>
							Engineering Excellence since 1979. Belagavi, Karnataka.
						</p>
						<p className='mt-2 text-xs sm:text-sm text-gray-500 max-w-sm'>
							"Janan Ganga", Udyambag, Belagavi 590008 Karnataka, India
						</p>
						<div className='flex flex-col gap-2 mt-2 text-sm text-gray-500 max-w-sm'>
							<p className='flex gap-2'>
								<span>
									<Phone className='w-4 h-4' />
								</span>{" "}
								+91-831-2405500
							</p>
							<p className='flex gap-2'>
								<span>
									<Phone className='w-4 h-4' />
								</span>
								+91-831-2405500
							</p>
							<p className='flex gap-2'>
								<span>
									<Mail className='w-4 h-4' />
								</span>
								principal@git.edu
							</p>
						</div>
					</div>

					<div className='grid grid-cols-2 gap-8 sm:gap-24 sm:grid-cols-2'>
						<div>
							<h2 className='mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
								Navigation
							</h2>
							<ul className='text-gray-500 dark:text-gray-400 font-medium grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2'>
								{navLinks.map((link) => (
									<li key={link.name}>
										<NavLinkItem link={link} />
									</li>
								))}
							</ul>
						</div>

						<div className='col-span-1'>
							<h2 className='mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
								Follow Us
							</h2>
							<ul className='text-gray-500 dark:text-gray-400 font-medium space-y-2'>
								<li>
									<a
										href='https://www.linkedin.com/company/klsgitbelagavi/'
										target='_blank'
										className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 block hover:underline text-sm'>
										Linked-In
									</a>
								</li>
								<li>
									<a
										href='https://www.facebook.com/KLSGITBelagavi'
										target='_blank'
										className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 block hover:underline text-sm'>
										Facebook
									</a>
								</li>
								<li>
									<a
										href='https://x.com/klsgitbelagavi'
										target='_blank'
										className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 block hover:underline text-sm'>
										X (Twitter)
									</a>
								</li>
								<li>
									<a
										href='https://www.instagram.com/klsgitbelagavi/'
										target='_blank'
										className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 block hover:underline text-sm'>
										Instagram
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700' />

				{/* Bottom Section */}
				<div className='sm:flex sm:items-center sm:justify-between pt-4'>
					<span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
						©️ {new Date().getFullYear()}
						<HashLink
							to={"#"}
							className='hover:underline font-semibold mx-2 text-gray-900 dark:text-white'
							smooth>
							Innoverse
						</HashLink>
						All Rights Reserved.
					</span>

					{/* Social Icons */}
					<div className='flex mt-4 sm:justify-center sm:mt-0 space-x-6 rtl:space-x-reverse'>
						<a
							href='https://www.facebook.com/KLSGITBelagavi'
							target='_blank'
							aria-label='Facebook page'
							className='text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-200'>
							<Facebook />
						</a>
						<a
							href='https://x.com/klsgitbelagavi'
							target='_blank'
							aria-label='Facebook page'
							className='text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-200'>
							<Twitter />
						</a>
						<a
							href='https://www.linkedin.com/company/klsgitbelagavi/'
							target='_blank'
							aria-label='Facebook page'
							className='text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-200'>
							<Linkedin />
						</a>
						<a
							href='https://www.instagram.com/klsgitbelagavi/'
							target='_blank'
							aria-label='Facebook page'
							className='text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-200'>
							<Instagram />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
