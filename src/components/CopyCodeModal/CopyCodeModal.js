import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import CopyToClipboard from 'react-copy-to-clipboard';

import './CopyCodeModal.css';

const propTypes = {
  isVisibleCodeModal: PropTypes.bool.isRequired,
  closePaletteCodeModal: PropTypes.func.isRequired,
  showSnackBarWithText: PropTypes.func.isRequired,
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      content: PropTypes.string,
    })
  ).isRequired,
};

class Modal extends Component {
  componentWillMount() {
    this.setState({
      currentText: this.props.contents[0].content,
      selectedTab: this.props.contents[0].name,
    });
  }

  onClose(copied = false) {
    const { closePaletteCodeModal, showSnackBarWithText } = this.props;

    if (copied) {
      showSnackBarWithText('Code saved in buffer');
    }

    closePaletteCodeModal();
  }

  onTabChange(content, tabName) {
    this.setState({
      currentText: content,
      selectedTab: tabName,
    });
  }

  render() {
    const { contents, isVisibleCodeModal } = this.props;
    const { selectedTab, currentText } = this.state;

    const actions = [
      <FlatButton label="Cancel" secondary onClick={() => this.onClose()} />,
      <CopyToClipboard text={currentText} onCopy={() => this.onClose(true)}>
        <FlatButton label="Copy" parimary />
      </CopyToClipboard>,
    ];

    const tabs = contents.map(({ name, content }) => {
      const selectedClass = name === selectedTab ? 'modal__tab--selected' : '';
      return (
        <div
          key={name}
          tabIndex={0}
          role="button"
          className={`modal__tab ${selectedClass}`}
          onClick={() => this.onTabChange(content, name)}
        >
          {name}
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
          <div className="modal__tabs">
            {tabs}
          </div>
          <pre>
            {currentText}
          </pre>
        </Dialog>
      </div>
    );
  }
}

Modal.propTypes = propTypes;

export default Modal;
