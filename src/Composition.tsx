import {AbsoluteFill} from 'remotion';
import {Logo} from './Logo';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';
import { Background } from './Background';

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	logoColor: zColor(),
});

export const MyComposition: React.FC<z.infer<typeof myCompSchema>> = ({
	titleText,
	titleColor: propTwo,
	logoColor: propThree,
}) => {
	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center">
			<Background />
			<div className='flex flex-col gap-8 items-center relative z-100'>
				<Logo logoColor={propThree} />
				<div className="text-6xl text-white font-semibold">{titleText}</div>
				<div className="text-4xl text-white font-semibold">28 September 2024</div>
			</div>
		</AbsoluteFill>
	);
};
