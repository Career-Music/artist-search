import React from 'react';
import PropTypes from 'prop-types';
import Artist from '../artist/Artist';
import { useArtists } from '../../hook/ArtistsHook';

const ArtistLists = () => {
  const { artists } = useArtists();

  const ArtistElements = artists.map(artist => (
    <li key={artist.id}>
      <Artist name={artist.name} disambiguation={artist.disambiguation} />
    </li>
  ));
  return <ul>{ArtistElements}</ul>;
};

ArtistLists.propTypes = {
  artists: PropTypes.string
};

export default ArtistLists;
