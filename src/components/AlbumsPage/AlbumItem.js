import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../../assets/placeholder.jpg';
const AlbumItem = ({ artistName, album }) => {
  return (
    <>
      <Link to={ `/artist/${artistName}/album/${album.id}` }>
        <div>
          { album.hasCover ? 
            <img src={ `http://coverartarchive.org/release/${album.id}/front` } /> : 
            <img src={ placeholder } /> }
          <p>{ album.title }</p>
          <p>{ album.date }</p>
        </div>
      </Link>
    </>
  );
};

export default AlbumItem;
