import { useState, useEffect } from 'react';
import getArtists from '../services/artists-api';

const useArtists = () => {
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    fetchArtists();
  }, []);

  const fetchArtists = (artistName) => {
    if(artistName) {
      return getArtists(artistName).then(setArtists);
    }
  };
  return { artists, fetchArtists };
};

export default useArtists;
