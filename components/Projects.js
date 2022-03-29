import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

const ProjectButton = ({
	children,
	project,
	currentProject,
	setProject,
	href,
}) => {
	return (
		<div className='relative m-2 w-64 h-10'>
			<button
				className={`absolute z-10 transition-all duration-300 text-gray-ll border-2 w-64 p-3 rounded-lg font-bold ${
					project === currentProject
						? "bg-primary-d border-secondary hover:border-secondary hover:bg-primary-d cursor-default"
						: "bg-secondary border-primary-d hover:border-tertiary hover:bg-secondary-ll"
				}`}
				onClick={() => {
					setProject(project);
				}}
			>
				{children}
			</button>
			<a
				href={href}
				target='_blank'
				className={`absolute z-0 font-bold transition-position duration-500 text-primary left-1/2 -translate-x-1/2 bg-quaternary-ll p-2 pb-1 rounded-t-lg border-2 border-b-0 border-primary hover:bg-quaternary hover:text-primary-d ${
					project === currentProject && href ? "bottom-full " : "bottom-0"
				}`}
			>
				Visit Now
			</a>
		</div>
	);
};

export default function Projects() {
	const [project, setProject] = useState("1");
	return (
		<section className='bg-gray-ll pt-10'>
			<h1 className='flex items-center text-4xl font-roboto font-bold text-secondary text-center mb-10'>
				<div className='h-px w-full bg-primary mx-10' />
				<p>Projects</p>
				<div className='h-px w-full bg-primary mx-10' />
			</h1>
			<div className='flex items-center justify-center'>
				<ProjectButton
					project='1'
					currentProject={project}
					setProject={setProject}
					href='http://zandart.vercel.app'
				>
					Art Web Store
				</ProjectButton>
				<ProjectButton
					project='2'
					currentProject={project}
					setProject={setProject}
				>
					Insurance Projector
				</ProjectButton>
				<ProjectButton
					project='3'
					currentProject={project}
					setProject={setProject}
					href='http://ffxiv-viewer.vercel.app'
				>
					MMO Character Viewer
				</ProjectButton>
			</div>
			<div className='h-48 p-5 text-justify'>
				{project === "1" && (
					<p>
						Zandart is an E-Commerce site for an individual that sells drip
						paintings. It uses Google Firebase as the backend to handle
						authentication and communication with the Stripe API. There is an
						interface for admins to upload art and set and edit details about
						the art, as well as delete it from the directory. Clients can click
						the art which opens a new page with extended details of the piece as
						well as the option to add it to the user's cart. Clicking on the
						cart opens a cart page and allows the user to check out with Stripe.
						This was tested and works correctly. This was a quick commission and
						is missing some features I would otherwise like to include, such as
						improving the way items are added to the cart so multiple copies can
						be added more easily, saving the cart data on the backend, allowing
						the user to add items to the cart from the gallery view, using
						thumbnails instead of full sized images on the gallery view, and the
						ability for the stock to update on the backend when an item is
						purchased.
					</p>
				)}
				{project === "2" && (
					<p>
						This project is a tool for Life Insurance Brokers that allows them
						to input raw projections from insurance providers and receive a
						table of projections for a particular portfolio. The goal is for the
						user to be able to manipulate payments easily and be able to ctrl-P
						on the results page to print out a professional-looking spreadsheet
						to give to their own client. This was commissioned to me because the
						company wanted to have a way for their employees that are less
						tech-savvy and unable to learn how to use complex operations on
						Google Sheets or Excel to do the least amount of work for each
						client and still get the same repeatable results. The current goal
						with this project is to integrate Google Firebase for authentication
						and Stripe for subscription payments.{" "}
						<span className='font-bold'>
							This site is not available for public use
						</span>
						, so instead of providing a link I have embedded a YouTube video of
						myself walking through the functions of the site.
					</p>
				)}
				{project === "3" && (
					<p>
						This site consumes an external API called xivapi. The information is
						given by Square Enix's MMO, Final Fantasy XIV. On this app, you can
						use the search function to find any character or Free Company, Final
						Fantasy's version of guilds. You can also view a Free Company's
						roster. When you select a character, you can see the levels of each
						of their classes, their current class, and a visual of their
						character in their current gear. You can also view details about the
						gear they are wearing and the glamours, or transmogs, that they are
						using for the appearances. Currently, there are links for those
						items, but they take you to external sites. If I were to continue
						working on this app, I would add pages for those missing elements,
						improve the appearance of the search filters, and optimize the load
						time of the pages.
					</p>
				)}
			</div>
			<div className={`${project !== "1" && "hidden"}`}>
				<Splide
					options={{
						type: "loop",
						gap: "0rem",
						autoplay: false,
						pauseOnHover: false,
						resetProgress: false,
						lazyLoad: true,
					}}
				>
					<SplideSlide>
						<img src='/images/projects/zandart/zandart1.png' alt='image 1' />
					</SplideSlide>
					<SplideSlide>
						<img src='/images/projects/zandart/zandart2.png' alt='image 2' />
					</SplideSlide>
					<SplideSlide>
						<img src='/images/projects/zandart/zandart3.png' alt='image 3' />
					</SplideSlide>
					<SplideSlide>
						<img src='/images/projects/zandart/zandart4.png' alt='image 4' />
					</SplideSlide>
					<SplideSlide>
						<img src='/images/projects/zandart/zandart5.png' alt='image 5' />
					</SplideSlide>
				</Splide>
			</div>
			<div className={`${project !== "2" && "hidden"}`}>
				<Splide
					options={{
						type: "loop",
						gap: "0rem",
						autoplay: false,
						pauseOnHover: false,
						resetProgress: false,
					}}
				>
					<SplideSlide>
						<iframe
							width='100%'
							height='100%'
							src='https://www.youtube.com/embed/hnu7j1efKBg'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen
						></iframe>
					</SplideSlide>
					<SplideSlide>
						<img
							className=''
							src='/images/projects/insurance/insurance1.png'
							alt='image 1'
						/>
					</SplideSlide>
					<SplideSlide>
						<img
							src='/images/projects/insurance/insurance2.png'
							alt='image 2'
						/>
					</SplideSlide>
					<SplideSlide>
						<img
							src='/images/projects/insurance/insurance3.png'
							alt='image 3'
						/>
					</SplideSlide>
					<SplideSlide>
						<img
							src='/images/projects/insurance/insurance4.png'
							alt='image 4'
						/>
					</SplideSlide>
					<SplideSlide>
						<img
							src='/images/projects/insurance/insurance5.png'
							alt='image 5'
						/>
					</SplideSlide>
					<SplideSlide>
						<img
							src='/images/projects/insurance/insurance6.png'
							alt='image 6'
						/>
					</SplideSlide>
					<SplideSlide>
						<img
							src='/images/projects/insurance/insurance7.png'
							alt='image 7'
						/>
					</SplideSlide>
				</Splide>
			</div>
			<div className={`${project !== "3" && "hidden"}`}>
				<Splide
					options={{
						type: "loop",
						gap: "0rem",
						autoplay: false,
						pauseOnHover: false,
						resetProgress: false,
					}}
				>
					<SplideSlide>
						<img
							className=''
							src='/images/projects/ffxiv/ffxiv1.png'
							alt='image 1'
						/>
					</SplideSlide>
					<SplideSlide>
						<img src='/images/projects/ffxiv/ffxiv2.png' alt='image 2' />
					</SplideSlide>
					<SplideSlide>
						<img src='/images/projects/ffxiv/ffxiv3.png' alt='image 3' />
					</SplideSlide>
					<SplideSlide>
						<img src='/images/projects/ffxiv/ffxiv4.png' alt='image 4' />
					</SplideSlide>
					<SplideSlide>
						<img src='/images/projects/ffxiv/ffxiv5.png' alt='image 5' />
					</SplideSlide>
					<SplideSlide>
						<img src='/images/projects/ffxiv/ffxiv6.png' alt='image 6' />
					</SplideSlide>
					<SplideSlide>
						<img src='/images/projects/ffxiv/ffxiv7.png' alt='image 7' />
					</SplideSlide>
					<SplideSlide>
						<img src='/images/projects/ffxiv/ffxiv8.png' alt='image 8' />
					</SplideSlide>
					<SplideSlide>
						<img src='/images/projects/ffxiv/ffxiv9.png' alt='image 9' />
					</SplideSlide>
				</Splide>
			</div>
		</section>
	);
}
