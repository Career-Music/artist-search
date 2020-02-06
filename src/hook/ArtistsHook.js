import { useState, useEffect } from 'react';
import { getArtists } from '../services/artists-api';

export const useArtists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetchArtists();
  }, []);

  const fetchArtists = () => {
    return getArtists('westlife').then(artists => {
      setArtists(artists);
    });
  };

  return { artists };
};