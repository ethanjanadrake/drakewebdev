import { useForm } from "@formcarry/react";
import { BiMailSend } from "react-icons/bi";

export default function Contact() {
	const { state, submit } = useForm({
		id: "iN6g7g6e-xA",
	});
	if (state.submitted) {
		return <div>Thank you! We received your submission.</div>;
	}
	return (
		<section className='bg-gray-ll pt-5 pb-10 mt-10 relative'>
			<div id='contact' className='absolute bg-opacity-0 h-32 -top-10'></div>
			<h1 className='text-md lg:text-xl text-center flex items-center font-bold'>
				<div className='h-px w-full mx-10 bg-primary-d' />
				<p className='mr-2'>Contact</p>
				<p>Me</p>
				<div className='h-px w-full mx-10 bg-primary-d' />
			</h1>
			<form
				onSubmit={submit}
				className='p-5 sm:p-10 bg-white max-w-xs sm:max-w-xl lg:max-w-3xl mt-5 sm:mt-10 mx-auto rounded-lg shadow-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5'
			>
				<textarea
					id='message'
					name='message'
					placeholder='Your Message Here'
					className='p-2 m-2 sm:w-full lg:col-span-2 border-2 border-gray-ll rounded-lg'
				/>
				<div className='relative row-start-1 sm:row-start-auto'>
					<input
						id='email'
						type='email'
						name='email'
						placeholder='your@email.com'
						className='p-2 my-2 ml-2 sm:ml-0 sm:w-full border-2 border-gray-ll rounded-lg'
					/>
					<button
						type='submit'
						className='transition-all text-3xl hover:text-green-500 absolute top-4 right-2 sm:top-14 sm:right-0'
					>
						<BiMailSend />
					</button>
				</div>
			</form>
		</section>
	);
}
