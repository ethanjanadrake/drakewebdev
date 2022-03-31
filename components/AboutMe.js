import Image from "next/image";
import Socials from "./Socials";

export default function AboutMe() {
	return (
		<section className='mt-10 lg:grid grid-cols-2 font-roboto text-justify'>
			<div className='px-12 lg:px-20'>
				<h1 className='flex items-center text-md lg:text-4xl text-secondary font-bold mb-5'>
					<div className='h-px w-full bg-primary mx-5' />
					<p className='mr-3'>About</p>
					<p>Me</p>
					<div className='h-px w-full bg-primary mx-5' />
				</h1>
				<div className='text-sm'>
					<img
						src='/images/socialimage.jpg'
						className='float-right w-2/3 pl-5 pb-5 lg:hidden'
					/>
					<p>
						I am a former high school science teacher who decided to explore Web
						Development in 2020. I was raised in the Greater Philadelphia area
						and spent two years as an exchange student in my ancestral homeland
						of Shanghai, China. My college education includes Mechanical
						Engineering, Software Engineering, and Science Education. I moved to
						the San Francisco Bay Area in 2016 and taught Physics, Chemistry,
						Programming, and Engineering classes in two schools.
					</p>
					{/* <p className='mt-5'>
						Living in the Bay Area led me to immerse myself in the Silicon
						Valley culture, and as I saw most of my friends working in tech, I
						started to realize that there was nothing special about them that I
						didn't also have access to, not to mention I was watching as my
						students also found great success in their programming projects.
						That's when the itch to teach myself to code professionally began. I
						was fortunate to already be involved in a supportive community to
						learn from, which supplemented the several Udemy classes I studied
						through. After my primary learning stage, I managed to discover some
						freelancing opportunities which are outlined in the Projects section
						of this page.
					</p> */}
					<p className='mt-5'>
						I have always been close to tech. My lifelong hobby of video gaming
						connected me to modding games and at times I even coded my own mods,
						particularly WeakAuras for World of Warcraft which I uploaded onto
						Wago.io and reached thousands of downloads. In my teaching career,
						not only was I the tech teacher, I also used far more tech than most
						other teachers and ran seminars to teach other teachers how to use
						their online tools properly, such as Google Classroom and Infinite
						Campus. I even ran some hackathons for students to compete in making
						a small video game.
					</p>
					<p className='mt-5'>
						Currently, I am continuing to build my portfolio as I search for
						more permanent opportunities as a Junior Developer so I can thrive
						in my newfound passion. While my experience is largely frontend, I
						have been dabbling in backend systems, mostly using Google Firebase
						for my needs. I am confident in my ability to learn anything on the
						go. If you are interested in my skills, please don't hesitate to
						contact me.
					</p>
				</div>
				<Socials />
			</div>
			<img
				src='/images/socialimage.jpg'
				className='hidden lg:block pr-20 pt-5 mb-10'
			/>
		</section>
	);
}
