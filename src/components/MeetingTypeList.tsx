'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import MeetingModal from './MeetingModal';
import MeetingTypeCard from './MeetingTypeCard';

const MeetingTypeList = () => {
	const [meetingState, setMeetingState] = useState<
		'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined
	>();
	const router = useRouter();

	const createMeeting = () => {
		// setMeetingState(undefined);
		alert('Coming too soon!');
	};

	return (
		<section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
			<MeetingTypeCard
				className='bg-orange-1'
				imgSrc={'/icons/add-meeting.svg'}
				title={'New Meeting'}
				description={'Start a new meeting'}
				handleClick={() => setMeetingState('isInstantMeeting')}
			/>
			<MeetingTypeCard
				className='bg-blue-1'
				imgSrc={'/icons/schedule.svg'}
				title={'Schedule Meeting'}
				description={'Plan your meeting'}
				handleClick={() => setMeetingState('isScheduleMeeting')}
			/>
			<MeetingTypeCard
				className='bg-purple-1'
				imgSrc={'/icons/recordings.svg'}
				title={'View Recordings'}
				description={'Check out your recordings'}
				handleClick={() => router.push('/recordings')}
			/>
			<MeetingTypeCard
				className='bg-yellow-1'
				imgSrc={'/icons/join-meeting.svg'}
				title={'Join Meeting'}
				description={'Via invitation link'}
				handleClick={() => setMeetingState('isJoiningMeeting')}
			/>

			<MeetingModal
				isOpen={meetingState === 'isInstantMeeting'}
				onClose={() => setMeetingState(undefined)}
				title={'Start an Instant Meeting'}
				className='text-center'
				buttonText={'Start Meeting'}
				handleClick={createMeeting}
			/>
		</section>
	);
};

export default MeetingTypeList;
