import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './PaletteTile.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  colorCode: PropTypes.string.isRequired,
  alpha: PropTypes.number.isRequired,
  alias: PropTypes.string.isRequired,
  changePaletteColor: PropTypes.func.isRequired,
};


// @FIXME move validation out of component
function isValidColorCode(colorCode) {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i.test(colorCode);
}

/**
 * @param {string} hexcolor - hex code of color
 * @returns {array} array of three numbers that define the color in rgb model
 */
function getRGBColor(hexcolor) {
  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);
  return [r, g, b];
}

// COPYRIGHT Brian Suda © 2010
function getContrastYIQ(hexcolor) {
  const rgb = getRGBColor(hexcolor);
  return ((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000;
}

/**
 * @param {string} colorCode - hex code of color
 * @param {number} alpha - opacity of color
 * @returns {string} that specifies styles using rgba() css function
 */
function convertToRGBAColor(colorCode, alpha) {
  const rgb = getRGBColor(colorCode.substring(1));
  return `rgba(${rgb.join(',')}, ${alpha})`;
}


class PaletteTile extends Component {
  componentWillMount() {
    this.setState({
      colorValue: this.props.colorCode.substring(1),
      alphaValue: parseInt(this.props.alpha * 100, 10),
      editableColorRow: false,
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      colorValue: nextProps.colorCode.substring(1),
    });
  }

  componentDidUpdate() {
    this.input.focus();
  }

  handleInputBlur() {
    const { colorValue } = this.state;
    const { colorCode, alias } = this.props;

    const newColorCode = `#${colorValue}`.toUpperCase();

    this.setState({ editableColorRow: false });

    if (newColorCode === colorCode || !isValidColorCode(newColorCode)) {
      this.setState({ colorValue: colorCode.substring(1) });
      return;
    }

    this.props.changePaletteColor(alias, newColorCode);
  }

  handleInputChange({ target }) {
    this.setState({ colorValue: target.value });
  }

  handleKeyPress(key) {
    return key === 'Enter' ? this.handleInputBlur() : null;
  }

  handleClick() {
    this.setState({ editableColorRow: true });
  }

  render() {
    const { name, colorCode, alpha } = this.props;
    const { colorValue, alphaValue } = this.state;

    const colorContrastYIQ = getContrastYIQ(colorCode.substring(1));
    const cellTextColorName = colorContrastYIQ >= 128 ? 'black' : 'white';
    const cellClassName = `palette__table__td palette__table__td_text-${cellTextColorName}`;
    const styles = {
      cell: {
        backgroundColor: convertToRGBAColor(colorCode, alpha),
        borderColor: colorContrastYIQ < 245 && alphaValue > 5 ? 'transparent' : null,
      },
    };
    const { editableColorRow } = this.state;
    const colorRowStyles = {
      inputStyle: { display: editableColorRow ? 'block' : 'none' },
      spanStyle: { display: editableColorRow ? 'none' : 'block' },
    };

    return (
      <tr
        className="palette__table__tr"
        role="button"
        onClick={() => this.handleClick()}
        onBlur={() => this.handleInputBlur()}
        onKeyPress={({ key }) => this.handleKeyPress(key)}
      >
        <td className={cellClassName} style={styles.cell}>{name}</td>
        <td className={cellClassName} style={styles.cell}>
          <input
            className="tile__input"
            type="text"
            value={colorValue}
            onChange={(e) => this.handleInputChange(e)}
            style={colorRowStyles.inputStyle}
            ref={(input) => { this.input = input; }}
          />
          <span style={colorRowStyles.spanStyle}>#{colorValue}</span>
        </td>
        <td className={cellClassName} style={styles.cell}>{alphaValue}%</td>
      </tr>
    );
  }
}

PaletteTile.propTypes = propTypes;

export default PaletteTile;
