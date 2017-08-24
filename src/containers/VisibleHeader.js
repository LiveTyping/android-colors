import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header/Header';
import { setHelpBlockHidden, setInitialHelpBlockVisiblity } from '../actions/header';

const propTypes = {
  isVisibleHelp: PropTypes.bool.isRequired,
  onCloseHelp: PropTypes.func.isRequired,
  setInitialHelpBlockVisiblity: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { isVisibleHeaderHelp } = state.header;
  return { isVisibleHelp: isVisibleHeaderHelp };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onCloseHelp: setHelpBlockHidden,
    setInitialHelpBlockVisiblity,
  }, dispatch);
}

class VisibleHeader extends Component {
  componentDidMount() {
    this.props.setInitialHelpBlockVisiblity();
  }

  render() {
    return (
      <Header
        isVisibleHelp={this.props.isVisibleHelp}
        onCloseHelp={this.props.onCloseHelp}
      />
    );
  }
}

VisibleHeader.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps)(VisibleHeader);
