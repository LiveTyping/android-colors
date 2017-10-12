import React from 'react';
import { PropTypes } from 'prop-types';
import Language from '../../services/Language';

const propTypes = {
  onClose: PropTypes.func.isRequired,
};

const HeaderHelp = ({ onClose }) => (
  <div className="header__help header__help--hidden">
    <div className="header__help-text">
      {Language().textHelp}
    </div>
    <button className="header__help-close-btn" onClick={onClose}>
      <i className="header__help-close-btn-icon material-icons">close</i>
    </button>
  </div>
);

HeaderHelp.propTypes = propTypes;

export default HeaderHelp;
