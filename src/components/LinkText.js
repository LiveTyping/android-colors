import React, { Component, PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  style: {},
};

const contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

const defaultStyle = {
  fontWeight: '500',
  textDecorationLine: 'underline',
};

class LinkText extends Component {
  getStyles() {
    const { context, props } = this;
    const { style } = props;

    const color = context.muiTheme.linkText.color;

    const linkStyle = Object.assign({}, defaultStyle, style, {
      color,
      textDecorationColor: color,
    });
    return linkStyle;
  }

  render() {
    const { children } = this.props;

    return (
      <div style={this.getStyles()}>
        {children}
      </div>
    );
  }
}

LinkText.propTypes = propTypes;
LinkText.defaultProps = defaultProps;
LinkText.contextTypes = contextTypes;

export default LinkText;
