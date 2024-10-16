import { z } from "zod";
import { SponsorDetail } from "../components/Sponsor";
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

export const DefaultTemplateProps = z.object({
	meetupDetails: SingleMeetup,
	template: z.string()
});

export default function DefaultTemplate({meetupDetails, template}: z.infer<typeof DefaultTemplateProps>) {
	const VideoComponent = TEMPLATE_CONFIGS[template as Template]?.component

  return <VideoComponent meetupDetails={meetupDetails} />
}