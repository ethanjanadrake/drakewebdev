import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

/**
 * ProjectButton Component
 *
 * Interactive button for project selection with conditional styling
 * Shows "Visit Now" or "Not Public" based on project availability
 *
 * @param {string} children - Button text content
 * @param {string} project - Project identifier (1, 2, 3)
 * @param {string} currentProject - Currently selected project
 * @param {function} setProject - Function to update selected project
 * @param {function} setLinkState - Function to toggle link state
 * @param {boolean} linkState - Current link state
 * @param {string} href - Project URL (optional)
 */
const ProjectButton = ({
	children,
	project,
	currentProject,
	setProject,
	setLinkState,
	linkState,
	href,
}) => {
	return (
		<div className='relative flex sm:block px-8 my-2 sm:px-0 sm:m-2 w-full sm:w-40 lg:w-64 sm:h-6 lg:h-10'>
			<button
				className={`sm:absolute z-10 transition-all duration-300 text-gray-ll border-2 w-3/4 mx-auto p-1 sm:w-40 sm:text-xs lg:text-lg lg:w-64 sm:p-3 rounded-lg font-bold border-gray-dd ${
					project === currentProject
						? "bg-primary-d cursor-default"
						: "bg-secondary hover:bg-secondary-ll"
				}`}
				onClick={() => {
					setProject(project);
					if (project !== currentProject) {
						setLinkState(!linkState);
					}
				}}
			>
				{children}
			</button>
			<a
				href={href}
				target='_blank'
				className={`hidden sm:block sm:absolute z-0 font-bold transition-position duration-500 sm:left-1/2 sm:-translate-x-1/2 p-1 sm:p-1 lg:p-2 lg:pb-1 rounded-r-lg sm:rounded-t-lg sm:rounded-b-none border-2 sm:border-b-0 border-gray-dd w-44 sm:w-24 lg:w-44 text-center sm:text-xs lg:text-md ${
					project === currentProject && href
						? "bottom-full "
						: "bottom-0 sm:-bottom-2 lg:bottom-0"
				} ${
					href
						? "text-primary bg-quaternary-ll hover:bg-quaternary hover:text-primary-d"
						: "text-white bg-gray-l border-gray"
				}`}
			>
				{href ? "Visit Now" : "Not Public"}
			</a>
		</div>
	);
};

/**
 * Projects Component
 *
 * Interactive project showcase with:
 * - Three project buttons (Art Web Store, Insurance Projector, MMO Character Viewer)
 * - Dynamic content display based on selection
 * - Image carousels using Splide.js for project galleries
 * - Responsive design with mobile/desktop layouts
 *
 * Projects:
 * 1. Zandart (Art Web Store) - E-commerce site with Firebase/Stripe
 * 2. Insurance Projector - Business tool for insurance brokers (private)
 * 3. FFXIV Viewer - MMO character viewer using external API
 */
