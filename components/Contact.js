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
		<section className='bg-gray-ll pt-5 pb-10 mt-10'>
			<h1 className='text-xl text-center flex items-center font-bold'>
				<div className='h-px w-full mx-10 bg-primary-d' />
				<p className='mr-2'>Contact</p>
				<p>Me</p>
				<div className='h-px w-full mx-10 bg-primary-d' />
			</h1>
			<form
				onSubmit={submit}
				className='p-10 bg-white max-w-3xl mt-10 mx-auto rounded-lg shadow-lg flex'
			>
				<textarea
					id='message'
					name='message'
					placeholder='Your Message Here'
					className='p-2 m-2 w-full border-2 border-gray-ll rounded-lg'
				/>
				<div className='flex flex-col justify-between'>
					<input
						id='email'
						type='email'
						name='email'
						placeholder='your@email.com'
						className='p-2 m-2 border-2 border-gray-ll rounded-lg'
					/>
					<button
						type='submit'
						className='transition-all text-3xl hover:text-green-500 place-self-end'
					>
						<BiMailSend />
					</button>
				</div>
			</form>
		</section>
	);
}
