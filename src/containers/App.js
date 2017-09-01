import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showPaletteCodeModal } from '../actions/modal';
import { closeSnackBar } from '../actions/snackBar';
import { setInitialPaletteColors, changePaletteColor } from '../actions/palette';

import App from '../components/App/App';


function mapStateToProps(state) {
  const { palette, snackBar } = state;
  return {
    palette,
    isVisibleSnackBar: snackBar.isVisible,
    snackBarText: snackBar.text,
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    showPaletteCodeModal,
    closeSnackBar,
    setInitialPaletteColors,
    changePaletteColor,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