export default function Projects() {
	const [project, setProject] = useState("1");
	const [linkState, setLinkState] = useState(true);

	return (
		<section className='bg-gray-ll pt-10 relative'>
			<div id='projects' className='absolute bg-opacity-0 h-32 -top-10'></div>
			<h1 className='flex items-center text-md lg:text-4xl font-roboto font-bold text-secondary text-center mb-5 lg:mb-10'>
				<div className='h-px w-full bg-primary mx-10' />
				<p>Projects</p>
				<div className='h-px w-full bg-primary mx-10' />
			</h1>
			<div className='flex flex-col sm:flex-row items-center justify-center'>
				<ProjectButton
					project='1'
					currentProject={project}
					setProject={setProject}
					setLinkState={setLinkState}
					linkState={linkState}
					href='http://zandart.vercel.app'
				>
					Art Web Store
				</ProjectButton>
				<ProjectButton
					project='2'
					currentProject={project}
					setProject={setProject}
					setLinkState={setLinkState}
					linkState={linkState}
				>
					Insurance Projector
				</ProjectButton>
				<ProjectButton
					project='3'
					currentProject={project}
					setProject={setProject}
					setLinkState={setLinkState}
					linkState={linkState}
					href='http://ffxiv-viewer.vercel.app'
				>
					MMO Character Viewer
				</ProjectButton>
			</div>
			<div className='flex flex-col-reverse sm:flex-col mt-5 sm:mt-0'>
				<div className='mb-10 sm:mb-0 sm:h-64 md:h-52 lg:h-40 xl:h-32 px-12 text-sm text-justify mt-5'>
					{project === "1" && (
						<p>
							Zandart is an E-Commerce site for an individual that sells drip
							paintings. It uses Google Firebase as the backend to handle
							authentication and communication with the Stripe API. There is an
							interface for admins to upload art and set and edit details about
							the art, as well as delete it from the directory. Clients can
							click the art which opens a new page with extended details of the
							piece as well as the option to add it to the user's cart. Clicking
							on the cart opens a cart page and allows the user to check out
							with Stripe. This was tested and works correctly. This was a quick
							commission and is missing some features I would otherwise like to
							include, such as improving the way items are added to the cart so
							multiple copies can be added more easily, saving the cart data on
							the backend, allowing the user to add items to the cart from the
							gallery view, using thumbnails instead of full sized images on the
							gallery view, and the ability for the stock to update on the
							backend when an item is purchased.
						</p>
					)}
					{project === "2" && (
						<p>
							This project is a tool for Life Insurance Brokers that allows them
							to input raw projections from insurance providers and receive a
							table of projections for a particular portfolio. The goal is for
							the user to be able to manipulate payments easily and be able to
							ctrl-P on the results page to print out a professional-looking
							spreadsheet to give to their own client. This was commissioned to
							me because the company wanted to have a way for their employees
							that are less tech-savvy and unable to learn how to use complex
							operations on Google Sheets or Excel to do the least amount of
							work for each client and still get the same repeatable results.
							The current goal with this project is to integrate Google Firebase
							for authentication and Stripe for subscription payments.{" "}
							<span className='font-bold'>
								This site is not available for public use
							</span>
							, so instead of providing a link I have embedded a YouTube video
							of myself walking through the functions of the site.
						</p>
					)}
					{project === "3" && (
						<p>
							This site consumes an external API called xivapi. The information
							is given by Square Enix's MMO, Final Fantasy XIV. On this app, you
							can use the search function to find any character or Free Company,
							Final Fantasy's version of guilds. You can also view a Free
							Company's roster. When you select a character, you can see the
							levels of each of their classes, their current class, and a visual
							of their character in their current gear. You can also view
							details about the gear they are wearing and the glamours, or
							transmogs, that they are using for the appearances. Currently,
							there are links for those items, but they take you to external
							sites. If I were to continue working on this app, I would add
							pages for those missing elements, improve the appearance of the
							search filters, and optimize the load time of the pages.
						</p>
					)}

					<div
						className={`transition-all duration-500 sm:hidden w-24 mx-auto text-center p-1 font-bold mt-3 rounded-lg border-2 border-black bg-quaternary-ll text-primary ${
							project === "2" && "border-gray bg-gray-l text-gray-d"
						}`}
					>
						{project === "2" ? (
							<p>Not Public</p>
						) : (
							<a
								href={
									(project === "1" ? "http://zandart.vercel.app" : "") +
									(project === "3" ? "http://ffxiv-viewer.vercel.app" : "")
								}
							>
								Visit Now
							</a>
						)}
					</div>
				</div>
				<div>
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
								<img
									src='/images/projects/zandart/zandart1.png'
									alt='image 1'
								/>
							</SplideSlide>
							<SplideSlide>
								<img
									src='/images/projects/zandart/zandart2.png'
									alt='image 2'
								/>
							</SplideSlide>
							<SplideSlide>
								<img
									src='/images/projects/zandart/zandart3.png'
									alt='image 3'
								/>
							</SplideSlide>
							<SplideSlide>
								<img
									src='/images/projects/zandart/zandart4.png'
									alt='image 4'
								/>
							</SplideSlide>
							<SplideSlide>
								<img
									src='/images/projects/zandart/zandart5.png'
									alt='image 5'
								/>
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
				</div>
			</div>
		</section>
	);
}
