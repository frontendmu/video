import { BlackPantherTemplate } from "./templates/BlackPantherTemplate";
import { SnowWhiteTemplate } from "./templates/SnowWhiteTemplate";

export const TEMPLATE_CONFIGS = {
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
} as const