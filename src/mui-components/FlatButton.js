import React, { Component, PropTypes } from 'react';

import MuiFlatButton from 'material-ui/FlatButton';

const contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};


class FlatButton extends Component {

  getChildContext() {
    const { context, props } = this;
    const flatButton = Object.assign({}, context.muiTheme.flatButton);

    if (props.primary && props.disabled) {
      Object.assign(flatButton, {
        disabledTextColor: flatButton.disabledPrimaryTextColor,
      });
    }

    return {
      muiTheme: Object.assign({}, this.context.muiTheme, { flatButton }),
    };
  }

  render() {
    return (
      <MuiFlatButton {...this.props} />
    );
  }
}

FlatButton.contextTypes = contextTypes;
FlatButton.childContextTypes = contextTypes;

export default FlatButton;
