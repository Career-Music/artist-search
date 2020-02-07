import React from 'react';
import useRecordings from '../../hooks/use-recordings';

const Album = ({ album }) => {
  const { recordings } = useRecordings(album.id);

  return (
    <>
      <Header title={ `Songs on ${album.title}` } />
      { recordings.map((recording) => <RecordingItem key={ recording.id } title={}/>) }
    </>

  );
};
