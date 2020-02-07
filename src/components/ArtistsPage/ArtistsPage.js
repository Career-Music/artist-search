import React, { useState } from 'react';
import ArtistList from './ArtistList';
import Header from '../Header/Header';
import useArtists from '../../hooks/use-artists';
import { useParams, useHistory } from 'react-router-dom';

const ArtistsPage = () => {
  const [searchText, setSearchText] = useState('');
  const { artists, fetchArtists } = useArtists([]);
  const history = useHistory();
  const { artistName } = useParams();

  if(artistName && artistName.length > 0) {
    fetchArtists(artistName);
  }

  const handleSearchClick = (text) => {
    history.push(`/search/${text}`);
  };

  return (
    <>
      <Header title='Artist Search' />
      <input type="text" onChange={({ target }) => setSearchText(target.value) } placeholder="Search for Artist" />
      <button onClick={() => handleSearchClick(searchText)}>Search</button>
      <ArtistList artists={artists} />
    </>
  );
};

export default ArtistsPage;
