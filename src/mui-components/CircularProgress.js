import React, {Component, PropTypes} from 'react';


import CircularProgress from 'material-ui/CircularProgress';

const contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};


class CircularProgressBar extends Component {
  render() {
    const props = Object.assign({}, this.props, {
      color: this.context.muiTheme.progressbar.primary1Color
    });
    return <CircularProgress {...props} />;
  }
}

CircularProgressBar.contextTypes = contextTypes;

export default CircularProgressBar;
