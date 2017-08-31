import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MuiLinearProgress from 'material-ui/LinearProgress';
import { lighten } from 'material-ui/utils/colorManipulator';

const contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};


class LinearProgress extends Component {
  getChildContext() {
    const { props, context: { muiTheme } } = this;
    let primary3Color = lighten(muiTheme.palette.NORMAL_CONTROL.color, 0.75);

    if (props.mode === 'indeterminate') {
      primary3Color = lighten(muiTheme.palette.ACTIVATED_CONTROL.color, 0.75);
    }


    return {
      muiTheme: {
        ...muiTheme,
        baseTheme: {
          ...muiTheme.baseTheme,
          palette: {
            ...muiTheme.baseTheme.palette,
            primary3Color,
          },
        },
      },
    };
  }

  render() {
    const { context: { muiTheme }, props } = this;
    const color = muiTheme.palette.ACTIVATED_CONTROL.color;
    return <MuiLinearProgress {...props} color={color} />;
  }
}

LinearProgress.contextTypes = contextTypes;
LinearProgress.childContextTypes = contextTypes;

export default LinearProgress;
