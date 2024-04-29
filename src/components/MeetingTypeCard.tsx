'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

interface MeetingTypeCardProps {
	className: string;
	imgSrc: string;
	title: string;
	description: string;
	handleClick: () => void;
}

const MeetingTypeCard = ({
	className,
	imgSrc,
	title,
	description,
	handleClick,
}: MeetingTypeCardProps) => {
	return (
		<div
			className={cn(
				'px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer',
				className
			)}
			onClick={handleClick}
		>
			<div className='flex justify-center items-center glassmorphism size-12 rounded-[10px]'>
				<Image src={imgSrc} alt='meeting icon' width={27} height={27} />
			</div>
			<div className='flex flex-col gap-2'>
				<h1 className='text-2xl font-bold'>{title}</h1>
				<p className='text-lg font-normal'>{description}</p>
			</div>
		</div>
	);
};

export default MeetingTypeCard;
