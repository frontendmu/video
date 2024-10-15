import { zColor } from '@remotion/zod-types';
import {
	Img,
	interpolate,
	useCurrentFrame,
	useVideoConfig
} from 'remotion';
import { z } from 'zod';
import { Subtitle } from './Subtitle';
import { Title } from './Title';

export const GithubUsername = z.string().nullable().optional();

export const myCompSchema = z.object({
	sessionText: z.string(),
	titleColor: zColor(),
	githubUsername: GithubUsername,
	speakerName: z.string(),
	speakerJob: z.string(),
});

export const PropsGithubUsername = z.object({
	githubUsername: GithubUsername,
});

const ProfilePicture: React.FC<z.infer<typeof PropsGithubUsername>> = ({
	githubUsername,
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
		<Img
			src={`https://github.com/${githubUsername}.png`}
			alt={`${githubUsername}'s avatar`}
			className="size-80 rounded-full object-cover my-6"
			style={{opacity}}
		/>
	);
};

const SpeakerJob: React.FC<{speakerJob: string; titleColor: string}> = ({
	speakerJob,
	titleColor,
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
	if (!speakerJob) {
		return null;
	}
	return (
		<Subtitle
			titleText={speakerJob}
			titleColor={titleColor}
			titleOpacity={opacity}
			titleSize="text-4xl"
		/>
	);
};

export const Speaker: React.FC<z.infer<typeof myCompSchema>> = ({
	sessionText,
	titleColor,
	githubUsername,
	speakerName,
	speakerJob,
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
		<div className="flex flex-col gap-8 items-center relative z-100">
			<Title
				titleText={sessionText}
				titleColor={titleColor}
				titleOpacity={opacity}
				titleSize="text-6xl"
				titleOtherClasses="leading-snug tracking-wide "
			/>
			<ProfilePicture githubUsername={githubUsername} />
			<Title
				titleText={speakerName}
				titleColor={titleColor}
				titleSize="text-5xl"
				titleOpacity={opacity}
			/>
			<SpeakerJob speakerJob={speakerJob} titleColor={titleColor} />
		</div>
	);
};
