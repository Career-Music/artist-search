import React from 'react';
import PropTypes from 'prop-types';
import Artist from '../artist/Artist';
import { useArtists } from '../../hook/ArtistsHook';

const ArtistLists = () => {
  const { artists } = useArtists();
  console.log('list', artists);

  const ArtistElements = artists.map(artist => (
    <li key={artist.id}>
      <Artist />
    </li>
  ));
  return <ul>{ArtistElements}</ul>;
};

ArtistLists.propTypes = {
  artists: PropTypes.string
};

export default ArtistLists;
