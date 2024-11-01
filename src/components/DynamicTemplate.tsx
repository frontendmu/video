import { z } from "zod";
import { SponsorDetail } from "./Sponsor";
import { TEMPLATE_CONFIGS } from "../constants";
import { Template } from "../types";

export const SessionDetails = z.object({
	speakerName: z.string(),
	speakerGitHub: z.string().optional().nullable(),
	speakerJob: z.string(),
	sessionTitle: z.string(),
});

export const SingleMeetup = z.object({
	meetupDate: z.string(),
	meetupId: z.number(),
	meetupTitle: z.string(),
	sessionDetails: z.array(SessionDetails),
	sponsorsDetails: z.array(SponsorDetail),
});

export const DynamicTemplateProps = z.object({
	meetupDetails: SingleMeetup,
	template: z.string()
});

export default function DynamicTemplate({meetupDetails, template}: z.infer<typeof DynamicTemplateProps>) {
	const VideoComponent = TEMPLATE_CONFIGS[template as Template]?.component

  return <VideoComponent meetupDetails={meetupDetails} />
}