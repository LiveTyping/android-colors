import React, { PropTypes } from 'react';

const propTypes = {
  onClose: PropTypes.func.isRequired,
};

const HeaderHelp = ({ onClose }) => (
  <div className="header__help header__help--hidden">
    <div className="header__help-text">
      Material Colors — инструмент для создания цветовых схем вашего Android-приложения и их проверки на
      соответствие принципам Android Material Design. С ним вы увидите, как будут выглядеть основные элементы
      интерфейса и как они связаны друг с другом.
    </div>
    <button className="header__help-close-btn" onClick={onClose}>
      <i className="header__help-close-btn-icon material-icons">close</i>
    </button>
  </div>
);

HeaderHelp.propTypes = propTypes;

export default HeaderHelp;
