import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css/normalize.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';

import ComponentView from '../ComponentView/ComponentView';
import Palette from '../Palette/Palette';
import Footer from '../Footer/Footer';
import VisibleHeader from '../../containers/VisibleHeader';
import Modal from '../Modal/Modal';
import getCodeConfigs from './codeConfigs';

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
  closePaletteCodeModal: PropTypes.func.isRequired,
  isVisibleSnackBar: PropTypes.bool.isRequired,
  snackBarText: PropTypes.string.isRequired,
  showSnackBarWithText: PropTypes.func.isRequired,
  closeSnackBar: PropTypes.func.isRequired,
};

const App = ({
  palette,
  showPaletteCodeModal,
  closePaletteCodeModal,
  isVisibleCodeModal,
  isVisibleSnackBar,
  snackBarText,
  showSnackBarWithText,
  closeSnackBar,
}) => {
  const codeConfigs = getCodeConfigs(palette);

  function closeModal(isSavedCode) {
    closePaletteCodeModal();
    if (isSavedCode) {
      showSnackBarWithText('Code saved in buffer');
    }
  }

  const modal = isVisibleCodeModal
    ? <Modal content={codeConfigs} open={isVisibleCodeModal} onClose={(isSavedCode) => closeModal(isSavedCode)} />
    : '';

  return (
    <MuiThemeProvider>
      <div className="app">
        {modal}
        <VisibleHeader />
        <Palette palette={palette} onClickPaletteButton={showPaletteCodeModal} />
        <ComponentView palette={palette} />
        <Footer />
        <Snackbar
          open={isVisibleSnackBar}
          message={snackBarText}
          autoHideDuration={4000}
          onRequestClose={closeSnackBar}
          bodyStyle={{ backgroundColor: '#fff' }}
          contentStyle={{ color: '#000' }}
        />
      </div>
    </MuiThemeProvider>
  );
};

App.propTypes = propTypes;

export default App;
