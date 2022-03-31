import Head from "next/head";
import { GiSpikedDragonHead } from "react-icons/gi";

import AboutMe from "/components/AboutMe";
import Contact from "/components/Contact";
import Projects from "/components/Projects";
import Skills from "/components/Skills";
import Navbar from "/components/Navbar";

export default function Home() {
	return (
		<div className='relative bg-fixed bg-gradient-to-br from-purple-500 to-pink-200 min-h-screen lg:py-16 lg:pt-24'>
			<Head>
				<title>Drake Web Dev</title>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
				<link
					href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
					rel='stylesheet'
				/>
				<meta charset='UTF-8' />
				<meta property='og:title' content='Drake Web Dev' />
				<meta
					property='og:description'
					content='Freelance Web Developer looking for work.'
				/>
				<meta
					name='keywords'
					content='HTML, CSS, JavaScript, React, NextJS, Next, JS, Web, Developer, Development, Frontend'
				/>
				<meta name='author' content='Ethan Jana Drake' />
				<meta property='og:image' content='/images/socialimage.jpg' />
			</Head>
			<main className='lg:max-w-7xl lg:mx-auto bg-white pt-16'>
				<Navbar />
				<h1 className='flex justify-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold font-roboto text-primary-d'>
					<p className='mr-2'>Ethan Jana Drake</p>
					<GiSpikedDragonHead />
				</h1>
				<h2 className='text-xl lg:text-3xl font-bold text-secondary-l text-center mt-2 lg:mt-5 ml-32 sm:ml-50 md:ml-60 lg:ml-70 xl:ml-80'>
					Web Development
				</h2>
				<AboutMe />
				<Projects />
				<Skills />
				<Contact />
			</main>
		</div>
	);
}
