import React from 'react';
import { Link } from 'react-router-dom';
const SongItem = ({ title, artistName }) => {

  return (
    <>
      <Link to={ `/lyrics/${artistName}/${title}` }>
        <li>{ title }</li>
      </Link>
    </>
  );
};

export default SongItem;
