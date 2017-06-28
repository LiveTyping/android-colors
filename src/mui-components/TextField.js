import React, { Component, PropTypes } from 'react';

import MuiTextField from 'material-ui/TextField';

const contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

class TextField extends Component {
  getInputStyle() {
    const { context } = this;
    const textField = Object.assign({}, context.muiTheme.textField);
    const inputStyle = {};
    inputStyle.caretColor = textField.focusColor;
    return inputStyle;
  }

  getUnderlineDisabledStyle() {
    const underlineDisabledColor = this.context.muiTheme.textField.disabledUnderlineColor;
    return {
      borderBottom: '1px solid',
      borderBottomColor: underlineDisabledColor,
    };
  }

  render() {
    return (
      <MuiTextField
        {...this.props}
        inputStyle={this.getInputStyle()}
        underlineDisabledStyle={this.getUnderlineDisabledStyle()}
      />
    );
  }
}

TextField.contextTypes = contextTypes;

export default TextField;
