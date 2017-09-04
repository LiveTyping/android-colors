import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changePaletteColor, setInitialPaletteColors } from '../actions/palette';
import PaletteTile from '../components/PaletteTile/PaletteTile';


function mapStateToProps() {
  return {};
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changePaletteColor,
    setInitialPaletteColors,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaletteTile);
