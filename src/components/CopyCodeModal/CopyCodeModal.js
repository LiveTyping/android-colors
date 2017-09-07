import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import CopyToClipboard from 'react-copy-to-clipboard';
import classNames from 'classnames';

import './CopyCodeModal.css';

const propTypes = {
  isVisibleCodeModal: PropTypes.bool.isRequired,
  closePaletteCodeModal: PropTypes.func.isRequired,
  showSnackBarWithText: PropTypes.func.isRequired,
  contents: PropTypes.objectOf(PropTypes.string).isRequired,
};

class Modal extends Component {
  componentWillMount() {
    this.setState({ selectedTab: Object.keys(this.props.contents)[0] });
  }

  onClose(copied = false) {
    const { closePaletteCodeModal, showSnackBarWithText } = this.props;

    if (copied) {
      showSnackBarWithText('Code saved in buffer');
    }

    closePaletteCodeModal();
  }

  onTabChange(selectedTab) {
    this.setState({ selectedTab });
  }

  render() {
    const { contents, isVisibleCodeModal } = this.props;
    const { selectedTab } = this.state;
    const content = contents[selectedTab];

    const actions = [
      <FlatButton label="Cancel" secondary onClick={() => this.onClose()} />,
      <CopyToClipboard text={content} onCopy={() => this.onClose(true)}>
        <FlatButton label="Copy" />
      </CopyToClipboard>,
    ];

    const tabs = Object.keys(contents).map((tabName) => {
      const className = {
        modal__tab: true,
        'modal__tab--selected': tabName === selectedTab,
      };
      return (
        <div
          key={tabName}
          tabIndex={0}
          role="button"
          className={classNames(className)}
          onClick={() => this.onTabChange(tabName)}
        >
          {tabName}
        </div>
      );
    });

    return (
      <div className="modal">
        <Dialog
          actions={actions}
          modal
          open={isVisibleCodeModal}
          autoScrollBodyContent
          contentStyle={{ width: '80%', maxWidth: 'none' }}
        >
          <div className="modal__tabs">{tabs}</div>
          <pre>{content}</pre>
        </Dialog>
      </div>
    );
  }
}

Modal.propTypes = propTypes;

export default Modal;
