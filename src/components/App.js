import React from 'react';
import ArtistsPage from './ArtistsPage/ArtistsPage';
import AlbumsPage from './AlbumsPage/AlbumsPage';
import SongsPage from './SongsPage/SongsPage';
// import LyricsPage from './LyricsPage/LyricsPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Route exact path='/' component={ ArtistsPage } />
      <Route path='/search/:artistName' component={ ArtistsPage } />

      <Route path='/page/:page' component={ ArtistsPage } />
      <Route path='/artist/:artistName/id/:id' component={ AlbumsPage } />
      <Route path='/artist/:artistName/album/:id' component={ SongsPage } />
      {/* <Route path='/lyrics/:artist/:title' component={ LyricsPage } /> */ }
    </Router>
  );
}
