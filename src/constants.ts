import { BlackPantherTemplate } from "./templates/BlackPantherTemplate";
import { SnowWhiteTemplate } from "./templates/SnowWhiteTemplate";
import { TemplateConfig } from "./types";

export const TEMPLATE_CONFIGS: TemplateConfig = {
	blackPanther: {
    component: BlackPantherTemplate,
    label: 'Black Panther',
    fps: 30,
    width: 720,
    height: 1280,
  },
	snowWhite: {
    component: SnowWhiteTemplate,
    label: 'Snow White',
    fps: 30,
    width: 720,
    height: 1280,
  },
	squareRoot: {
    component: SnowWhiteTemplate,
    label: 'Square Root',
    fps: 30,
    width: 1080,
    height: 1080,
  },
	youtube: {
    component: BlackPantherTemplate,
    label: 'YouTube',
    fps: 30,
    width: 1920,
    height: 1080,
  },
} as const