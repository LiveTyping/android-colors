import React, { PropTypes } from 'react';
import 'normalize.css/normalize.css';

import AppBar from './AppBar';
import ComponentView from './ComponentView';
import Palette from './Palette';

import './App.css';

const propTypes = {
  palette: PropTypes.object.isRequired,
};

const App = (props) => (
  <div className="app">
    <AppBar />
    <Palette palette={props.palette} />
    <ComponentView palette={props.palette} />
  </div>
);

App.propTypes = propTypes;

export default App;
