import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.object,
};

const defaultProps = {
  disabled: false,
  style: {},
};

const Text = (props) => {
  const { children, disabled, style } = props;

  const disabledStyle = {
    color: 'rgba(0, 0, 0, 0.38)',
  };

  let textStyle = Object.assign({}, style, {
    fontWeight: '500',
  });

  if (disabled) {
    textStyle = Object.assign({}, textStyle, disabledStyle);
  }

  return (
    <div style={textStyle}>
      {children}
    </div>
  );
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
