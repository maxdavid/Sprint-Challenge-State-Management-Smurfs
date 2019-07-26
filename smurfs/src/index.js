import React from 'react';
import ReactDOM from 'react-dom';

import { StateProvider } from './helpers';
import App from './components/App';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
import { rootReducer, initialState } from './reducers';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <Router>
    <StateProvider initialState={initialState} reducer={rootReducer}>
      <App />
    </StateProvider>
  </Router>,
  document.getElementById('root')
);
