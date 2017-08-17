import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import App from '../components/App/App';


function mapStateToProps(state) {
  const { palette } = state;
  return {
    palette,
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
