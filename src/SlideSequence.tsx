import React from 'react';
import {Sequence, useVideoConfig} from 'remotion';
import {MyComposition} from './Composition';
import {MySpeaker} from './Speaker';
import meetupDetails from '../meetup_details_2024-06-22.json';
import {Audio} from 'remotion';
import audioFile from '../public/audio.mp3';

export const SlideSequence: React.FC = () => {
  const {fps, durationInFrames} = useVideoConfig();
  const slideDuration = 8 * fps; // x seconds per slide

  return (
    <>
      <Audio src={audioFile} startFrom={90} />
      <Sequence from={0} durationInFrames={slideDuration}>
        <MyComposition
          titleText="frontend.mu"
          titleColor="#000000"
          logoColor="#ff0000"
        />
      </Sequence>
      {meetupDetails.map((session, index) => (
        <Sequence
          key={index}
          from={(index + 1) * slideDuration}
          durationInFrames={slideDuration}
        >
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