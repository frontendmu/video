import React, { PropsWithChildren } from 'react';
import {Sequence, useVideoConfig, Audio, staticFile, AbsoluteFill} from 'remotion';
import {DaylightCover} from '../components/cover/DaylightCover';
import {Rsvp} from '../components/Rsvp';
import {Speaker} from '../components/Speaker';
import {Sponsor} from '../components/Sponsor';
import { WaveBackground } from '../components/WaveBackground';
import { useTemplate } from '../context/TemplateProvider';
import { Meetup } from '../types';
import { SOUNDTRACK_CONFIGS } from '../utils/constants';

function FrameWrapper({children}: PropsWithChildren) {
	return (
		<AbsoluteFill className="from-[#ffffff] to-[#c1c9dc] bg-gradient-to-tl items-center justify-center relative">
			<WaveBackground />
			{children}
		</AbsoluteFill>
	)
}

export const getDurationInFrames = (meetupDetails: Meetup, fps: number) => {
	const coverDurationInSeconds = 3;
	const coverDurationInFrames = coverDurationInSeconds * fps;

	const individualSponsorDurationInSeconds = 6;
	const totalSponsorsDurationInSeconds = individualSponsorDurationInSeconds * meetupDetails.sponsorsDetails.length;
	const totalSponsorsDurationInFrames = totalSponsorsDurationInSeconds * fps;

	const individualSpeakerDurationInSeconds = 6;
	const totalSpeakersDurationInSeconds = individualSpeakerDurationInSeconds * meetupDetails.sessionDetails.length;
	const totalSpeakersDurationInFrames = totalSpeakersDurationInSeconds * fps;

	const rsvpDurationInSeconds = 6;
	const rsvpDurationInFrames = rsvpDurationInSeconds * fps;

	const totalDurationInFrames = coverDurationInFrames + totalSponsorsDurationInFrames + totalSpeakersDurationInFrames + rsvpDurationInFrames;

	return {
		cover: coverDurationInFrames,
		sponsor: {
			individual: individualSponsorDurationInSeconds * fps,
			total: totalSponsorsDurationInFrames,
		},
		speaker: {
			individual: individualSpeakerDurationInSeconds * fps,
			total: totalSpeakersDurationInFrames,
		},
		rsvp: rsvpDurationInFrames,
		total: totalDurationInFrames,
	};
}

export const SnowWhiteTemplate: React.FC = () => {
	const {fps} = useVideoConfig();
	const {soundtrack, meetupDetails} = useTemplate();
	const frames = getDurationInFrames(meetupDetails, fps);
	const titleColor = '#000000';
	const logoColor = '#487bb3';

	return (
		<>
			<Audio
				loop
				src={staticFile(SOUNDTRACK_CONFIGS[soundtrack].path)}
				startFrom={3 * fps} // the time in the raw audio file from which it will start playing
			/>

			<Sequence name="Cover" durationInFrames={frames.cover}>
				<FrameWrapper>
					<DaylightCover
						meetupDate={meetupDetails.meetupDate}
						titleColor={titleColor}
						logoColor={logoColor}
						meetupTitle={meetupDetails.meetupTitle}
					/>
				</FrameWrapper>
			</Sequence>
			{meetupDetails.sponsorsDetails.map((sponsor, index) => (
				<Sequence
					key={sponsor.name}
					name={`Sponsor - ${sponsor.name}`}
					from={frames.cover + (index * frames.sponsor.individual)}
					durationInFrames={frames.sponsor.individual}
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
					from={frames.cover + frames.sponsor.total + (index * frames.speaker.individual)}
					durationInFrames={frames.speaker.individual}
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
				from={frames.cover + frames.sponsor.total + frames.speaker.total}
				durationInFrames={frames.rsvp}
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
