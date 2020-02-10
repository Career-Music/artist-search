import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../../assets/placeholder.jpg';
import styles from './Albums.css';
import PropTypes from 'prop-types';
const AlbumItem = ({ artistName, album }) => {

  return (
    <div className={ styles.AlbumItem }>
      <Link to={ `/artist/${artistName}/album/${album.id}` }>
        { album.hasArt ?
          <img src={ `http://coverartarchive.org/release/${album.id}/front` } /> :
          <img src={ placeholder } /> }
        <p className="title">{ album.title }</p>
        <p className="date">{ album.date }</p>
      </Link>
    </div>
  );
};

AlbumItem.propTypes = {
  artistName: PropTypes.string.isRequired,
  album: PropTypes.array
};

export default AlbumItem;
