import React, { PropTypes } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Toggle from 'material-ui/Toggle';
import Checkbox from 'material-ui/Checkbox';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Slider from 'material-ui/Slider';

import StatusBar from '../mui-components/StatusBar';
import FlatButton from '../mui-components/FlatButton';
import RaisedButton from '../mui-components/RaisedButton';

import getMuiTheme from '../lib/getMuiTheme';
import createCustomMuiTheme from '../lib/createCustomMuiTheme';

import './ComponentView.css';
import TextView from './TextView';

const propTypes = {
  palette: PropTypes.object.isRequired,
};

const styles = {
  toggle: {
    margin: '12px 0',
  },
  radioButton: {
    margin: '12px 0 12px 8px',
  },
  checkbox: {
    margin: '12px 0',
  },
  fabWrapper: {
    textAlign: 'right',
  },
  fab: {
    margin: 12,
  },
  buttonsWrapper: {
    marginTop: '20px',
    textAlign: 'center',
  },
  button: {
    margin: '5px 30px',
  },
  appBarWrapper: {
    marginTop: '35px',
  },
  bottomNavWrapper: {
    marginTop: '35px',
  },
  slidersWrapper: {
    marginTop: '20px',
    width: '45%',
  },
  textComponentsWrapper: {
    margin: '15px 0',
  },
};


const ComponentView = (props) => {
  const theme = createCustomMuiTheme(props.palette);

  return (
    <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
      <div className="component-view">
        <div className="row">
          <div className="col-sm-6">
            <div className="row">

              <div className="col-sm-6">
                <div className="row">
                  <div className="col-sm-4">
                    <Toggle style={styles.toggle} />
                    <Toggle defaultToggled style={styles.toggle} />
                  </div>
                  <div className="col-sm-4">
                    <RadioButtonGroup name="foobarRadio" defaultSelected="foo">
                      <RadioButton
                        value="foo"
                        style={styles.radioButton}
                      />
                      <RadioButton
                        value="bar"
                        style={styles.radioButton}
                      />
                    </RadioButtonGroup>
                  </div>
                  <div className="col-sm-4">
                    <Checkbox style={styles.checkbox} />
                    <Checkbox defaultChecked style={styles.checkbox} />
                  </div>
                </div>
              </div>

              <div className="col-sm-6" style={styles.fabWrapper}>
                <FloatingActionButton style={styles.fab}><ContentAdd /></FloatingActionButton>
              </div>
            </div>

            <div style={styles.slidersWrapper}>
              <Slider defaultValue={0.33} />
              <Slider defaultValue={0.66} disabled />
            </div>

            <div style={styles.buttonsWrapper}>
              <div>
                <FlatButton style={styles.button} label="Normal" />
                <FlatButton style={styles.button} label="Disabled" disabled />
              </div>
              <div>
                <FlatButton style={styles.button} label="Normal" primary />
                <FlatButton style={styles.button} label="Disabled" primary disabled />
              </div>
              <div>
                <RaisedButton style={styles.button} label="Normal" primary />
                <RaisedButton style={styles.button} label="Disabled" primary disabled />
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div style={styles.appBarWrapper}>
              <Paper zDepth={3} rounded={false}>
                <StatusBar />
                <AppBar
                  zDepth={0}
                  title="Settings"
                />
              </Paper>
            </div>

            <div style={styles.bottomNavWrapper}>
              <Paper zDepth={3} rounded={false}>
                <BottomNavigation selectedIndex={2}>
                  <BottomNavigationItem
                    label="Assistant"
                    icon={(
                      <FontIcon className="material-icons">assistant</FontIcon>
                    )}
                    onTouchTap={() => {}}
                  />
                  <BottomNavigationItem
                    label="Photos"
                    icon={(
                      <FontIcon className="material-icons">photo</FontIcon>
                    )}
                    onTouchTap={() => {}}
                  />
                  <BottomNavigationItem
                    label="Albums"
                    icon={(
                      <FontIcon className="material-icons">collections_bookmark</FontIcon>
                    )}
                    onTouchTap={() => {}}
                  />
                </BottomNavigation>
              </Paper>
            </div>

            <div style={styles.textComponentsWrapper}>
              <TextView />
            </div>

          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

ComponentView.propTypes = propTypes;

export default ComponentView;
