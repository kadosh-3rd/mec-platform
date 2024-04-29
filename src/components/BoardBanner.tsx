'use client';

import { useEffect } from 'react';

const BoardBanner = () => {
	useEffect(() => {
		// timeElement and dateElement: These are references to the HTML elements with the IDs ‘time’ and ‘date’, respectively. The document.getElementById function is used to get these references.
		const timeElement = document.getElementById('time'),
			dateElement = document.getElementById('date');

		// updateClock Function: This function updates the text content of the timeElement and dateElement with the current time and date, respectively. It uses the toLocaleTimeString and Intl.DateTimeFormat functions to format the time and date.
		function updateClock() {
			const now = new Date();
			const time = now.toLocaleTimeString('en-US', {
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
			});
			const date = new Intl.DateTimeFormat('en-US', {
				dateStyle: 'full',
			}).format(now);

			if (timeElement) timeElement.textContent = time;
			if (dateElement) dateElement.textContent = date;
		}

		// Initial Call to updateClock: The updateClock function is called once immediately when the component mounts to ensure the time and date are displayed right away.
		updateClock();

		// setInterval Function: This is used to call the updateClock function every 1000 milliseconds (or 1 second), which keeps the time and date up-to-date.
		setInterval(updateClock, 1000);
	}, []);

	return (
		<div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
			<div className='flex flex-col h-full justify-between max-md:py-8 lg:p-11'>
				<h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>
					Upcoming Meeting at: 11:00 AM
				</h2>
				<div className='flex flex-col gap-2'>
					<h1 id='time' className='text-4xl font-extrabold lg:text-7xl '></h1>
					<p
						id='date'
						className='text-lg font-medium text-sky-1 lg:text-2xl'
					></p>
				</div>
			</div>
		</div>
	);
};

export default BoardBanner;
