import { useState, useEffect } from 'react';
import usePaging from './use-paging';
import getAlbums from '../services/albums-api';

const useAlbums = (artistId) => {
  const [albums, setAlbums] = useState([]);
  const { page } = usePaging();
  
  useEffect(() => {
    fetchAlbums(artistId);
  }, [artistId, page]);


  const fetchAlbums = (id) => {
    getAlbums(id, page).then(({ albums }) => setAlbums(albums));
  };


  return { albums, setAlbums, fetchAlbums };
};

export default useAlbums;
