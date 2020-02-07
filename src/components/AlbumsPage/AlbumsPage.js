import React from 'react';
import AlbumItem from './AlbumItem';
import Header from '../Header/Header';
import useAlbums from '../../hooks/use-albums';
import { useParams } from 'react-router-dom';

const AlbumsPage = () => {
  const { id } = useParams();
  const albums = useAlbums(id);
  console.log(albums);
  return (
    <>
      <Header title={ 'Albums' } />
      { albums.map(album => (
        <AlbumItem key={ album.id } album={ album } />
      )) }
    </>
  );
};



export default AlbumsPage;
