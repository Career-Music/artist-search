import React, { useState } from 'react';
import ArtistList from './ArtistList';
import Header from '../Header/Header';
import useArtists from '../../hooks/use-artists';
import { useParams, useHistory } from 'react-router-dom';
import Paging from '../Paging/Paging';

const ArtistsPage = () => {
  const [searchText, setSearchText] = useState('');
  const history = useHistory();
  const { artistName } = useParams();
  const { artists } = useArtists(artistName);

  const handleSearchClick = text => {
    history.push(`/search/${text}`);
  };

  return (
    <>
      <Header title='Artist Search' />
      <form>
        <input
          type='text'
          onChange={({ target }) => setSearchText(target.value)}
          placeholder='Search for Artist'
        />
        <button onClick={() => handleSearchClick(searchText)}>Search</button>
      </form>
      <ArtistList artists={artists} />
      <Paging />
    </>
  );
};

export default ArtistsPage;
