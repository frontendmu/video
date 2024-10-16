import React, { PropsWithChildren } from 'react';
import {Sequence, useVideoConfig, Audio, staticFile, AbsoluteFill} from 'remotion';
import {DaylightCover} from '../components/Cover/DaylightCover';
import {Rsvp} from '../components/Rsvp';
import {Speaker} from '../components/Speaker';
// import meetupDetails from '../latest_meetup_details.json';
import {Sponsor} from '../components/Sponsor';
import {z} from 'zod';
import { WaveBackground } from '../components/WaveBackground';
import { SingleMeetup } from './DefaultTemplate';

export const SnowWhiteTemplateProps = z.object({
	meetupDetails: SingleMeetup,
});

function FrameWrapper({children}: PropsWithChildren) {
	return (
		<AbsoluteFill className="from-[#ffffff] to-[#c1c9dc] bg-gradient-to-tl items-center justify-center relative">
			<WaveBackground />
			{children}
		</AbsoluteFill>
	)
}

export const SnowWhiteTemplate: React.FC<z.infer<typeof SnowWhiteTemplateProps>> = ({
	meetupDetails,
}) => {
	const {fps} = useVideoConfig();
	const slideDuration = 6 * fps; // x seconds per slide

	const titleColor = '#000000';
	const logoColor = '#487bb3';

	return (
		<>
			<Audio
				startFrom={slideDuration}
				endAt={slideDuration * (3 + (meetupDetails.sessionDetails.length + 1))}
				src={staticFile('audio.mp3')}
			/>

			<Sequence name="Cover" durationInFrames={slideDuration}>
				<FrameWrapper>
					<DaylightCover
						meetupDate={meetupDetails.meetupDate}
						titleColor={titleColor}
						logoColor={logoColor}
						meetupTitle={meetupDetails.meetupTitle}
					/>
				</FrameWrapper>
			</Sequence>
			{meetupDetails.sponsorsDetails.map((sponsor) => (
				<Sequence
					key={sponsor.name}
					name={`Sponsor - ${sponsor.name}`}
					durationInFrames={slideDuration}
					from={slideDuration}
				>
					<FrameWrapper>
						<Sponsor
							titleText="Sponsored By"
							titleColor={titleColor}
							sponsorDetail={sponsor}
						/>
					</FrameWrapper>
				</Sequence>
			))}
			{meetupDetails.sessionDetails.map((session, index) => (
				<Sequence
					key={`${session.sessionTitle}-${session.speakerName}`}
					name={`Session - ${session.sessionTitle}`}
					from={slideDuration + (index + 1) * slideDuration}
					durationInFrames={slideDuration}
				>
					<FrameWrapper>
						<Speaker
							sessionText={session.sessionTitle}
							titleColor={titleColor}
							githubUsername={session.speakerGitHub}
							speakerName={session.speakerName}
							speakerJob={session.speakerJob}
						/>
					</FrameWrapper>
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
				<FrameWrapper>
					<Rsvp
						titleColor={titleColor}
						titleText="Rsvp now on frontend.mu"
						meetupUrl={`frontend.mu/meetup/${meetupDetails.meetupId}`}
					/>
				</FrameWrapper>
			</Sequence>
		</>
	);
};
