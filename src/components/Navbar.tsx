import { SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './MobileNav';

const Navbar = () => {
	return (
		<nav className='flex justify-between items-center fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
			<Link href={'/'} className='flex items-center gap-1'>
				<Image
					src={'/icons/logo.svg'}
					alt='MEC logo'
					width={32}
					height={32}
					className='max-sm:size-10 rounded-full'
				/>
				<p className='text-[26px] font-extrabold text-white max-sm:hidden'>
					MEC
				</p>
			</Link>

			<div className='flex justify-between items-center gap-5'>
				<SignedIn>
					<UserButton />
				</SignedIn>

				<MobileNav />
			</div>
		</nav>
	);
};

export default Navbar;
