import React from 'react';
import {Sequence, useVideoConfig, Audio, staticFile} from 'remotion';
import {Cover} from './Cover';
import {Speaker} from './Speaker';
import meetupDetails from '../latest_meetup_details.json';
import {Sponsor} from './Sponsor';

export const MeetupVideo: React.FC = () => {
	const {fps} = useVideoConfig();
	const slideDuration = 6 * fps; // x seconds per slide
	console.log(slideDuration);

	return (
		<>
			<Audio startFrom={90} src={staticFile('audio.mp3')} />

			<Sequence durationInFrames={slideDuration}>
				<Cover
					meetupDate="2024-10-26"
					titleColor="#ffffff"
					logoColor="#ffffff"
				/>
			</Sequence>
			<Sequence durationInFrames={slideDuration} from={slideDuration}>
				<Sponsor titleText="Sponsored By" />
			</Sequence>
			{meetupDetails.map((session, index) => (
				<Sequence
					key={session.sessionTitle}
					from={slideDuration + (index + 1) * slideDuration}
					durationInFrames={slideDuration}
				>
					{/* <div className='text-white'>{alert(session.sessionTitle)}</div> */}
					<Speaker
						titleText={session.sessionTitle}
						titleColor="#000000"
						logoColor="#00bfff"
						githubUsername={session.speakerGitHub}
						speakerName={session.speakerName}
					/>
				</Sequence>
			))}
		</>
	);
};
