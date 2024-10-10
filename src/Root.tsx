import {Composition} from 'remotion';
import {MeetupVideo} from './MeetupVideo';
import './style.css';
import allMeetups from '../all-meetups.json';


// a function that only allows a-z, A-Z, 0-9, CJK, but no spaces
function removeSpecialChars(str:  string) {
	return str.replace(/[^a-zA-Z0-9\u4E00-\u9FFF]/g, '');
}

export const RemotionRoot: React.FC = () => {
	return (
		<>
			{allMeetups.map((meetup) => (
				<Composition
					key={meetup.meetupId}
					id={removeSpecialChars(meetup.meetupTitle)}
					component={MeetupVideo}
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
			{/* <Composition
				id="MeetupVideo"
				component={MeetupVideo}
				meetupDetails={{}}
				durationInFrames={240 * 6} // Adjust based on total number of slides
				fps={30}
				width={720}
				height={1280}
			/> */}
		</>
	);
};
