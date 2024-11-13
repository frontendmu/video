import { BlackPantherTemplate, getDurationInFrames as getBlackPantherDurationInFrames } from "../templates/BlackPantherTemplate";
import { SnowWhiteTemplate, getDurationInFrames as getSnowWhiteDurationInFrames } from "../templates/SnowWhiteTemplate";
import { TemplateConfig } from "../types";

export const TEMPLATE_CONFIGS = {
	blackPanther: {
    component: BlackPantherTemplate,
    label: 'Black Panther',
    fps: 30,
    width: 720,
    height: 1280,
    getDurationInFrames: getBlackPantherDurationInFrames,
  },
	snowWhite: {
    component: SnowWhiteTemplate,
    label: 'Snow White',
    fps: 30,
    width: 720,
    height: 1280,
    getDurationInFrames: getSnowWhiteDurationInFrames,
  },
	squareRoot: {
    component: SnowWhiteTemplate,
    label: 'Square Root',
    fps: 30,
    width: 1080,
    height: 1080,
    getDurationInFrames: getSnowWhiteDurationInFrames,
  },
	youtube: {
    component: BlackPantherTemplate,
    label: 'YouTube',
    fps: 30,
    width: 1920,
    height: 1080,
    getDurationInFrames: getBlackPantherDurationInFrames,
  },
} satisfies TemplateConfig