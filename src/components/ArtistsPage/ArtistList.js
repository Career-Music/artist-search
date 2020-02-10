import React from 'react';
import PropTypes from 'prop-types';
import ArtistItem from './ArtistItem';

const ArtistList = ({ artists }) => {

  const ArtistElements = artists.map(artist => (
    <li key={ artist.id }>
      <ArtistItem id={ artist.id } name={ artist.name } disambiguation={ artist.disambiguation } />
    </li>
  ));
  return <ul>{ ArtistElements }</ul>;
};

ArtistList.propTypes = {
  artists: PropTypes.array
};

export default ArtistList;
