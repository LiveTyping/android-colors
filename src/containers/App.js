import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showPaletteCodeModal } from '../actions/modal';
import { closeSnackBar } from '../actions/snackBar';

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
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
