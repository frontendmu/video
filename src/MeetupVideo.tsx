import React from 'react';
import {Sequence, useVideoConfig, Audio, staticFile} from 'remotion';
import {Cover} from './Cover';
import {Speaker} from './Speaker';
import meetupDetails from '../latest_meetup_details.json';
import {Sponsor} from './Sponsor';

export const MeetupVideo: React.FC = () => {
	const {fps} = useVideoConfig();
	const slideDuration = 6 * fps; // x seconds per slide

	const titleColor = '#ffffff';
	const logoColor = '#ffffff';

	return (
		<>
			<Audio startFrom={90} src={staticFile('audio.mp3')} />

			<Sequence durationInFrames={slideDuration}>
				<Cover
					meetupDate="2024-10-26"
					titleColor={titleColor}
					logoColor={logoColor}
				/>
			</Sequence>
			<Sequence durationInFrames={slideDuration} from={slideDuration}>
				<Sponsor titleText="Sponsored By" titleColor={titleColor} />
			</Sequence>
			{meetupDetails.map((session, index) => (
				<Sequence
					key={session.sessionTitle}
					from={slideDuration + (index + 1) * slideDuration}
					durationInFrames={slideDuration}
				>
					{/* <div className='text-white'>{alert(session.sessionTitle)}</div> */}
					<Speaker
						sessionText={session.sessionTitle}
						titleColor={titleColor}
						githubUsername={session.speakerGitHub}
						speakerName={session.speakerName}
					/>
				</Sequence>
			))}
		</>
	);
};
