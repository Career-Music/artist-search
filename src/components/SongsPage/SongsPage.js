import React from 'react';
import { useParams } from 'react-router-dom';
import useRecordings from '../../hooks/use-recordings';
import SongItem from './SongItem';
import Header from '../Header/Header';

const SongsPage = () => {
  const { id, artistName } = useParams(); 
  const { recordings } = useRecordings(id);

  return (
    <>
      <Header title={ 'Songs' } />
      <ul>
        { recordings.map((recording) => <SongItem key={ recording.id } title={ recording.title } artistName={ artistName } />
        ) }
      </ul>
    </>

  );
};

export default SongsPage;
