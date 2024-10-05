import React from 'react';

export const SubtitleOutline: React.FC<{
	titleText: string;
	titleColor?: string;
	titleSize?: string;
	titleOpacity?: number;
	titleTransform?: string;
	titleWidth?: string;
}> = ({
	titleText,
	titleColor = 'rgb(75 85 99)',
	titleSize = 'text-5xl',
	titleOpacity = 1,
	titleTransform = 'none',
	titleWidth = 'w-10/12',
}) => {
	return (
		<div
			className={`${titleSize} font-semibold uppercase text-center overflow-hidden ${titleWidth} flex justify-center mt-12`}
			style={{
				opacity: titleOpacity,
				color: '000000',
				WebkitTextStroke: `4px ${titleColor}`,
				transform: titleTransform,
			}}
		>
			{titleText}
		</div>
	);
};
