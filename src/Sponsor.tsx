import {
	AbsoluteFill,
	Img,
	staticFile,
	useCurrentFrame,
	interpolate,
	useVideoConfig,
} from 'remotion';
import {Title} from './Title';
import {z} from 'zod';
import {Background} from './Background';
import {zColor} from '@remotion/zod-types';

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
});

const SponsorLogo: React.FC = () => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();
	const opacity = interpolate(
		frame,
		[0, 20, durationInFrames - 20, durationInFrames],
		[0, 1, 1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		},
	);
	return (
		<Img
			src={staticFile('sponsor.png')}
			alt="Sponsor logo"
			className="size-72 rounded-full object-cover"
			style={{opacity}}
		/>
	);
};

export const Sponsor: React.FC<z.infer<typeof myCompSchema>> = ({
	titleText: propOne,
	titleColor: propTwo,
}) => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();
	const opacity = interpolate(
		frame,
		[0, 20, durationInFrames - 20, durationInFrames],
		[0, 1, 1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		},
	);
	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center relative">
			<Background />
			<div className="flex flex-col gap-y-16 items-center relative z-100">
				<Title
					titleText={propOne}
					titleColor={propTwo}
					titleSize="text-6xl"
					titleOpacity={opacity}
				/>
				<SponsorLogo />
			</div>
		</AbsoluteFill>
	);
};
