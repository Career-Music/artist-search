import React from 'react';
import AlbumItem from './AlbumItem';
import Header from '../Header/Header';

const Artist = ({ artist }) => {
  const albums = useAlbums(artist.id);
  return (
    <>
      <Header title={`Albums by ${artist.name}`} />
      { albums.map((album) => <AlbumItem key={ album.id } album={ album } />) }
    </>
  );
};

export default Artist;