import {enableTailwind} from '@remotion/tailwind';
import {WebpackOverrideFn} from '@remotion/bundler';

export const webpackOverride: WebpackOverrideFn = (currentConfiguration) => {
	const newConfig = enableTailwind(currentConfiguration);
	if (newConfig.module && newConfig.module.rules) {
		newConfig.module.rules.push({
			test: /\.(mp3|wav|ogg)$/,
			use: [
				{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
					},
				},
			],
		});
	}
	return newConfig;
};
