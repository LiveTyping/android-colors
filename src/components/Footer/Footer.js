import React from 'react';
import ltLogo from '../../images/lt-logo@2x.png';

const Footer = () => {
  return(
    <div className="footer">
      <div className="footer__inner">
        <div className="share">
          <h4 className="share__header">Share this with your friends</h4>
          <ul className="share__list">
            <li className="share__list-item">
              <a
                className="social-link"
                href="https://www.facebook.com/sharer/sharer.php?u=https://livetyping.github.io/android-colors/"
                target="_blank"
                rel="noopener noreferrer"
                alt="Share on Facebook"
              >
                <div aria-hidden="true">
                  <svg className="social-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      // eslint-disable-next-line max-len
                      d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"
                    />
                  </svg>
                </div>
              </a>
            </li>
            <li className="share__list-item">
              <a
                className="social-link"
                href="https://vk.com/share.php?url=https://livetyping.github.io/android-colors/"
                target="_blank"
                rel="noopener noreferrer"
                alt="Share on VK"
              >
                <div aria-hidden="true">
                  <svg className="social-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      // eslint-disable-next-line max-len
                      d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z"
                    />
                  </svg>
                </div>
              </a>
            </li>
            <li className="share__list-item">
              <a
                className="social-link"
                href="https://github.com/LiveTyping/android-colors"
                target="_blank"
                rel="noopener noreferrer"
                alt="Star on GitHub"
              >
                <div aria-hidden="true">
                  <svg className="social-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path
                      // eslint-disable-next-line max-len
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                    />
                  </svg>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="credit">
          <div className="credit-item">
            <a className="lt-link" href="https://livetyping.com" target="_blank" rel="noopener noreferrer">
              <span className="lt-link__text">Made by</span>
              <img className="lt-link__image" src={ltLogo} alt="Live Typing" width="115px" />
            </a>
          </div>
          <div className="credit-item">
            <span className="credit-item__text">© 2017</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;