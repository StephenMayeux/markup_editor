import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Bins } from '../imports/collections/bins';
import BinsMain from './components/bins/bins_main';
import BinsList from './components/bins/bins_list';
import App from './components/app';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={BinsList} /> // only display if parent's children are not visible
      <Route path='bins/:binId' component={BinsMain} /> // BinsMain receives props of binId
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
