import {Composition} from 'remotion';
import {MeetupVideo} from './MeetupVideo';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MeetupVideo"
				component={MeetupVideo}
				durationInFrames={240 * 6} // Adjust based on total number of slides
				fps={30}
				width={720}
				height={1280}
			/>
		</>
	);
};
