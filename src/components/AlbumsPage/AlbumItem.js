import React from 'react';
import { Link } from 'react-router-dom';

const AlbumItem = ({ artistName, album }) => {
  return (
    <>
      <Link to={ `/artist/${artistName}/album/${album.id}` }>
        <div>
          <img src={ `http://coverartarchive.org/release/${album.id}/front` } />
          <p>{ album.title }</p>
          <p>{ album.date }</p>
        </div>
      </Link>
    </>
  );
};


export default AlbumItem;
