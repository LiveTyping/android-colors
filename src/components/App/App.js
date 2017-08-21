import React from 'react';
import { PropTypes } from 'prop-types';
import 'normalize.css/normalize.css';

import ComponentView from '../ComponentView/ComponentView';
import Palette from '../Palette/Palette';
import Footer from '../Footer/Footer';
import VisibleHeader from '../../containers/VisibleHeader';
import Modal from '../Modal/Modal';

import './App.css';

const propTypes = {
  palette: PropTypes.objectOf(
    PropTypes.shape({
      color: PropTypes.string,
      alpha: PropTypes.number,
    })
  ).isRequired,
  isVisibleCodeModal: PropTypes.bool.isRequired,
  showPaletteCodeModal: PropTypes.func.isRequired,
};

const App = ({ palette, showPaletteCodeModal, isVisibleCodeModal }) => {
  const modal = isVisibleCodeModal
    ? <Modal />
    : '';
  return (
    <div className="app">
      {modal}
      <VisibleHeader />
      <Palette palette={palette} onClickPaletteButton={showPaletteCodeModal} />
      <ComponentView palette={palette} />
      <Footer />
    </div>
  );
};


App.propTypes = propTypes;

export default App;
