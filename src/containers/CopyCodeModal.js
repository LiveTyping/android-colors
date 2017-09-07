import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closePaletteCodeModal } from '../actions/modal';
import { showSnackBarWithText } from '../actions/snackBar';
import { setPaletteColor } from '../actions/palette';
import CopyCodeModal from '../components/CopyCodeModal/CopyCodeModal';
import getAndroidTheme from '../lib/getAndroidTheme';

function mapStateToProps(state) {
  const { modal, palette } = state;
  console.log(palette.DARK_PRIMARY);
  return {
    contents: getAndroidTheme(palette),
    isVisibleCodeModal: modal.isVisible,
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setPaletteColor,
    closePaletteCodeModal,
    showSnackBarWithText,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CopyCodeModal);
