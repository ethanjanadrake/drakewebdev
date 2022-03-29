import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const ProjectButton = ({ children, project, currentProject, setProject }) => {
	return (
		<button
			className={`transition-all duration-300 bg-secondary hover:bg-secondary-ll text-gray-ll border border-primary-d hover:border-tertiary w-64 p-3 m-2 rounded-lg font-bold ${
				project === currentProject &&
				"bg-primary-d border-secondary hover:border-secondary hover:bg-primary-d hover:text-gray-100 cursor-default"
			}`}
			onClick={() => {
				setProject(project);
			}}
		>
			{children}
		</button>
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
				>
					MMO Character Viewer
				</ProjectButton>
			</div>
			<div className={`${project !== "1" && "hidden"}`}>
				<p></p>
				<Splide
					options={{
						type: "loop",
						gap: "1rem",
						autoplay: false,
						pauseOnHover: false,
						resetProgress: false,
					}}
				>
					<SplideSlide>
						<img
							className='mb-8'
							src='/images/projects/zandart/zandart1.png'
							alt='image 1'
						/>
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
				</Splide>
			</div>
			<div className={`${project !== "2" && "hidden"}`}>
				<Splide
					options={{
						type: "loop",
						gap: "1rem",
						autoplay: false,
						pauseOnHover: false,
						resetProgress: false,
					}}
				>
					<SplideSlide>
						<img
							className='mb-8'
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
						gap: "1rem",
						autoplay: false,
						pauseOnHover: false,
						resetProgress: false,
					}}
				>
					<SplideSlide>
						<img
							className='mb-8'
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
