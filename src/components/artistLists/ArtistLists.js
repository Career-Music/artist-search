import React from 'react';
import PropTypes from 'prop-types';
import Artist from '../artist/Artist';

const ArtistLists = () => {
  const ArtistElements = Artist.map(artist => (
    <li key={artist.id}>
      <h1>Hi</h1>
    </li>
  ));
  return <ul>{ArtistElements}</ul>;
};

ArtistLists.propTypes = {
  artists: PropTypes.string
};

export default ArtistLists;
