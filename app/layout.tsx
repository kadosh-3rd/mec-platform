import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montSerrat = Montserrat({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
	title: "MEC - Matheo's English Club Platform",
	description:
		'Level up your English skills now! Get ready to learn faster and better by joining our community of learners all over the world. Our platform offers a variety of courses and resources + mentorship, support & coaching to help you achieve your goals.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' id='mec' dir='auto'>
			<ClerkProvider
				appearance={{
					layout: {
						logoImageUrl: '/icons/logo.svg',
						socialButtonsVariant: 'blockButton',
					},
					// variables: {
					// 	colorText: '#fff',
					// 	colorPrimary: '#0e78f9',
					// 	colorBackground: '#1c1f2c',
					// 	colorInputBackground: '#252a41',
					// 	colorInputText: '#fff',
					// },
				}}
			>
				<body className={`${montSerrat.className} bg-dark-2`}>{children}</body>
			</ClerkProvider>
		</html>
	);
}
