import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setPaletteColor } from '../actions/palette';
import PaletteTile from '../components/PaletteTile/PaletteTile';


function mapStateToProps() {
  return {};
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setPaletteColor,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaletteTile);
