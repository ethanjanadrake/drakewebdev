import React from "react";

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
	return (
		<section className='mt-10'>
			<h1 className='text-4xl text-center flex items-center font-bold text-secondary'>
				<div className='h-px w-full mx-10 bg-primary' />
				<p>Skills</p>
				<div className='h-px w-full mx-10 bg-primary' />
			</h1>
			<div className='mt-10 grid grid-cols-5 place-items-center'>
				{skills.map(skill => {
					return (
						<img
							src={skill.src}
							height={skill.h}
							width={skill.w}
							alt={skill.alt}
							key={skill.alt}
						/>
					);
				})}
			</div>
		</section>
	);
}
