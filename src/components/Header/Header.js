import React from 'react';
import { PropTypes } from 'prop-types';
import HeaderHelp from '../HeaderHelp/HeaderHelp';

const propTypes = {
  isVisibleHelp: PropTypes.bool.isRequired,
  onCloseHelp: PropTypes.func.isRequired,
  onShowHelp: PropTypes.func.isRequired,
};

const Header = ({ isVisibleHelp, onCloseHelp, onShowHelp }) => {
  const helpBlock = isVisibleHelp ? <HeaderHelp onClose={onCloseHelp} /> : null;
  const helpButton = isVisibleHelp ? null : (
    <div className="header__appbar-item">
      <button className="header__appbar__btn-help" onClick={onShowHelp}>
        <i className="appbar__help-item appbar__help-item_icon material-icons">help_outline</i>
      </button>
    </div>
  );

  return (
    <div className="header">
      {helpBlock}
      <div className="appbar header__appbar">
        <div className="header__appbar-item">
          <h1 className="appbar__title">Material Colors</h1>
        </div>
        {helpButton}
      </div>
    </div>
  );
};

Header.propTypes = propTypes;

export default Header;
