import React from 'react';

export const Subtitle: React.FC<{
	titleText: string;
	titleColor?: string;
	titleSize?: string;
	titleOpacity?: number;
	titleTransform?: string;
	titleUnderline?: string;
	titleWidth?: string;
	titleOtherClasses?: string;
}> = ({
	titleText,
	titleColor = 'rgb(75 85 99)',
	titleSize = 'text-5xl',
	titleOpacity = 1,
	titleTransform = 'none',
	titleUnderline = 'no-underline',
	titleWidth = 'w-10/12',
	titleOtherClasses = '',
}) => {
	return (
		<div
			className={`text-center flex justify-center ${titleSize} ${titleUnderline} ${titleWidth} ${titleOtherClasses}`}
			style={{
				opacity: titleOpacity,
				color: titleColor,
				transform: titleTransform,
			}}
		>
			{titleText}
		</div>
	);
};
