import React from 'react';
import { PropTypes } from 'prop-types';

import MuiCircularProgress from 'material-ui/CircularProgress';

const contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

const CircularProgress = (props, { muiTheme }) => {
  const color = muiTheme.palette.ACTIVATED_CONTROL.color;
  return <MuiCircularProgress {...props} color={color} />;
};

CircularProgress.contextTypes = contextTypes;

export default CircularProgress;
