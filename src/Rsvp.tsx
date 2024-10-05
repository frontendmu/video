import {
	AbsoluteFill,
	useCurrentFrame,
	useVideoConfig,
	interpolate,
} from 'remotion';
import {Title} from './Title';
import {LogoMinimal} from './LogoMinimal';
import {SubtitleOutline} from './SubtitleOutline';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';
import {Background} from './Background';

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	meetupUrl: z.string(),
});

export const Rsvp: React.FC<z.infer<typeof myCompSchema>> = ({
	titleColor,
	titleText,
	meetupUrl,
}) => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();
	const textOpacity = interpolate(
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
			<div className="flex flex-col gap-8 items-center relative z-100">
				<LogoMinimal color={titleColor} />
				<Title
					titleText={titleText}
					titleColor={titleColor}
					titleOpacity={textOpacity}
					titleSize="text-6xl"
				/>

				<SubtitleOutline
					titleText={meetupUrl}
					titleOpacity={textOpacity}
					titleSize="text-5xl"
					titleColor={titleColor}
					titleWidth="w-12/12"
				/>
			</div>
		</AbsoluteFill>
	);
};
