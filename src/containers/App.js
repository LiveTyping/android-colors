import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showPaletteCodeModal } from '../actions/modal';
import { closeSnackBar, showSnackBarWithText } from '../actions/snackBar';
import { setInitialPaletteColors, changePaletteColor } from '../actions/palette';

import App from '../components/App/App';


function mapStateToProps(state) {
  const { palette, snackBar } = state;
  return {
    palette,
    isVisibleSnackBar: snackBar.isVisible,
    snackBarText: snackBar.text,
    paletteGenneratingUrl: window.location.href,
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    showPaletteCodeModal,
    closeSnackBar,
    setInitialPaletteColors,
    changePaletteColor,
    showSnackBarWithText,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
