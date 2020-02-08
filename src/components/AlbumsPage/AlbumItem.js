import React from 'react';
import { Link } from 'react-router-dom';
import useAlbumArt from '../../hooks/use-album-art';
import placeholderAlbum from '../../assets/placeholder.jpg';

const AlbumItem = ({ album }) => {
  // const { albumArt } = useAlbumArt(album.id);
  return (
    <>
      <Link to={`/album/${album.id}`}>
        <div>
          <img src={`http://coverartarchive.org/release/${album.id}/front`} />
          {/* <img src={ albumArt } onError={ placeholderAlbum } /> */}
          <p>{album.title}</p>
          <p>{album.date}</p>
        </div>
      </Link>
    </>
  );
};

export default AlbumItem;
