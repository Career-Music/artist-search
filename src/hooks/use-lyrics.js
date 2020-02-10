import { useState, useEffect } from 'react';
import getLyrics from '../services/lyrics-api';

const useLyrics = (artistName, songTitle) => {
  const [lyrics, setLyrics] = useState('');
  useEffect(() => {
    fetchLyrics(artistName, songTitle);
  }, []);

  const fetchLyrics = (name, title) => {
    getLyrics(name, title).then(setLyrics);
  };

  return { lyrics };
};

export default useLyrics;
