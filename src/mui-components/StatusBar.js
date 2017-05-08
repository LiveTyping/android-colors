import React, { Component, PropTypes } from 'react';

const propTypes = {
  date: PropTypes.object.isRequired,
};
const defaultProps = {
  date: new Date(),
};
const contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};


function getStyles(props, context) {
  const { statusBar } = context.muiTheme;

  return {
    root: {
      backgroundColor: statusBar.color,
      height: 24,
      textAlign: 'right',
    },
    dateLabel: {
      color: statusBar.labelColor,
      padding: '0px 8px 0 4px',
      fontSize: '14px',
      lineHeight: '24px',
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    icon: {
      color: statusBar.labelColor,
      fontSize: '18px',
      verticalAlign: 'middle',
    },
    batteryIcon: {
      color: statusBar.labelColor,
      fontSize: '18px',
      verticalAlign: 'middle',
      marginLeft: '2px',
    },
  };
}


class StatusBar extends Component {

  render() {
    const { date } = this.props;
    const styles = getStyles(this.props, this.context, this.state);

    const dateToDisplay = date || new Date();
    const hours = dateToDisplay.getHours() < 10 ? `0${dateToDisplay.getHours()}` : dateToDisplay.getHours();
    const minutes = dateToDisplay.getMinutes() < 10 ? `0${dateToDisplay.getMinutes()}` : dateToDisplay.getMinutes();

    return (
      <div style={styles.root}>
        <i className="material-icons" style={styles.icon}>network_wifi</i>
        <i className="material-icons" style={styles.icon}>network_cell</i>
        <i className="material-icons" style={styles.batteryIcon}>battery_std</i>
        <span style={styles.dateLabel}>{hours}:{minutes}</span>
      </div>
    );
  }
}

StatusBar.propTypes = propTypes;
StatusBar.defaultProps = defaultProps;
StatusBar.contextTypes = contextTypes;

export default StatusBar;
