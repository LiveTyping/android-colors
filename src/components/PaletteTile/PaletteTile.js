import React, { Component, PropTypes } from 'react';

import './PaletteTile.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  colorCode: PropTypes.string.isRequired,
  alpha: PropTypes.number.isRequired,
  alias: PropTypes.string.isRequired,
  setPaletteColor: PropTypes.func.isRequired,
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
    this.state = {
      colorValue: this.props.colorCode.substring(1),
      alphaValue: parseInt(this.props.alpha * 100, 10),
    };
  }

  handleInputBlur() {
    const { colorValue } = this.state;
    const { colorCode, alias } = this.props;

    const newColorCode = `#${colorValue}`.toUpperCase();

    if (newColorCode === colorCode || !isValidColorCode(newColorCode)) {
      this.setState({ colorValue: colorCode.substring(1) });
      return;
    }

    this.props.setPaletteColor(alias, newColorCode);
  }

  handleInputChange({ target }) {
    this.setState({ colorValue: target.value });
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

    return (
      <tr className="palette__table__tr">
        <td className={cellClassName} style={styles.cell}>{name}</td>
        <td className={cellClassName} style={styles.cell}>#{colorValue}</td>
        <td className={cellClassName} style={styles.cell}>{alphaValue}%</td>
      </tr>
    );

    // return (
    //   // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    //   <div className="tile" style={styles.tile} onClick={() => this.inputRef.focus()}>
    //     <div className="tile__inner">
    //       <div className="tile__color-code">
    //         <input
    //           className={`tile__color-code-input tile_text-${contrastYIQColor}`}
    //           type="text"
    //           value={colorValue}
    //           onBlur={(evt) => this.handleInputBlur(evt)}
    //           onChange={(evt) => this.handleInputChange(evt)}
    //           ref={(input) => { this.inputRef = input; }}
    //         />
    //       </div>
    //       <div className={`tile__alpha tile_text-${contrastYIQColor}`}>{alphaValue}%</div>
    //       <div className={`tile__name tile_text-${contrastYIQColor}`}>{name}</div>
    //     </div>
    //   </div>
    // );
  }
}

PaletteTile.propTypes = propTypes;

export default PaletteTile;
