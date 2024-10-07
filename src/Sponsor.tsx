import {
	AbsoluteFill,
	Img,
	useCurrentFrame,
	interpolate,
	useVideoConfig,
} from 'remotion';
import {Title} from './Title';
import {z} from 'zod';
import {Background} from './Background/Background';
import {zColor} from '@remotion/zod-types';
import {Subtitle} from './Subtitle';

export const SponsorDetail = z.object({
	logo: z.string(),
	name: z.string(),
	darkbg: z.boolean(),
	venue: z.string(),
});

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	sponsorDetail: SponsorDetail,
});

export const LogoParams = z.object({
	sponsorDetail: SponsorDetail,
});

const SponsorLogo: React.FC<z.infer<typeof LogoParams>> = ({sponsorDetail}) => {
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
			src={sponsorDetail.logo}
			alt="Sponsor logo"
			className={`${sponsorDetail.darkbg ? 'bg-black' : 'bg-white'} w-full rounded-2xl object-contain p-4`}
			style={{opacity}}
		/>
	);
};

export const Sponsor: React.FC<z.infer<typeof myCompSchema>> = ({
	titleText,
	titleColor,
	sponsorDetail,
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
					titleText={titleText}
					titleColor={titleColor}
					titleSize="text-6xl"
					titleOpacity={opacity}
					titleWidth="w-12/12"
				/>
				<SponsorLogo sponsorDetail={sponsorDetail} />
				<Subtitle
					titleText={sponsorDetail.venue}
					titleColor={titleColor}
					titleOpacity={opacity}
					titleSize="text-5xl"
					titleWidth="w-full"
				/>
			</div>
		</AbsoluteFill>
	);
};
