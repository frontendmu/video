import {Composition} from 'remotion';
import {BlackPantherTemplate} from '../templates/BlackPantherTemplate';
import {SnowWhiteTemplate} from '../templates/SnowWhiteTemplate';
import allMeetups from '../../all-meetups.json';
import '../styles/style.css';
import { ChangeEvent, useState } from 'react';


// a function that only allows a-z, A-Z, 0-9, CJK, but replace spaces with - and remove multiple - 
function removeSpecialChars(str:  string) {
	return str.replace(/[^a-zA-Z0-9\u4E00-\u9FFF]/g, '-').replace(/-+/g, '-');
}

const videoComponent = {
	blackPanther: BlackPantherTemplate,
	snowWhite: SnowWhiteTemplate,
}

export const RemotionRoot: React.FC = () => {
	const [template, setTemplate] = useState(Object.keys(videoComponent)[0])

	const changeTemplate = (e: ChangeEvent<HTMLSelectElement>) => {
		setTemplate(e.target.value)
	}

	const VideoComponent = videoComponent[template as keyof typeof videoComponent]

	return (
		<>
			<header className='flex flex-row justify-end items-center gap-1 text-sm'>
				<label htmlFor='template' className='text-zinc-300'>Template:</label>
				<select id="template" className="rounded-md px-2 py-1" onChange={changeTemplate}>
					<option value="blackPanther">Black Panther</option>
					<option value="snowWhite">Snow White</option>
				</select>
			</header>
			
			{allMeetups.map((meetup) => (
				<Composition
					key={meetup.meetupId}
					id={removeSpecialChars(meetup.meetupDate + '-' + meetup.meetupTitle)}
					component={VideoComponent}
					defaultProps={
						{
							meetupDetails: meetup,
						} 
					}
					durationInFrames={240 * 6} // Adjust based on total number of slides
					fps={30}
					width={720}
					height={1280}
				/>
			))}
		</>
	);
};
