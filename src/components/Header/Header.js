import React from 'react';

const Header = () => (
  <div className="header">
    <div className="header__help">
      <div className="header__help-text">
        Material Colors — инструмент для создания цветовых схем вашего Android-приложения и их проверки на
        соответствие принципам Android Material Design. С ним вы увидите, как будут выглядеть основные элементы
        интерфейса и как они связаны друг с другом.
      </div>
      <button className="header__help-close-btn">
        <i className="header__help-close-btn-icon material-icons">close</i>
      </button>
    </div>
    <div className="appbar header__appbar">
      <div className="header__appbar-item">
        <h1 className="appbar__title">Material Colors</h1>
      </div>
      <div className="header__appbar-item">
        <a
          href="http://telegra.ph/android-colors-08-17"
          target="_blank"
          rel="noopener noreferrer"
          className="appbar__help"
        >
          <i className="appbar__help-item appbar__help-item_icon material-icons">help_outline</i>
          <span className="appbar__help-item">Show Help</span>
        </a>
      </div>
    </div>
  </div>
);

export default Header;
