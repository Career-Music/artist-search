import React from 'react';
import AlbumItem from './AlbumItem';
import Header from '../Header/Header';
import useAlbums from '../../hooks/use-albums';
import { useParams } from 'react-router-dom';
import styles from './Albums.css';

const AlbumsPage = () => {
  const { id } = useParams();
  const { albums } = useAlbums(id);
  return (
    <>
      <Header title={ 'Albums' } />
      <main className={ styles.AlbumsPage }>
        { albums.map(album => (
          <AlbumItem key={ album.id } album={ album } />
        )) }
      </main>
    </>
  );
};



export default AlbumsPage;
