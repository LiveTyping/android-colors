import React from 'react';
import { PropTypes } from 'prop-types';
import Language from '../../services/Language';

import imgcolors from '../../images/colors.png';
import imgcolors2x from '../../images/colors@2x.png';

const propTypes = {
  onClose: PropTypes.func.isRequired,
};

const HeaderHelp = ({ onClose }) => (
  <div className="header__help header__help--hidden">
    <div className="header__help__wrapper">
      <div className="header__help-text">
        {Language().textHelp}
      </div>
      <div className="haeder__help__img_box">
        <img className="haeder__help__img_box-img" src={imgcolors} srcSet={`${imgcolors2x} 2x`} alt="Colors" />
      </div>
    </div>
    <button className="header__help-close-btn" onClick={onClose}>
      <i className="header__help-close-btn-icon material-icons">close</i>
    </button>
  </div>
);

HeaderHelp.propTypes = propTypes;

export default HeaderHelp;
