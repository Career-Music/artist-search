import React from 'react';
import useRecordings from '../../hooks/use-recordings';
import SongItem from './SongItem';
import Header from '../Header/Header';

const SongsPage = ({ album }) => {
  const { recordings } = useRecordings(album.id);

  return (
    <>
      <Header title={ `Songs on ${album.title}` } />
      <ul>
        { recordings.map((recording) => <SongItem key={ recording.id } title={ recording.title } artistName={ artist.name } />
        ) }
      </ul>
    </>

  );
};

export default SongsPage;
