import React, { useEffect, useState, useRef } from "react";

const PrizesSection = ({
	fonts = { title: "Arial Black", body: "Arial" },
	prizes = {
		MCA: [
			{ place: "🥇 1st Place", amount: "₹15,000" },
			{ place: "🥈 2nd Place", amount: "₹10,000" },
		],
		BCA: [
			{ place: "🥇 1st Place", amount: "₹15,000" },
			{ place: "🥈 2nd Place", amount: "₹10,000" },
		],
	},
}) => {
	const sectionRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => setIsVisible(entry.isIntersecting),
			{ threshold: 0.2 }
		);
		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => sectionRef.current && observer.unobserve(sectionRef.current);
	}, []);

	const PrizeCard = ({ place, amount }) => (
		<div
			className={`relative flex flex-col justify-center items-center text-center rounded-xl p-6 sm:p-8 bg-transparent border border-white/10 transition-all duration-700 hover:border-white/20 hover:scale-[1.02] ${
				isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
			}`}
			style={{ fontFamily: fonts.body }}>
			<h3
				className='text-xl sm:text-2xl font-extrabold mb-1 flex items-center gap-2'
				style={{ fontFamily: fonts.title }}>
				<span>
					{place.includes("1st") ? "🥇" : place.includes("2nd") ? "🥈" : "🥉"}
				</span>
				<span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'>
					{place.replace(/^\S+\s/, "")}
				</span>
			</h3>
			<p className='text-white/90 text-lg sm:text-xl font-semibold'>{amount}</p>
		</div>
	);

	return (
		<section
			ref={sectionRef}
			id='prizes'
			className='relative w-full bg-slate-950 py-20 sm:py-28 overflow-hidden'>
			<div className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-10'>
				{/* Title */}
				<div
					className={`text-center mb-16 transition-all duration-1000 ${
						isVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 -translate-y-10"
					}`}>
					<h2
						className='text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4'
						style={{ fontFamily: fonts.title }}>
						Hackathon{" "}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500'>
							Prizes
						</span>
					</h2>
					<p
						className='text-white/80 text-sm sm:text-base max-w-2xl mx-auto'
						style={{ fontFamily: fonts.body }}>
						Two unique streams{" "}
						<span className='text-cyan-400 font-bold'>MCA</span> &{" "}
						<span className='text-pink-400 font-bold'>BCA</span> rewarding
						innovation, creativity, and impact.
					</p>
				</div>

				{/* Prizes Grid */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
					{/* MCA Stream */}
					<div
						className={`flex flex-col gap-6 rounded-2xl bg-slate-900/40 border border-white/10 p-8 sm:p-10 transition-all duration-700 ${
							isVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-10"
						}`}>
						<div className='text-center mb-4'>
							<h3
								className='text-xl sm:text-2xl lg:text-xxl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500'
								style={{ fontFamily: fonts.title }}>
								Master of Computer
								<br className='block sm:hidden' />
								<span className='hidden sm:inline'> </span> Applications
							</h3>
						</div>

						<div className='grid sm:grid-cols-2 gap-6'>
							{prizes.MCA.map((p, i) => (
								<PrizeCard key={i} {...p} />
							))}
						</div>
					</div>

					{/* BCA Stream */}
					<div
						className={`flex flex-col gap-6 rounded-2xl bg-slate-900/40 border border-white/10 p-8 sm:p-10 transition-all duration-700 ${
							isVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-10"
						}`}>
						<div className='text-center mb-4'>
							<h3
								className='text-xl sm:text-2xl lg:text-xxl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500'
								style={{ fontFamily: fonts.title }}>
								Bachelor of Computer Applications
							</h3>
						</div>

						<div className='grid sm:grid-cols-2 gap-6'>
							{prizes.BCA.map((p, i) => (
								<PrizeCard key={i} {...p} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PrizesSection;