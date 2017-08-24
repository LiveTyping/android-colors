import React from 'react';
import { PropTypes } from 'prop-types';
import HeaderHelp from '../HeaderHelp/HeaderHelp';

const propTypes = {
  isVisibleHelp: PropTypes.bool.isRequired,
  onCloseHelp: PropTypes.func.isRequired,
};

const Header = ({ isVisibleHelp, onCloseHelp }) => {
  const helpBlock = isVisibleHelp ? <HeaderHelp onClose={onCloseHelp} /> : '';
  return (
    <div className="header">
      {helpBlock}
      <div className="appbar header__appbar">
        <div className="header__appbar-item">
          <h1 className="appbar__title">Material Colors</h1>
        </div>
        <div className="header__appbar-item">
          <div className="appbar__help">
            <i className="appbar__help-item appbar__help-item_icon material-icons">help_outline</i>
            <span className="appbar__help-item">Show Help</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = propTypes;

export default Header;
