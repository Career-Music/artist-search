import { useState, useEffect } from 'react';
import getArtists from '../services/artists-api';

const useArtists = () => {
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    fetchArtists();
  }, []);
  const fetchArtists = () => {
    return getArtists('drake').then(artists => {
      setArtists(artists);
    });
  };
  return { artists };
};

export default useArtists;
