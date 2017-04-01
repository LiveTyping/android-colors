import React, { Component, PropTypes } from 'react';

import AppBar from './AppBar';
import ComponentView from './ComponentView';
import Palette from './Palette';

import './App.css';

const propTypes = {
  palette: PropTypes.object.isRequired,
};

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppBar />
        <Palette palette={this.props.palette} />
        <ComponentView palette={this.props.palette} />
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
