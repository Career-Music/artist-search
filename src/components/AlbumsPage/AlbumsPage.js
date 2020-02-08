import React from 'react';
import AlbumItem from './AlbumItem';
import Header from '../Header/Header';
import useAlbums from '../../hooks/use-albums';
import { useParams } from 'react-router-dom';

const AlbumsPage = () => {
  const { artistName, id } = useParams();
  const { albums } = useAlbums(id);
  return (
    <>
      <Header title={ `Albums by ${artistName}` } />
      { albums.map(album => (
        <AlbumItem key={ album.id } artistName={artistName} album={ album } />
      )) }
    </>
  );
};



export default AlbumsPage;
