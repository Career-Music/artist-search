import { useState, useEffect } from 'react';
import usePaging from './use-paging';
import getArtists from '../services/artists-api';

const useArtists = (artistName) => {
  const [artists, setArtists] = useState([]);
  const { page } = usePaging();
  useEffect(() => {
    fetchArtists(artistName);
  }, [page]);

  const fetchArtists = (artistName) => {
    if(artistName && artistName.length > 0) {
      return getArtists(artistName, page).then(setArtists);
    }
  };

  return { artists, fetchArtists };
};

export default useArtists;
