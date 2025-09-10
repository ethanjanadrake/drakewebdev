/**
 * NavScroll Component
 *
 * Navigation button with smooth scroll functionality
 *
 * @param {string} id - Target element ID to scroll to
 * @param {string} text - Button display text
 */
const NavScroll = ({ id, text }) => {
	return (
		<button
			className='transition-all h-full p-3 lg:hover:bg-secondary-ll lg:hover:text-primary-dd font-bold'
			onClick={() => {
				document.getElementById(id).scrollIntoView({ behavior: "smooth" });
			}}
		>
			{text}
		</button>
	);
};

/**
 * Navbar Component
 *
 * Fixed navigation bar with:
 * - Home button (scrolls to top)
 * - Project, Skills, and Contact navigation
 * - Smooth scrolling to page sections
 * - Responsive hover effects
 *
 * Uses custom color scheme from tailwind.config.js
 */
export default function Navbar() {
	return (
		<div className='fixed z-50 top-0 left-0 w-full h-12 bg-primary-d text-secondary-ll font-roboto font-bold flex items-center justify-center'>
			<button
				className='transition-all h-full p-3 lg:hover:bg-secondary-ll lg:hover:text-primary-dd font-bold'
				onClick={() => {
					window.scrollTo({ top: 0, behavior: "smooth" });
				}}
			>
				Home
			</button>
			<NavScroll id='projects' text='Projects' />
			<NavScroll id='skills' text='Skills' />
			<NavScroll id='contact' text='Contact' />
		</div>
	);
}
