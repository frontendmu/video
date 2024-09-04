import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Logo: React.FC<{
	logoColor: string;
	height?: number;
}> = ({logoColor, height = 240}) => {
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
	const wave2 = Math.cos((frame - 5) / 15) * 10 + entranceOffset;

	return (
		<div>
			{/* <svg
				style={{transform: `translateY(${wave1}px)`}}
				className="absolute"
				height={120}
				viewBox="0 0 51 31"
			>
				<path
					d="M0 25.364C1.701 18.6 5.954 15.218 12.758 15.218C19.0815 15.218 21.9775 18.1395 24.4794 20.6634L24.48 20.664C26.015 22.213 27.403 23.613 29.344 24.096C32.746 24.941 35.723 23.673 38.275 20.291C36.574 27.055 32.321 30.436 25.517 30.436C19.1925 30.436 16.2975 27.5155 13.7956 24.9916L13.795 24.991C12.26 23.441 10.872 22.041 8.93 21.559C5.529 20.714 2.552 21.982 0 25.364Z"
					style={{fill: logoColor}}
				/>
			</svg>
			<svg
				style={{transform: `translateY(${wave2}px)`}}
				height={120}
				viewBox="0 0 51 31"
			>
				<path
					d="M12 10.146C13.701 3.382 17.954 0 24.758 0C31.0815 0 33.9775 2.92151 36.4794 5.44536L36.48 5.446C38.015 6.995 39.403 8.395 41.344 8.878C44.746 9.723 47.723 8.455 50.275 5.073C48.574 11.837 44.321 15.218 37.517 15.218C31.1925 15.218 28.2975 12.2975 25.7956 9.77365L25.795 9.773C24.26 8.223 22.872 6.823 20.93 6.341C17.529 5.496 14.552 6.764 12 10.146Z"
					style={{fill: logoColor}}
				/>
			</svg> */}
			<svg 
			style={{transform: `translateY(${wave1}px)`}}
				height={height} viewBox="0 0 1634 1634" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="817.001" cy="817" r="499.621" fill={logoColor} />
				<path d="M710.863 1297.03C850.345 1327.67 1160.72 1344.79 1330.11 1109M16.6127 933.7C-41.1924 357.295 420.962 166.007 665.628 166.007C1114.17 166.007 1310.45 511.511 1310.45 821.802" stroke={logoColor}  strokeWidth="16.4077" strokeLinecap="round" strokeLinejoin="round"/>
				<circle cx="817" cy="817" r="808.796" stroke={logoColor}  strokeWidth="16.4077"/>
				<path d="M1059.84 42.9883C1239.33 135.824 1583.56 485.81 1386.36 1026" stroke="url(#paint0_linear_1_82)" strokeWidth="16.4077" strokeLinecap="round"/>
				<path d="M864.103 1476C1107.02 1480.57 1664.46 1311.59 1623.54 758.035" stroke={logoColor}  strokeWidth="16.4077" strokeLinecap="round"/>
				<path d="M901.604 330.184C483.206 238.014 -172.867 886.741 513.112 1500.23" stroke="url(#paint1_linear_1_82)" strokeWidth="16.4077" strokeLinecap="round"/>
				<path fillRule="evenodd" clipRule="evenodd" d="M729.552 487.309H842.012L702.842 815.384L702.812 815.454L576.353 1116.34H463.927L729.552 487.309ZM907.589 554.306L1170.28 817.174L696.24 1055.4L756.975 910.635L1002.46 794.368L864.75 654.646L907.589 554.306Z" fill="white"/>
				<circle cx="1059.83" cy="42.9673" r="15.0746" fill="#FFE353" stroke="white" strokeWidth="4.51211"/>
				<circle cx="1616.67" cy="939.647" r="15.0746" fill="black" stroke="white" strokeWidth="4.51211"/>
				<circle cx="317.181" cy="819.256" r="15.0746" fill="#1C6FBC" stroke="white" strokeWidth="4.51211"/>
				<circle cx="863.967" cy="1475.97" r="15.0746" fill="black" stroke="white" strokeWidth="4.51211"/>
				<circle cx="514.893" cy="1500.17" r="15.0746" fill="black" stroke="white" strokeWidth="4.51211"/>
				<circle cx="514.893" cy="415.833" r="15.0746" fill="#FF0000" stroke="white" strokeWidth="4.51211"/>
				<circle cx="17.3306" cy="910.729" r="15.0746" fill="black" stroke="white" strokeWidth="4.51211"/>
				<defs>
				<linearGradient id="paint0_linear_1_82" x1="903.551" y1="-1673.89" x2="1252.67" y2="1025.99" gradientUnits="userSpaceOnUse">
				<stop stopColor={logoColor} />
				<stop offset="1" stopColor={logoColor}  stopOpacity="0"/>
				</linearGradient>
				<linearGradient id="paint1_linear_1_82" x1="555.02" y1="321.367" x2="555.02" y2="1500.23" gradientUnits="userSpaceOnUse">
				<stop stopColor={logoColor}  stopOpacity="0"/>
				<stop offset="1" stopColor={logoColor} />
				</linearGradient>
				</defs>
			</svg>

		</div>
	);
};
