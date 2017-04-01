import React, { Component, PropTypes } from 'react';

import './PaletteTile.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  colorCode: PropTypes.string.isRequired,
  alias: PropTypes.string.isRequired,
  setPaletteColor: PropTypes.func.isRequired,
};


// @FIXME move validation out of component
function isValidColorCode(colorCode) {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i.test(colorCode);
}

// COPYRIGHT Brian Suda © 2010
function getContrastYIQColor(hexcolor) {
  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? 'black' : 'white';
}


class PaletteTile extends Component {
  componentWillMount() {
    this.state = {
      value: this.props.colorCode.substring(1),
    };
  }

  handleInputBlur() {
    const { value } = this.state;
    const { colorCode, alias } = this.props;

    const newColorCode = `#${value}`.toUpperCase();

    if (newColorCode === colorCode || !isValidColorCode(newColorCode)) {
      this.setState({ value: colorCode.substring(1) });
      return;
    }

    this.props.setPaletteColor(alias, newColorCode);
  }

  handleInputChange({ target }) {
    this.setState({ value: target.value });
  }

  render() {
    const { name, colorCode } = this.props;
    const styles = {
      tile: {
        backgroundColor: colorCode,
      },
    };
    const contrastYIQColor = getContrastYIQColor(colorCode.substring(1));

    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div className="tile" style={styles.tile} onClick={() => this.inputRef.focus()}>
        <div className="tile__inner">
          <div className="tile__color-code">
            <input
              className={`tile__color-code-input tile_text-${contrastYIQColor}`}
              type="text"
              value={this.state.value}
              onBlur={(evt) => this.handleInputBlur(evt)}
              onChange={(evt) => this.handleInputChange(evt)}
              ref={(input) => { this.inputRef = input; }}
            />
          </div>
          <div className={`tile__name tile_text-${contrastYIQColor}`}>{name}</div>
        </div>
      </div>
    );
  }
}

PaletteTile.propTypes = propTypes;

export default PaletteTile;
