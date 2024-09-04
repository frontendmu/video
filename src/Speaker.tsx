import {AbsoluteFill} from 'remotion';
import {Logo} from './Logo';
import {Subtitle} from './Subtitle';
import {Title} from './Title';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';
import { Background } from './Background';

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	logoColor: zColor(),
	githubUsername: z.string(),
	speakerName: z.string(),
});

const ProfilePicture: React.FC<{ githubUsername: string }> = ({ githubUsername }) => {
	return (
		<img
			src={`https://github.com/${githubUsername}.png`}
			alt={`${githubUsername}'s avatar`}
			className="w-64 h-64 rounded-full mb-4"
		/>
	);
};

export const MySpeaker: React.FC<z.infer<typeof myCompSchema>> = ({
	titleText: propOne,
	titleColor: propTwo,
	logoColor: propThree,
	githubUsername,
	speakerName,
}) => {
	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center relative">
			<Background />
			<div className='flex flex-col gap-8 items-center relative z-100'>
				<ProfilePicture githubUsername={githubUsername} />
				<div className="text-3xl text-white font-semibold">{speakerName}</div>
				<Title titleText={propOne} />
				<Subtitle />
				<Logo logoColor={propThree} height={100} />
				</div>
		</AbsoluteFill>
	);
};
