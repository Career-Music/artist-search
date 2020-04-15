import React from 'react';
import Header from '../Header/Header';
import useLyrics from '../../hooks/use-lyrics';
import { useParams } from 'react-router-dom';

const LyricsPage = () => {
  const { artist, title } = useParams();
  const { lyrics } = useLyrics(artist, title);
  return (
    <>
      <Header title={ `Lyrics to ${title}, by ${artist}` } />
      <pre>{ lyrics }</pre>
    </>
  );
};

export default LyricsPage;