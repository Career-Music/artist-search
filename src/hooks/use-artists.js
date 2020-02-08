import { useState, useEffect } from 'react';
import getArtists from '../services/artists-api';

const useArtists = (artistName) => {
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    fetchArtists(artistName);
  }, []);

  const fetchArtists = (artistName) => {
    if(artistName && artistName.length > 0) {
      return getArtists(artistName).then(setArtists);
    }
  };

  return { artists, fetchArtists };
};

export default useArtists;
