import { BlackPantherTemplate } from "./templates/BlackPantherTemplate";
import { SnowWhiteTemplate } from "./templates/SnowWhiteTemplate";
import { TemplateConfig } from "./types";

export const TEMPLATE_CONFIGS: TemplateConfig = {
	blackPanther: {
    component: BlackPantherTemplate,
    fps: 30,
    width: 720,
    height: 1280,
  },
	snowWhite: {
    component: SnowWhiteTemplate,
    fps: 30,
    width: 720,
    height: 1280,
  },
	squareRoot: {
    component: SnowWhiteTemplate,
    fps: 30,
    width: 1080,
    height: 1080,
  },
	youtube: {
    component: BlackPantherTemplate,
    fps: 30,
    width: 1920,
    height: 1080,
  },
} as const