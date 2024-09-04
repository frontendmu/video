import {Composition} from 'remotion';
import {SlideSequence} from './SlideSequence';
import {MyComposition, myCompSchema} from './Composition';
import {MySpeaker } from './Speaker';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="SlideSequence"
				component={SlideSequence}
				durationInFrames={480} // Adjust based on total number of slides
				fps={30}
				width={720}
				height={1280}
			/>
			{/* <Composition
				id="Intro"
				component={MyComposition}
				durationInFrames={240}
				fps={30}
				width={720}
				height={1280}
				schema={myCompSchema}
				defaultProps={{
					titleText: 'frontend.mu',
					titleColor: '#000000',
					logoColor: '#ff0000',
				}}
			/>
			<Composition
				id="Speaker1"
				component={MySpeaker}
				durationInFrames={240}
				fps={30}
				width={720}
				height={1280}
				schema={myCompSchema}
				defaultProps={{
					titleText: 'Another slide',
					titleColor: '#000000',
					logoColor: '#00bfff',
				}}
			/> */}
		</>
	);
};
