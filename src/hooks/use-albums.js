import { useState, useEffect } from 'react';
import getAlbums from '../services/albums-api';

const useAlbums = (artistId) => {
  const [albums, setAlbums] = useState([]);

  const fetchAlbums = (id) => {
    getAlbums(id)
      .then((res) => {
        setAlbums(res);
      });
  };

  useEffect(() => {
    fetchAlbums(artistId);
  }, []);

  return { albums, setAlbums };
};

export default useAlbums;
