import React from 'react';
import AlbumItem from './AlbumItem';
import Paging from '../Paging/Paging';
import Header from '../Header/Header';
import useAlbums from '../../hooks/use-albums';
import { useParams } from 'react-router-dom';
import styles from './Albums.css';

const AlbumsPage = () => {
  const { artistName, id } = useParams();
  const { albums } = useAlbums(id);
  return (
    <main className={ styles.AlbumsPage }>
      <Header title={ `Albums by ${artistName}` } />
      { albums.map(album => (
        <AlbumItem key={ album.id } artistName={ artistName } album={ album } />
      )) }
      <Paging />
    </main>
  );
};



export default AlbumsPage;
