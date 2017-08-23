import React, { PropTypes, Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Toggle from 'material-ui/Toggle';
import Checkbox from 'material-ui/Checkbox';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';
import AppBar from 'material-ui/AppBar';
import Slider from 'material-ui/Slider';

import StatusBar from '../../mui-components/StatusBar';
import FlatButton from '../../mui-components/FlatButton';
import RaisedButton from '../../mui-components/RaisedButton';
import LinearProgress from '../../mui-components/LinearProgress';
import CircularProgress from '../../mui-components/CircularProgress';

import getMuiTheme from '../../lib/getMuiTheme';
import createCustomMuiTheme from '../../lib/createCustomMuiTheme';

import './ComponentView.css';

const propTypes = {
  palette: PropTypes.object.isRequired,
};

const styles = {
  leftPane: {
    borderRight: '1px solid #dbdbdb',
  },
  button: {
    margin: '5px 0',
    width: '100%',
  },
  fabWrapper: {
    marginTop: '4px',
    textAlign: 'right',
  },
  toggle: {
    margin: '4px 0',
  },
  checkbox: {
    margin: '4px 0',
  },
  radioButton: {
    margin: '4px 0',
  },
  slider: {
    marginTop: '14px',
    marginBottom: '14px',
  },
  textField: {
    width: '92%',
  },
};


class ComponentView extends Component {

  static renderButtons() {
    return (
      <div className="component-view__section">
        <h1 className="title">Buttons</h1>

        <h2 className="subtitle">Raised</h2>
        <div className="row">
          <div className="col-sm-6">
            <RaisedButton style={styles.button} label="Normal" />
            <RaisedButton style={styles.button} label="Disabled Normal" disabled />
          </div>
          <div className="col-sm-6">
            <RaisedButton style={styles.button} label="Colored" primary />
            <RaisedButton style={styles.button} label="Disabled Colored" primary disabled />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-offset-6 col-sm-6" style={styles.fabWrapper}>
            <FloatingActionButton><ContentAdd /></FloatingActionButton>
          </div>
        </div>

        <h2 className="subtitle">Flat</h2>
        <div className="row">
          <div className="col-sm-6">
            <FlatButton style={styles.button} label="Normal" />
            <FlatButton style={styles.button} label="Disabled Normal" disabled />
          </div>
          <div className="col-sm-6">
            <FlatButton style={styles.button} label="Colored" primary />
            <FlatButton style={styles.button} label="Disabled Colored" primary disabled />
          </div>
        </div>
      </div>
    );
  }

  static renderControls() {
    return (
      <div className="component-view__section" style={styles.controlsWrapper}>
        <h1 className="title">Controls</h1>

        <div className="row">
          <div className="col-sm-6">
            <h2 className="subtitle">Switch</h2>
            <div className="row">
              <div className="col-sm-4"><Toggle defaultToggled style={styles.toggle} /></div>
              <div className="col-sm-4"><Toggle defaultToggled disabled style={styles.toggle} /></div>
            </div>
            <div className="row">
              <div className="col-sm-4"><Toggle style={styles.toggle} /></div>
              <div className="col-sm-4"><Toggle disabled style={styles.toggle} /></div>
            </div>
          </div>

          <div className="col-sm-6">
            <h2 className="subtitle">Checkbox</h2>
            <div className="row">
              <div className="col-sm-2"><Checkbox defaultChecked style={styles.checkbox} /></div>
              <div className="col-sm-2"><Checkbox defaultChecked disabled style={styles.checkbox} /></div>
            </div>
            <div className="row">
              <div className="col-sm-2"><Checkbox style={styles.checkbox} /></div>
              <div className="col-sm-2"><Checkbox disabled style={styles.checkbox} /></div>
            </div>
          </div>

          <div className="col-sm-6">
            <h2 className="subtitle">RadioButton</h2>
            <div className="row">
              <div className="col-sm-2">
                <RadioButtonGroup name="foobarRadio" defaultSelected="foo">
                  <RadioButton value="foo" style={styles.radioButton} />
                  <RadioButton value="bar" style={styles.radioButton} />
                </RadioButtonGroup>
              </div>
              <div className="col-sm-2">
                <RadioButtonGroup name="foobarRadioDisabled" defaultSelected="foo">
                  <RadioButton disabled value="foo" style={styles.radioButton} />
                  <RadioButton disabled value="bar" style={styles.radioButton} />
                </RadioButtonGroup>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <h2 className="subtitle">Seekbar</h2>
            <Slider defaultValue={0.66} sliderStyle={styles.slider} />
            <Slider defaultValue={0.33} disabled sliderStyle={styles.slider} />
          </div>
        </div>
      </div>
    );
  }

  static renderProgressIndicators() {
    return (
      <div className="component-view__section">
        <h1 className="title">Progress indicators</h1>
        <div className="row">
          <div className="col-sm-6">
            <h2 className="subtitle">Indeterminate</h2>
            <LinearProgress mode="indeterminate" />
          </div>
          <div className="col-sm-6">
            <h2 className="subtitle">Determinate</h2>
            <LinearProgress mode="determinate" value={66} />
          </div>
          <div className="col-sm-12">
            <h2 className="subtitle">Round indeterminate</h2>
            <CircularProgress size={35} />
          </div>
        </div>
      </div>
    );
  }

  static renderTextFields() {
    return (
      <div className="component-view__section">
        <h1 className="title">Text</h1>
        <TextField
          hintText="Hint text"
          style={styles.textField}
        />
        <TextField
          defaultValue="Input text for a single line text field"
          floatingLabelText="Single-line input label"
          style={styles.textField}
        />
      </div>
    );
  }

  static renderUIFragments() {
    return (
      <div className="component-view__section">
        <h1 className="title">Statusbar, Navbar, Bottombar</h1>

        <h2 className="subtitle">Statusbar & Navbar</h2>
        <div>
          <StatusBar />
          <AppBar zDepth={0} title="Settings" />
        </div>

        <h2 className="subtitle">Bottombar</h2>
        <div>
          <BottomNavigation selectedIndex={2}>
            <BottomNavigationItem
              label="Assistant"
              icon={<FontIcon className="material-icons">assistant</FontIcon>}
              onTouchTap={() => {}}
            />
            <BottomNavigationItem
              label="Photos"
              icon={<FontIcon className="material-icons">photo</FontIcon>}
              onTouchTap={() => {}}
            />
            <BottomNavigationItem
              label="Albums"
              icon={<FontIcon className="material-icons">collections_bookmark</FontIcon>}
              onTouchTap={() => {}}
            />
          </BottomNavigation>
        </div>
      </div>
    );
  }

  static renderLeftPane() {
    return (
      <div className="col-sm-6" style={styles.leftPane}>
        {ComponentView.renderButtons()}
        {ComponentView.renderControls()}
        {ComponentView.renderProgressIndicators()}
      </div>
    );
  }

  static renderRightPane() {
    return (
      <div className="col-sm-6">
        {ComponentView.renderTextFields()}
        {ComponentView.renderUIFragments()}
      </div>
    );
  }

  render() {
    const theme = createCustomMuiTheme(this.props.palette);
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div className="component-view">
          <div className="row">
            {ComponentView.renderLeftPane()}
            {ComponentView.renderRightPane()}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

ComponentView.propTypes = propTypes;

export default ComponentView;
