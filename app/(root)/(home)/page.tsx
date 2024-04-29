import BoardBanner from '@/components/BoardBanner';
import MeetingTypeList from '@/components/MeetingTypeList';

export default function Home() {
	return (
		<section className='size-full flex flex-col gap-10 text-white'>
			<BoardBanner />
			<MeetingTypeList />
		</section>
	);
}
