import React, { Component, PropTypes } from 'react';

import MuiTextField from 'material-ui/TextField';

const contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

const styles = {
  underlineDisabled: {
    borderBottom: '1px solid',
  },
};

class TextField extends Component {
  getInputStyle() {
    const { context } = this;
    const textField = Object.assign({}, context.muiTheme.textField);
    const inputStyle = {};
    inputStyle.caretColor = textField.focusColor;
    return inputStyle;
  }

  render() {
    return (
      <MuiTextField
        {...this.props}
        inputStyle={this.getInputStyle()}
        underlineDisabledStyle={styles.underlineDisabled}
      />
    );
  }
}

TextField.contextTypes = contextTypes;

export default TextField;
