import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import CopyToClipboard from 'react-copy-to-clipboard';
import './Modal.css';

const propTypes = {
  content: PropTypes.shape.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

class Modal extends Component {
  componentWillMount() {
    this.setState({
      modal: true,
      currentText: this.props.content[0].content,
      selectedTab: this.props.content[0].name,
    });
  }

  changeTab(content, tabName) {
    this.setState({
      currentText: content,
      selectedTab: tabName,
    });
  }

  render() {
    const actions = [
      <CopyToClipboard text={this.state.currentText} onCopy={() => this.props.onClose(true)}>
        <RaisedButton label="Copy" labelColor="#fff" backgroundColor="#6c6cf3" style={{ marginRight: '20px' }} />
      </CopyToClipboard>,
      <RaisedButton label="Cancel" backgroundColor="#fff" onClick={() => this.props.onClose(false)} />,
    ];

    const tabs = this.props.content.map((tab) => {
      const selectedClass = tab.name === this.state.selectedTab ? 'modal__tab--selected' : '';
      return (
        <div
          key={tab.name}
          tabIndex={0}
          role="button"
          className={`modal__tab ${selectedClass}`}
          onClick={() => this.changeTab(tab.content, tab.name)}
        >
          {tab.name}
        </div>
      );
    });

    return (
      <div className="modal">
        <Dialog actions={actions} modal={this.state.modal} open={this.props.open}>
          <div className="modal__tabs">
            {tabs}
          </div>
          <pre>
            {this.state.currentText}
          </pre>
        </Dialog>
      </div>
    );
  }
}

Modal.propTypes = propTypes;

export default Modal;
