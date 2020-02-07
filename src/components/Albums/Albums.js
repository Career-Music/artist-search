import React from 'react';
import AlbumItem from './AlbumItem';
import Header from '../Header/Header';

const Albums = ({ artistId }) => {
  const albums = useAlbums(artistId);
  return (
    <>
      <Header title='Albums' />
      { albums.map((album) => <AlbumItem key={ album.id } album={ album } />) }
    </>
  );
};
