import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/es/Route';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Route path='*' component={App} />
  </Router>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
