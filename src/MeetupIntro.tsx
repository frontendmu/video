import React from 'react';
import {Sequence, useVideoConfig, Audio, staticFile} from 'remotion';
import {MyComposition} from './Composition';
import {MySpeaker} from './Speaker';
import meetupDetails from '../meetup_details_2024-06-22.json';

export const MeetupIntro: React.FC = () => {
  const {fps } = useVideoConfig();
  const slideDuration = 8 * fps; // x seconds per slide

  console.log('meetupDetails:', meetupDetails); // Add this line for debugging

  return (
    <>
      <Audio src={staticFile("audio.mp3")} />
      
      <Sequence durationInFrames={slideDuration}>
        <MyComposition
          titleText="frontend.mu"
          titleColor="#000000"
          logoColor="#ff0000"
        />
      </Sequence>
      {Array.isArray(meetupDetails) ? meetupDetails.map((session, index) => (
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
      )) : <p>No meetup details available</p>}
    </>
  );
};