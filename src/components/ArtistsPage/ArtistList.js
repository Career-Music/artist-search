import React from 'react';
import PropTypes from 'prop-types';
import ArtistItem from './ArtistItem';
import useArtists from '../../hooks/use-artists';

const ArtistList = () => {
  const { artists } = useArtists();

  const ArtistElements = artists.map(artist => (
    <li key={ artist.id }>
      <ArtistItem name={ artist.name } disambiguation={ artist.disambiguation } />
    </li>
  ));
  return <ul>{ ArtistElements }</ul>;
};

ArtistList.propTypes = {
  artists: PropTypes.string
};

export default ArtistList;
