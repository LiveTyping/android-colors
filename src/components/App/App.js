import React, { PropTypes } from 'react';
import 'normalize.css/normalize.css';

import ComponentView from '../ComponentView/ComponentView';
import Palette from '../Palette/Palette';
import Footer from '../Footer/Footer';
import VisibleHeader from '../../containers/VisibleHeader';

import './App.css';

const propTypes = {
  palette: PropTypes.shape.isRequired,
};

const App = (props) => (
  <div className="app">
    <VisibleHeader />
    <Palette palette={props.palette} />
    <ComponentView palette={props.palette} />
    <Footer />
  </div>
);

App.propTypes = propTypes;

export default App;
