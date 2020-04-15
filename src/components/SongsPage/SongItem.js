import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const SongItem = ({ title, artistName }) => {

  return (
    <>
      <Link to={ `/lyrics/${artistName}/${title}` }>
        <li>{ title }</li>
      </Link>
    </>
  );
};

SongItem.propTypes = {
  title: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired
};

export default SongItem;
