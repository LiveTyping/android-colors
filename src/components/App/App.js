import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css/normalize.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';

import ComponentView from '../ComponentView/ComponentView';
import Palette from '../Palette/Palette';
import Footer from '../Footer/Footer';
import VisibleHeader from '../../containers/VisibleHeader';
import CopyCodeModal from '../../containers/CopyCodeModal';
// import getCodeConfigs from './codeConfigs';

import './App.css';

const propTypes = {
  palette: PropTypes.objectOf(
    PropTypes.shape({
      color: PropTypes.string,
      alpha: PropTypes.number,
    })
  ).isRequired,
  showPaletteCodeModal: PropTypes.func.isRequired,
  isVisibleSnackBar: PropTypes.bool.isRequired,
  snackBarText: PropTypes.string.isRequired,
  closeSnackBar: PropTypes.func.isRequired,
  showSnackBarWithText: PropTypes.func.isRequired,
  activePageURL: PropTypes.string.isRequired,
};

const App = ({
  palette,
  showPaletteCodeModal,
  isVisibleSnackBar,
  snackBarText,
  closeSnackBar,
  showSnackBarWithText,
  activePageURL,
}) => (
  <MuiThemeProvider>
    <div className="app">
      <VisibleHeader />
      <Palette
        palette={palette}
        activePageURL={activePageURL}
        onClickPaletteButton={showPaletteCodeModal}
        onClickCopyPaletteButton={() => showSnackBarWithText('Link to the Palette successfully copied')}
      />
      <ComponentView palette={palette} />
      <Footer />
      <CopyCodeModal />
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

App.propTypes = propTypes;

export default App;
