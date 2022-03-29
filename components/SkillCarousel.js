import { useState, useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Image from "next/image";

import carouselStyles from "../styles/carousel.module.css";

export default function Skills() {
	const skills = [
		{ alt: "html logo", src: "/images/htmlLogo.png", w: "100px", h: "100px" },
		{ alt: "css logo", src: "/images/cssLogo.png", w: "75px", h: "100px" },
		{
			alt: "javascript logo",
			src: "/images/javascriptLogo.png",
			w: "100px",
			h: "100px",
		},
		{
			alt: "react js logo",
			src: "/images/reactLogo.png",
			w: "140px",
			h: "140px",
			background: "bg-white",
		},
		{
			alt: "next js logo",
			src: "/images/nextLogo.png",
			w: "125px",
			h: "80px",
			background: "bg-white",
		},
		{
			alt: "sass logo",
			src: "/images/sassLogo.png",
			w: "150px",
			h: "100px",
			background: "bg-white",
		},
		{
			alt: "bootstrap logo",
			src: "/images/bootstrapLogo.png",
			w: "125px",
			h: "100px",
			background: "bg-white",
		},
		{
			alt: "git logo",
			src: "/images/gitLogo.png",
			w: "150px",
			h: "70px",
			background: "bg-white",
		},
		{
			alt: "tailwind css logo",
			src: "/images/tailwindLogo.png",
			w: "150px",
			h: "150px",
		},
		{
			alt: "firebase logo",
			src: "/images/firebaseLogo.png",
			w: "200px",
			h: "60px",
			background: "bg-white",
		},
	];

	const [skillIndex, setSkillIndex] = useState(0);

	const [carouselThrottle, setCarouselThrottle] = useState(false);

	const scrollCarousel = direction => {
		if (!carouselThrottle) {
			setCarouselThrottle(true);
			if (direction === "next") {
				if (skillIndex === skills.length - 1) {
					setSkillIndex(0);
				} else {
					setSkillIndex(skillIndex + 1);
				}
			} else if (direction === "prev") {
				if (skillIndex === 0) {
					setSkillIndex(skills.length - 1);
				} else {
					setSkillIndex(skillIndex - 1);
				}
			}
			const timeout = setTimeout(() => {
				setCarouselThrottle(false);
			}, 500);
			return () => clearTimeout(timeout);
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			scrollCarousel("next");
		}, 3000);
		return () => clearInterval(interval);
	}, [carouselThrottle]);

	return (
		<>
			<button
				className='transition-all w-8 text-2xl mx-auto text-tertiary-ll hover:text-secondary-ll'
				onClick={() => {
					scrollCarousel("prev");
				}}
			>
				<FaChevronUp />
			</button>
			<div className='w-64 h-64 p-5 rounded-xl shadow-xl border-4 border-tertiary-ll mx-auto bg-gradient-to-br from-tertiary-ll to-tertiary relative overflow-hidden'>
				{skills.map((skill, index) => {
					let prevIndex = skillIndex - 1;
					let nextIndex = skillIndex + 1;
					if (skillIndex === 0) {
						prevIndex = skills.length - 1;
					}
					if (skillIndex === skills.length - 1) {
						nextIndex = 0;
					}
					return (
						<div
							className={
								"transition-all duration-500 ease-linear p-5 absolute w-full h-full left-0 text-center align-middle flex flex-col justify-center top-0 " +
								(index === prevIndex ? carouselStyles.prev : "") +
								" " +
								(index === nextIndex ? carouselStyles.next : "") +
								" " +
								(index === skillIndex ? carouselStyles.current : "") +
								" " +
								(index !== prevIndex &&
								index !== nextIndex &&
								index !== skillIndex
									? "hidden"
									: "")
							}
						>
							<div
								className={
									"mx-auto transition-all duration-500 ease-in-out " +
									(skill.background
										? skill.background + " rounded-xl p-3 shadow-xl"
										: "")
								}
							>
								<Image
									alt={skill.alt}
									src={skill.src}
									width={skill.w}
									height={skill.h}
								/>
							</div>
						</div>
					);
				})}
			</div>
			<button
				className='transition-all w-8 text-2xl mx-auto text-tertiary-ll hover:text-secondary-ll'
				onClick={() => {
					scrollCarousel("next");
				}}
			>
				<FaChevronDown />
			</button>
		</>
	);
}
