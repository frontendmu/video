import React from 'react';
import {Sequence, useVideoConfig, Audio, staticFile} from 'remotion';
import {MyComposition} from './Composition';
import {MySpeaker} from './Speaker';
import meetupDetails from '../latest_meetup_details.json';

export const MeetupIntro: React.FC = () => {
  const {fps } = useVideoConfig();
  const slideDuration = 6 * fps; // x seconds per slide

  return (
    <>
      <Audio startFrom={90} src={staticFile("audio.mp3")} />
      
      <Sequence  durationInFrames={slideDuration}>
        <MyComposition
          titleText="frontend.mu"
          titleColor="#000000"
          logoColor="#ff0000"
        />
      </Sequence>
      {meetupDetails.map((session, index) => (
        <Sequence
          key={session.sessionTitle}
          from={(index + 1) * slideDuration}
          durationInFrames={slideDuration}
        >
          {/* <div className='text-white'>{alert(session.sessionTitle)}</div> */}
          <MySpeaker
            titleText={session.sessionTitle}
            titleColor="#000000"
            logoColor="#00bfff"
            githubUsername={session.speakerGitHub}
            speakerName={session.speakerName}
          />
        </Sequence>
      ))}
    </>
  );
};