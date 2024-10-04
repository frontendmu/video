import {AbsoluteFill, Img, staticFile} from 'remotion';
import {Title} from './Title';
import {z} from 'zod';
import {Background} from './Background';

export const myCompSchema = z.object({
	titleText: z.string(),
});

const SponsorLogo: React.FC = () => {
	return (
		<Img
			src={staticFile('sponsor.png')}
			alt="Sponsor logo"
			className="size-72 rounded-full object-cover"
		/>
	);
};

export const Sponsor: React.FC<z.infer<typeof myCompSchema>> = ({
	titleText: propOne,
}) => {
	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center relative">
			<Background />
			<div className="flex flex-col gap-8 items-center relative z-100">
				<Title titleText={propOne} />
				<SponsorLogo />
			</div>
		</AbsoluteFill>
	);
};
