import React from 'react';
import ArtistList from './ArtistList';
import Header from '../Header/Header';

const ArtistsPage = () => {

  return (
    <>
      <Header title='Artist Search' />
      <input type="text" placeholder="Search for Artist" />
      <button>Search</button>
      <ArtistList />
    </>
  );
};

export default ArtistsPage;
