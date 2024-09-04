import {interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';
import React from 'react';

export const Title: React.FC<{
	titleText: string;
}> = ({titleText}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [20, 40], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<div
			style={{opacity}}
			className="text-5xl text-white font-bold leading-relaxed px-8 text-center"
		>
			{' '}
			{titleText}
		</div>
	);
};
