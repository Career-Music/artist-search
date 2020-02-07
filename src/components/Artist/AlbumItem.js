import React from 'react';
import useAlbumArt from '../../hooks/use-album-art';
import placeholderAlbum from '../../assets/placeholder.jpg';
const AlbumItem = ({ album, artist }) => {
  const { albumArt, setAlbumArt } = useAlbumArt(album.id);

  return (
    <>
      <Link to={ `/album/${album.id}` }>
        <div>
          <img src={ albumArt } onerror={ placeholderAlbum } />
          <p>${ album.title }</p>
          <p>${ album.date }</p>
        </div>
      </Link>
    </>
  );

};
