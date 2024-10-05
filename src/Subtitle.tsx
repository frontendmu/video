import React from 'react';

export const Subtitle: React.FC<{
	titleText: string;
	titleColor?: string;
	titleSize?: string;
	titleOpacity?: number;
	titleTransform?: string;
}> = ({
	titleText,
	titleColor = 'rgb(75 85 99)',
	titleSize = 'text-5xl',
	titleOpacity = 1,
	titleTransform = 'none',
}) => {
	return (
		<div
			className={`${titleSize} uppercase text-center overflow-hidden w-8/12 flex justify-center`}
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
