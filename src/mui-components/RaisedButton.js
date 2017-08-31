import React from 'react';
import PropTypes from 'prop-types';

import MuiRasiedButton from 'material-ui/RaisedButton';

const contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};


const RaisedButton = (origProps, context) => {
  const props = Object.assign({}, origProps);
  const { raisedButton } = context.muiTheme;

  if (origProps.disabled && origProps.primary) {
    Object.assign(props, {
      disabledBackgroundColor: raisedButton.disabledPrimaryColor,
      disabledLabelColor: raisedButton.disabledPrimaryTextColor,
    });
  }

  return <MuiRasiedButton {...props} />;
};

RaisedButton.contextTypes = contextTypes;

export default RaisedButton;
