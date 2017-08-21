import React from 'react';
import ltLogo from '../../images/lt-logo@2x.png';
import FacebookIcon from '../FacebookIcon/FacebookIcon';
import VkIcon from '../VkIcon/VkIcon';
import GitHubIcon from '../GitHubIcon/GitHubIcon';

const Footer = () => (
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
              <FacebookIcon />
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
              <VkIcon />
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
              <GitHubIcon />
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
);

export default Footer;
