import React from 'react';
import {Sequence, useVideoConfig, Audio, staticFile} from 'remotion';
import {Cover} from './Cover';
import {Rsvp} from './Rsvp';
import {Speaker} from './Speaker';
// import meetupDetails from '../latest_meetup_details.json';
import {Sponsor, SponsorDetail} from './Sponsor';
import {z} from 'zod';

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

export const MeetupDetails = z.object({
	meetupDetails: SingleMeetup,
});

export const MeetupVideo: React.FC<z.infer<typeof MeetupDetails>> = ({
	meetupDetails,
}) => {
	const {fps} = useVideoConfig();
	const slideDuration = 6 * fps; // x seconds per slide

	const titleColor = '#ffffff';
	const secondaryTitleColor = 'hsl(331, 90%, 56%)';
	const logoColor = '#ffffff';

	return (
		<>
			<Audio
				startFrom={slideDuration}
				endAt={slideDuration * (3 + (meetupDetails.sessionDetails.length + 1))}
				src={staticFile('audio.mp3')}
			/>

			<Sequence name="Cover" durationInFrames={slideDuration}>
				<Cover
					meetupDate={meetupDetails.meetupDate}
					titleColor={titleColor}
					secondaryTitleColor={secondaryTitleColor}
					logoColor={logoColor}
					meetupTitle={meetupDetails.meetupTitle}
				/>
			</Sequence>
			{meetupDetails.sponsorsDetails.map((sponsor) => (
				<Sequence
					key={sponsor.name}
					name={`Sponsor - ${sponsor.name}`}
					durationInFrames={slideDuration}
					from={slideDuration}
				>
					<Sponsor
						titleText="Sponsored By"
						titleColor={titleColor}
						sponsorDetail={sponsor}
					/>
				</Sequence>
			))}
			{meetupDetails.sessionDetails.map((session, index) => (
				<Sequence
					key={`${session.sessionTitle}-${session.speakerName}`}
					name={`Session - ${session.sessionTitle}`}
					from={slideDuration + (index + 1) * slideDuration}
					durationInFrames={slideDuration}
				>
					{/* <div className='text-white'>{alert(session.sessionTitle)}</div> */}
					<Speaker
						sessionText={session.sessionTitle}
						titleColor={titleColor}
						githubUsername={session.speakerGitHub}
						speakerName={session.speakerName}
						speakerJob={session.speakerJob}
					/>
				</Sequence>
			))}
			<Sequence
				name="RSVP"
				durationInFrames={slideDuration}
				from={
					slideDuration * meetupDetails.sessionDetails.length +
					slideDuration * 2
				}
			>
				<Rsvp
					titleColor={titleColor}
					titleText="Rsvp now on frontend.mu"
					meetupUrl={`frontend.mu/meetup/${meetupDetails.meetupId}`}
				/>
			</Sequence>
		</>
	);
};
