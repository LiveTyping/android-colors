import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export default class ModalTab extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
  }

  static defaultProps = {
    selected: false,
  }

  onClick = () => {
    const { onClick, name } = this.props;
    onClick(name);
  }

  render() {
    const { name, selected } = this.props;
    const className = {
      modal__tab: true,
      'modal__tab--selected': selected,
    };
    return (
      <div
        tabIndex={0}
        role="button"
        className={classNames(className)}
        onClick={this.onClick}
      >
        {name}
      </div>
    );
  }
}
