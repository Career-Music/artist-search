import React from 'react';
import ArtistList from './ArtistsPage/ArtistList';
import AlbumsPage from './AlbumsPage/AlbumsPage';
import SongsPage from './SongsPage/SongsPage';
import LyricsPage from './LyricsPage/LyricsPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Route exact path='/' component={ ArtistList } />
      <Route exact path='/page/:page' component={ ArtistList } />
      <Route path='/artist/:id' component={ AlbumsPage } />
      <Route path='/album/:id' component={ SongsPage } />
      <Route path='/lyrics/:artist/:title' component={ LyricsPage } />
    </Router>
  );
}
