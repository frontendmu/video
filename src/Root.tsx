import {Composition} from 'remotion';
import {MeetupIntro} from './MeetupIntro';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MeetupIntro"
				component={MeetupIntro}
				durationInFrames={240*6} // Adjust based on total number of slides
				fps={30}
				width={720}
				height={1280}
			/>
		</>
	);
};
