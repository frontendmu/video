import {Composition} from 'remotion';
import {MeetupIntro} from './MeetupIntro';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MeetupIntro"
				component={MeetupIntro}
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
