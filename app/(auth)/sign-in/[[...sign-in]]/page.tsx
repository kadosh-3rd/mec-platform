import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
	return (
		<main className='flex h-screen w-full items-center justify-center'>
			<SignIn fallbackRedirectUrl={'/'} />
		</main>
	);
};

export default SignInPage;
