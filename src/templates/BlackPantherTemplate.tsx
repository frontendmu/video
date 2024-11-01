import React, { PropsWithChildren } from 'react';
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig } from 'remotion';
import { MidnightCover } from '../components/Cover/MidnightCover';
import { Rsvp } from '../components/Rsvp';
import { Speaker } from '../components/Speaker';
import { WaveBackground } from '../components/WaveBackground';
import { Sponsor } from '../components/Sponsor';
import { useTemplate } from '../context/TemplateProvider';

function FrameWrapper({children}: PropsWithChildren) {
	return (
		<AbsoluteFill className="flex items-center justify-center relative from-[#182034] to-[#0a1329] bg-gradient-to-tl">
			<WaveBackground />
			{children}
		</AbsoluteFill>
	)
}

export const BlackPantherTemplate: React.FC = () => {
	const {fps} = useVideoConfig();
	const {meetupDetails} = useTemplate();
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
				<FrameWrapper>
					<MidnightCover
						meetupDate={meetupDetails.meetupDate}
						titleColor={titleColor}
						secondaryTitleColor={secondaryTitleColor}
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
					{/* <div className='text-white'>{alert(session.sessionTitle)}</div> */}
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
