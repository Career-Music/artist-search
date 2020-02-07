import React from 'react';
import ArtistLists from '../components/artistLists/ArtistLists';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/page/:page' component={Home} />
      <Route path='/artist/:id' component={ArtistLists} />
      <Route path='/album/:id' component={Album} />
      <Route path='/lyrics/:artist/:title' component={Song} />
    </Router>
  );
}
