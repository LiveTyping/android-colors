import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import CopyToClipboard from 'react-copy-to-clipboard';

import PaletteTile from '../../containers/PaletteTile';
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
  palette: PropTypes.objectOf(
    PropTypes.shape({
      color: PropTypes.string,
      alpha: PropTypes.number,
    })
  ).isRequired,
  onClickPaletteButton: PropTypes.func.isRequired,
  onClickCopyPaletteButton: PropTypes.func.isRequired,
  activePageURL: PropTypes.string.isRequired,
};

const Palette = ({ palette, onClickPaletteButton, onClickCopyPaletteButton, activePageURL }) => (
  <div className="palette">
    <h1 className="title palette__title">
      <span className="palette-title__item">Palette</span>
      <CopyToClipboard onCopy={onClickCopyPaletteButton} text={activePageURL}>
        <button
          className="palette-title__copy-button palette-title__item material-icons"
          aria-label="Copy Palette link to clipboard"
        >
          insert_link
        </button>
      </CopyToClipboard>
    </h1>

    <table className="table palette__table palette__table_with-head" style={{ margin: '0 0 25px 0' }}>
      <thead>
        <tr className="palette__table__tr">
          <th className="palette__table__th">Name</th>
          <th className="palette__table__th">Color</th>
          <th className="palette__table__th">Opacity</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(palette).map((alias) => (
          <PaletteTile
            key={alias}
            name={colorNames[alias]}
            colorCode={palette[alias].color}
            alpha={palette[alias].alpha}
            alias={alias}
          />
        ))}
      </tbody>
    </table>

    <RaisedButton label="Get Android color scheme" secondary onClick={onClickPaletteButton} />
  </div>
);

Palette.propTypes = propTypes;

export default Palette;
