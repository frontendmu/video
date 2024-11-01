import { z } from "zod";
import { TEMPLATE_CONFIGS } from "./constants";
import { SponsorDetail } from "./components/Sponsor";

const sessionDetails = z.object({
	speakerName: z.string(),
	speakerGitHub: z.string().optional().nullable(),
	speakerJob: z.string(),
	sessionTitle: z.string(),
});

const meetupDetails = z.object({
	meetupDate: z.string(),
	meetupId: z.number(),
	meetupTitle: z.string(),
	sessionDetails: z.array(sessionDetails),
	sponsorsDetails: z.array(SponsorDetail),
});

export type Session = z.infer<typeof sessionDetails>

export type Meetup = z.infer<typeof meetupDetails>

export type TemplateConfig = Record<string, {
  component: React.FC;
  label: string;
  fps: number;
  width: number;
  height: number;
}>

export type Template = keyof typeof TEMPLATE_CONFIGS