import React, { Component, PropTypes } from 'react';

import MuiRasiedButton from 'material-ui/RaisedButton';

const contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};


class RaisedButton extends Component {

  // getChildContext() {
  //   const { context, props } = this;
  //   const raisedButton = Object.assign({}, context.muiTheme.raisedButton);

  //   if (props.primary && props.disabled) {
  //     Object.assign(raisedButton, {
  //       disabledColor: null,
  //       disabledTextColor: null,
  //     });
  //   }

  //   return {
  //     muiTheme: Object.assign({}, this.context.muiTheme, { raisedButton }),
  //   };
  // }

  render() {
    const { props: origProps } = this;
    const props = Object.assign({}, origProps);
    const { raisedButton } = this.context.muiTheme;

    if (origProps.disabled && origProps.primary) {
      Object.assign(props, {
        disabledBackgroundColor: raisedButton.disabledPrimaryColor,
        disabledLabelColor: raisedButton.disabledPrimaryTextColor,
      });
    }

    return (
      <MuiRasiedButton {...props} />
    );
  }
}

RaisedButton.contextTypes = contextTypes;
// RaisedButton.childContextTypes = contextTypes;

export default RaisedButton;
