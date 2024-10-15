import React from 'react';

export const LogoMinimal: React.FC<{
	color: string;
	wave?: number;
	width?: number;
	height?: number;
}> = ({color, wave = 0, width = 300, height = 300}) => {
	return (
		<div>
			<svg
				style={{transform: `translateY(${wave}px)`}}
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				width={width}
				zoomAndPan="magnify"
				viewBox="0 0 810 809.999993"
				height={height}
				preserveAspectRatio="xMidYMid meet"
				version="1.0"
			>
				<defs>
					<clipPath id="4ac60d2535">
						<path
							d="M 185.570312 142.863281 L 703.707031 142.863281 L 703.707031 607.332031 L 185.570312 607.332031 Z M 185.570312 142.863281 "
							clipRule="nonzero"
						/>
					</clipPath>
					<clipPath id="1c73f312de">
						<path
							d="M 185.570312 146 L 698 146 L 698 602 L 185.570312 602 Z M 185.570312 146 "
							clipRule="nonzero"
						/>
					</clipPath>
					<clipPath id="068d4c4bb3">
						<path
							d="M 70.582031 70.582031 L 739.414062 70.582031 L 739.414062 739.417969 L 70.582031 739.417969 Z M 70.582031 70.582031 "
							clipRule="nonzero"
						/>
					</clipPath>
					<clipPath id="90f7f1637d">
						<path
							d="M 405 70.582031 C 220.308594 70.582031 70.582031 220.308594 70.582031 405 C 70.582031 589.691406 220.308594 739.414062 405 739.414062 C 589.691406 739.414062 739.414062 589.691406 739.414062 405 C 739.414062 220.308594 589.691406 70.582031 405 70.582031 Z M 405 70.582031 "
							clipRule="nonzero"
						/>
					</clipPath>
				</defs>
				<g clipPath="url(#4ac60d2535)">
					<path
						strokeLinecap="butt"
						transform="matrix(0.479692, 0, 0, 0.479692, 57.114104, -3.340133)"
						fill="none"
						stroke-linejoin="miter"
						d="M 1593.558228 801.361149 C 1593.558228 1239.093192 1238.569708 1593.943278 800.658513 1593.943278 C 362.747319 1593.943278 7.758799 1239.093192 7.758799 801.361149 C 7.758799 363.629107 362.747319 8.779021 800.658513 8.779021 C 1238.569708 8.779021 1593.558228 363.629107 1593.558228 801.361149 Z M 1593.558228 801.361149 "
						stroke="#1c6fbc"
						strokeWidth="15.547"
						strokeOpacity="1"
						strokeMiterlimit="4"
					/>
				</g>
				<g clipPath="url(#1c73f312de)">
					<path
						fill={color}
						d="M 377.824219 146.238281 L 459.273438 146.238281 L 358.476562 383.75 L 358.457031 383.800781 L 266.863281 601.628906 L 185.4375 601.628906 Z M 506.769531 194.742188 L 697.027344 385.046875 L 353.695312 557.511719 L 397.683594 452.707031 L 575.480469 368.535156 L 475.742188 267.382812 Z M 506.769531 194.742188 "
						fillOpacity="1"
						fillRule="evenodd"
					/>
				</g>
				<g clipPath="url(#068d4c4bb3)">
					<g clipPath="url(#90f7f1637d)">
						<path
							strokeLinecap="butt"
							transform="matrix(2.064296, 0, 0, 2.064296, 70.583964, 70.58398)"
							fill="none"
							stroke-linejoin="miter"
							d="M 162.00001 -0.000944244 C 72.530587 -0.000944244 -0.000936251 72.530579 -0.000936251 162.000002 C -0.000936251 251.469425 72.530587 323.999056 162.00001 323.999056 C 251.469433 323.999056 323.999064 251.469425 323.999064 162.000002 C 323.999064 72.530579 251.469433 -0.000944244 162.00001 -0.000944244 Z M 162.00001 -0.000944244 "
							stroke="#ffffff"
							strokeWidth="2.906559"
							strokeOpacity="1"
							strokeMiterlimit="4"
						/>
					</g>
				</g>
			</svg>
		</div>
	);
};
