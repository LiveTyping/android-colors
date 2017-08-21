import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showPaletteCodeModal } from '../actions/modal';

import App from '../components/App/App';


function mapStateToProps(state) {
  const { palette, modal } = state;
  return {
    palette,
    isVisibleCodeModal: modal.isVisible,
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    showPaletteCodeModal,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
