import React from 'react';

export const Title: React.FC<{
	titleText: string;
	titleColor?: string;
	titleSize?: string;
	titleOpacity?: number;
	titleTransform?: string;
	titleWidth?: string;
	titleOtherClasses?: string;
}> = ({
	titleText,
	titleColor = '#ffffff',
	titleSize = 'text-8xl',
	titleOpacity = 1,
	titleTransform = 'none',
	titleWidth = 'w-10/12',
	titleOtherClasses = '',
}) => {
	return (
		<div
			style={{
				opacity: titleOpacity,
				color: titleColor,
				transform: titleTransform,
			}}
			className={`font-bold text-center flex justify-center ${titleWidth} ${titleSize}  ${titleOtherClasses}`}
		>
			{titleText}
		</div>
	);
};
