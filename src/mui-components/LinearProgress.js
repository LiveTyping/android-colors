import React, {Component, PropTypes} from 'react';


import LinearProgress from 'material-ui/LinearProgress';

const contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};


class LinearProgressBar extends Component {
  render() {
    const props = Object.assign({}, this.props, {
      color: this.context.muiTheme.progressbar.progressColor
    });
    return <LinearProgress {...props} />;
  }
}

LinearProgressBar.contextTypes = contextTypes;

export default LinearProgressBar;
