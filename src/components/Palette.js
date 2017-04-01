import React, { Component, PropTypes } from 'react';

import PaletteTile from '../containers/PaletteTile';
import './Palette.css';

const colorNames = {
  DARK_PRIMARY: 'dark primary',
  PRIMARY: 'primary',
  ACCENT: 'accent',
  PRIMARY_TEXT: 'primary text',
  SECONDARY_TEXT: 'secondary text',
  INVERSED_PRIMARY_TEXT: 'inversed primary text',
  DISABLED_PRIMARY_TEXT: 'disabled primary text',
  INVERSED_SECONDARY_TEXT: 'inversed secondary text',
  DISABLED_SECONDARY_TEXT: 'disabled secondary text',
  HINT_TEXT: 'hint text',
  NORMAL_CONTROL: 'normal control',
  ACTIVATED_CONTROL: 'activated control',
  HIGHLIGHT_CONTROL: 'highlight control',
  BUTTON_NORMAL: 'button normal',
};

const propTypes = {
  palette: PropTypes.object.isRequired,
};


class Palette extends Component {
  render() {
    const { palette } = this.props;

    return (
      <div className="palette">
        <h3 className="palette__header">Palette</h3>

        {Object.keys(palette).map((alias) => (
          <PaletteTile key={alias} name={colorNames[alias]} colorCode={palette[alias]} alias={alias} />
        ))}
      </div>
    );
  }
}

Palette.propTypes = propTypes;

export default Palette;
