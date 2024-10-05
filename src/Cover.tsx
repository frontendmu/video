import {AbsoluteFill} from 'remotion';
import {LogoFull} from './LogoFull';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';
import {Background} from './Background';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Title} from './Title';
import {SubtitleOutline} from './SubtitleOutline';

export const myCompSchema = z.object({
	meetupDate: z.string(),
	titleColor: zColor(),
	logoColor: zColor(),
});

export const Cover: React.FC<z.infer<typeof myCompSchema>> = ({
	meetupDate,
	titleColor: propTwo,
	logoColor: propThree,
}) => {
	const frame = useCurrentFrame();
	const {height: videoHeight, fps, durationInFrames} = useVideoConfig();

	const entrance = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: 30,
	});

	const exit = spring({
		fps,
		frame: frame - (durationInFrames - 30), // Start exit animation 30 frames before the end
		config: {
			damping: 200,
		},
		durationInFrames: 30,
	});

	const entranceOffset = interpolate(entrance, [0, 1], [videoHeight, 0]);
	const exitOffset = interpolate(exit, [0, 1], [0, videoHeight]);

	const wave1 = Math.cos(frame / 15) * 10 + entranceOffset + exitOffset;

	const mainContainerOpacity = interpolate(
		frame,
		[0, 30, durationInFrames - 30, durationInFrames],
		[0, 1, 1, 0],
	);

	const titleMainText = new Date(meetupDate).toLocaleString('en-US', {
		month: 'long',
	});

	const titleSubText = new Date(meetupDate).toDateString();

	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center">
			<Background />
			<div
				className="flex flex-col gap-4 items-center relative z-100"
				style={{opacity: mainContainerOpacity}}
			>
				<LogoFull color={propThree} wave={wave1} />

				<Title
					titleText={`${titleMainText} Meetup`}
					titleColor={propTwo}
					titleTransform={`translateY(${wave1}px)`}
				/>

				<SubtitleOutline
					titleText={titleSubText}
					titleColor={propTwo}
					titleTransform={`translateY(${wave1}px)`}
				/>
			</div>
		</AbsoluteFill>
	);
};
