import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../../assets/placeholder.jpg';

const AlbumItem = ({ artistName, album }) => {
  console.log(album);

  return (
    <>

      <div className="AlbumItem">
        <Link to={ `/artist/${artistName}/album/${album.id}` }>
          { album.hasArt ?
            <img src={ `http://coverartarchive.org/release/${album.id}/front` } /> :
            <img src={ placeholder } /> }
          <p className="title">{ album.title }</p>
          <p className="date">{ album.date }</p>
        </Link>
      </div>
    </>
  );
};

export default AlbumItem;
