import React from 'react';
import { Link } from 'react-router-dom';
const SongItem = ({ title, artistName }) => {

  return (
    <>
      <Link to={ `/lyrics/${artistName}/${title}` }>
        <li>{ title.title }</li>
      </Link>
    </>
  );
};

export default SongItem;
