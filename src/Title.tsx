import React from 'react';

export const Title: React.FC<{
	titleText: string;
	titleColor?: string;
	titleSize?: string;
	titleOpacity?: number;
	titleTransform?: string;
	titleWidth?: string;
}> = ({
	titleText,
	titleColor = '#ffffff',
	titleSize = 'text-8xl',
	titleOpacity = 1,
	titleTransform = 'none',
	titleWidth = 'w-10/12',
}) => {
	return (
		<div
			style={{
				opacity: titleOpacity,
				color: titleColor,
				transform: titleTransform,
			}}
			className={`${titleSize} leading-relaxed tracking-wide font-bold text-center overflow-hidden ${titleWidth} flex justify-center`}
		>
			{titleText}
		</div>
	);
};
