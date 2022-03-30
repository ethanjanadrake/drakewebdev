import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function Socials() {
	return (
		<section className='flex items-center justify-center h-12 text-primary text-4xl my-10'>
			<a
				href='https://github.com/ethanjanadrake'
				className='transition-all hover:text-secondary p-1'
			>
				<AiFillGithub />
			</a>
			<a
				href='https://www.linkedin.com/in/ethan-drake-389287212/'
				className='transition-all hover:text-secondary p-1'
			>
				<FaLinkedin />
			</a>
		</section>
	);
}
