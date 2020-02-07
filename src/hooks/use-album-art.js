import { useState, useEffect } from react;
import getAlbumArt from '../services/album-art-api';

const useAlbumArt = (albumId) => {
  const [albumArt, setAlbumArt] = useState([]);

  const fetchAlbumArt = (id) => {
    getAlbumArt(id)
      .then((res) => {
        setAlbumArt(res);
      });
  };

  useEffect(() => {
    fetchAlbumArt(albumId);
  }, []);

  return { albumArt, setAlbumArt };
};