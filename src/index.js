import React from 'react';
import { render } from 'react-dom';

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHashHistory from 'history/createHashHistory';
import { Route } from 'react-router';

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

import thunk from 'redux-thunk';


// TODO drop bootstrap
import './bootstrap-grid.css';

import * as reducers from './reducers';

import App from './containers/App';
import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const history = createHashHistory();

function initStore(initialState = {}) {
  return createStore(
    combineReducers({
      ...reducers,
      router: routerReducer,
    }),
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk
      ),
      window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
  );
}


function mountApplication(mountNode) {
  if (!(mountNode instanceof Element)) {
    return;
  }

  render(
    <Provider store={initStore()}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={App} />
        </div>
      </ConnectedRouter>
    </Provider>,
    mountNode
  );
}

mountApplication(document.querySelector('#root'));
