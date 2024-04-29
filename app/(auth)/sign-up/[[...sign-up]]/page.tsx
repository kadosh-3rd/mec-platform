import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
	return (
		<main className='flex h-screen w-full items-center justify-center'>
			<SignUp fallbackRedirectUrl={'/sign-in'} />
		</main>
	);
};

export default SignUpPage;
