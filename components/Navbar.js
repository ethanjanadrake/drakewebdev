import Link from 'next/link';

export default function Navbar() {
	return (
		<div className='w-full h-16 bg-tertiary-d text-quaternary-ll font-roboto font-bold flex items-center justify-center absolute'>
			<Link href='/'>
				<a className='transition-all p-5 hover:bg-quaternary-ll hover:text-tertiary-dd'>Home</a>
			</Link>
		</div>
	);
}
