import {AbsoluteFill} from 'remotion';
import {LogoFull} from './LogoFull';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';
import {Background} from './Background';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

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
	const {height: videoHeight, fps} = useVideoConfig();

	const entrance = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: 30,
	});

	const entranceOffset = interpolate(entrance, [0, 1], [videoHeight, 0]);

	const wave1 = Math.cos(frame / 15) * 10 + entranceOffset;

	const titleMainText = new Date(meetupDate).toLocaleString('en-US', {
		month: 'long',
	});

	const titleSubText = new Date(meetupDate).toDateString();

	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center">
			<Background />
			<div className="flex flex-col gap-4 items-center relative z-100">
				<LogoFull color={propThree} />
				<div
					className="text-8xl font-bold uppercase"
					style={{color: propTwo, transform: `translateY(${wave1}px)`}}
				>
					{titleMainText}
				</div>
				<div
					className="text-8xl font-bold uppercase"
					style={{color: propTwo, transform: `translateY(${wave1}px)`}}
				>
					Meetup
				</div>
				<div
					className="text-6xl font-semibold mt-12 uppercase"
					style={{
						color: '000000',
						WebkitTextStroke: `4px ${propTwo}`,
						transform: `translateY(${wave1}px)`,
					}}
				>
					{titleSubText}
				</div>
			</div>
		</AbsoluteFill>
	);
};
