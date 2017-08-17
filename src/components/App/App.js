import React, { PropTypes } from 'react';
import 'normalize.css/normalize.css';

import ComponentView from '../ComponentView/ComponentView';
import Palette from '../Palette/Palette';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './App.css';

const propTypes = {
  palette: PropTypes.object.isRequired,
};

const App = (props) => (
  <div className="app">
    <Header />
    <Palette palette={props.palette} />
    <ComponentView palette={props.palette} />
    <Footer />
  </div>
);

App.propTypes = propTypes;

export default App;
