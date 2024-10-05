import React from 'react';

export const Title: React.FC<{
	titleText: string;
	titleColor?: string;
	titleSize?: string;
	titleOpacity?: number;
	titleTransform?: string;
}> = ({
	titleText,
	titleColor = '#ffffff',
	titleSize = 'text-8xl',
	titleOpacity = 1,
	titleTransform = 'none',
}) => {
	return (
		<div
			style={{
				opacity: titleOpacity,
				color: titleColor,
				transform: titleTransform,
			}}
			className={`${titleSize} font-bold text-center uppercase overflow-hidden w-8/12 flex justify-center`}
		>
			{titleText}
		</div>
	);
};
