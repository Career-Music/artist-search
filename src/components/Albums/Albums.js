import React from 'react';
import AlbumItem from './AlbumItem';

const Albums = ({ artistId }) => {
  const albums = useAlbums(artistId);
  return (
    <>
      <Header />
      { albums.map((album) => <AlbumItem key={ album.id } album={ album } />) }
    </>
  );

};
