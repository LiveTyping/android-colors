import React, { Component, PropTypes } from 'react';

import './PaletteTile.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  colorCode: PropTypes.string.isRequired,
  alpha: PropTypes.string.isRequired,
  alias: PropTypes.string.isRequired,
  setPaletteColor: PropTypes.func.isRequired,
};


// @FIXME move validation out of component
function isValidColorCode(colorCode) {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i.test(colorCode);
}

function getRGBColor(hexcolor) {
  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);
  return [r, g, b];
}

// COPYRIGHT Brian Suda © 2010
function getContrastYIQColor(hexcolor) {
  const rgb = getRGBColor(hexcolor);
  const yiq = ((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000;
  return (yiq >= 128) ? 'black' : 'white';
}

function prepareColorForStyles(colorCode, alpha) { //FIXME Rename?
  const rgb = getRGBColor(colorCode.substring(1));
  return 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + alpha + ')';
}


class PaletteTile extends Component {
  componentWillMount() {
    this.state = {
      color: this.props.colorCode.substring(1),
      alpha: parseInt(parseFloat(this.props.alpha) * 100, 10) + '%',
    };
  }

  handleInputBlur() {
    const { color } = this.state;
    const { colorCode, alias } = this.props;

    const newColorCode = `#${color}`.toUpperCase();

    if (newColorCode === colorCode || !isValidColorCode(newColorCode)) {
      this.setState({ color: colorCode.substring(1) });
      return;
    }

    this.props.setPaletteColor(alias, newColorCode);
  }

  handleInputChange({ target }) {
    this.setState({ color: target.value });
  }

  render() {
    const { name, colorCode, alpha } = this.props;
    const styles = {
      tile: {
        backgroundColor: prepareColorForStyles(colorCode, alpha),
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
              value={this.state.color}
              onBlur={(evt) => this.handleInputBlur(evt)}
              onChange={(evt) => this.handleInputChange(evt)}
              ref={(input) => { this.inputRef = input; }}
            />
          </div>
          <div className={`tile__alpha tile_text-${contrastYIQColor}`}>{this.state.alpha}</div>
          <div className={`tile__name tile_text-${contrastYIQColor}`}>{name}</div>
        </div>
      </div>
    );
  }
}

PaletteTile.propTypes = propTypes;

export default PaletteTile;
