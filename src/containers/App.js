import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showPaletteCodeModal, closePaletteCodeModal } from '../actions/modal';
import { showSnackBarWithText, closeSnackBar } from '../actions/snackBar';

import App from '../components/App/App';


function mapStateToProps(state) {
  const { palette, modal, snackBar } = state;
  return {
    palette,
    isVisibleCodeModal: modal.isVisible,
    isVisibleSnackBar: snackBar.isVisible,
    snackBarText: snackBar.text,
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    showPaletteCodeModal,
    closePaletteCodeModal,
    showSnackBarWithText,
    closeSnackBar,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
