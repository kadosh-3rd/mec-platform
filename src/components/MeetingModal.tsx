'use client';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from './ui/button';

interface MeetingModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	className?: string;
	children?: React.ReactNode;
	buttonText?: string;
	handleClick?: () => void;
	image?: string;
	buttonIcon?: string;
}

const MeetingModal = ({
	isOpen,
	onClose,
	title,
	className,
	children,
	buttonText,
	handleClick,
	image,
	buttonIcon,
}: MeetingModalProps) => {
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogTrigger>Open</DialogTrigger>
			<DialogContent className='flex flex-col w-full max-w-[520px] gap-6 border-none bg-dark-1 px-6 py-9 text-white'>
				<div className='flex flex-col gap-6'>
					{image ? (
						<div className='flex justify-center'>
							<Image src={image} alt='image' width={72} height={72} />
						</div>
					) : null}

					<h1 className={cn('text-2xl font-bold leading-[42px]', className)}>
						{title}
					</h1>

					{children}

					<Button
						className='w-full bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0'
						onClick={handleClick}
					>
						{buttonIcon ? (
							<Image
								src={buttonIcon}
								alt='button icon'
								width={13}
								height={13}
							/>
						) : null}
						&nbsp;
						{buttonText || 'Schedule Meeting'}
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default MeetingModal;
