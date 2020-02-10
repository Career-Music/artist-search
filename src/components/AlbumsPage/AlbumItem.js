import React from 'react';
import { Link } from 'react-router-dom';
import useAlbumArt from '../../hooks/use-album-art';
import placeholderAlbum from '../../assets/placeholder.jpg';
import styles from './Albums.css';

const AlbumItem = ({ album }) => {
  // const { albumArt } = useAlbumArt(album.id);
  return (
    <>

      <div className={ styles.AlbumItem }>
        <Link to={ `/album/${album.id}` }>
          <img src={ `http://coverartarchive.org/release/${album.id}/front` } />
          {/* <img src={ albumArt } onError={ placeholderAlbum } /> */ }
          <p className={ styles.title }>{ album.title }</p>
          <p className={ styles.date }>{ album.date }</p>
        </Link>
      </div>

    </>
  );
};

export default AlbumItem;
