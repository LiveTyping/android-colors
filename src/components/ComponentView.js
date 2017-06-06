import React, {PropTypes} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Toggle from 'material-ui/Toggle';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Slider from 'material-ui/Slider';
import Text from './Text';
import CircularProgressBar from '../mui-components/CircularProgress';
import LinearProgressBar from '../mui-components/LinearProgress';

import StatusBar from '../mui-components/StatusBar';
import FlatButton from '../mui-components/FlatButton';
import RaisedButton from '../mui-components/RaisedButton';

import getMuiTheme from '../lib/getMuiTheme';
import createCustomMuiTheme from '../lib/createCustomMuiTheme';
import Divider  from 'material-ui/Divider';

import './ComponentView.css';
import TextView from './TextView';
import styles from './Styles'

const propTypes = {
  palette: PropTypes.object.isRequired,
};

const ComponentView = (props) => {
  const theme = createCustomMuiTheme(props.palette);

  return (
    <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
      <div className="component-view">
        <div className="row">
          <div className="col-sm-6">

            {/*Buttons*/}
            <div className="row">
              <div className="col-sm-4">
                <Text style={styles.titleText}>Buttons</Text>
                <Text style={styles.subTitleText}>Raised</Text>
              </div>
            </div>
            {/*raised buttons*/}
            <div style={styles.buttonsWrapper}>
              <div>
                <RaisedButton style={styles.button} label="Simple"/>
                <RaisedButton style={styles.button} label="Colored" primary/>
              </div>
              <div>
                <RaisedButton style={styles.button} label="Disable raised" disabled/>
                <RaisedButton style={styles.button} label="Disable Colored" primary disabled/>
              </div>
            </div>
            <div className="row" style={styles.fabWrapper}>
              <FloatingActionButton style={styles.fab}><ContentAdd /></FloatingActionButton>
            </div>

            {/*flat buttons*/}
            <div className="row">
              <div className="col-sm-4">
                <Text style={styles.subTitleText}>Flat</Text>
              </div>

            </div>
            <div style={styles.flatButtonsWrapper}>
              <div>
                <FlatButton style={styles.button} label="Simple"/>
                <FlatButton style={styles.button} label="Colored" primary/>
              </div>
              <div>
                <FlatButton style={styles.button} label="Disable" disabled/>
                <FlatButton style={styles.button} label="Disable Colored" primary disabled/>
              </div>
            </div>
            <Divider/>
            {/*Controls*/}
            <div className="row">
              <div className="col-sm-4">
                <Text style={styles.titleText}>Controls</Text>
              </div>
            </div>

            <div className="row">
              {/*switch*/}
              <div className="col-sm-6">

                <div className="row">

                  <div className="col-sm-4">
                    <Text style={styles.subTitleText}>Switch</Text>
                  </div>

                </div>
                <div className="col-sm-4">
                  <Toggle defaultToggled style={styles.toggle}/>
                  <Toggle style={styles.toggle}/>
                </div>
                <div className="col-sm-4">
                  <Toggle defaultToggled style={styles.toggle} disabled/>
                  <Toggle style={styles.toggle} disabled/>
                </div>
              </div>

              {/*checkbox*/}
              <div className="col-sm-6">
                <div className="row">
                  <div className="col-sm-4">
                    <Text style={styles.subTitleText}>CheckBox</Text>
                  </div>
                </div>
                <div className="col-sm-4">
                  <Checkbox style={styles.checkbox}/>
                  <Checkbox defaultChecked style={styles.checkbox}/>
                </div>
                <div className="col-sm-4">
                  <Checkbox style={styles.checkbox} disabled/>
                  <Checkbox defaultChecked style={styles.checkbox} disabled/>
                </div>
              </div>
            </div>

            <div className="row">
              {/*radiobutton*/}
              <div className="col-sm-6">
                <div className="row">
                  <div className="col-sm-4">
                    <Text style={styles.subTitleText}>RadioButton</Text>
                  </div>
                </div>
                <div className="col-sm-4">
                  <RadioButtonGroup name="foobarRadio" defaultSelected="foo">
                    <RadioButton value="foo" style={styles.radioButton}/>
                    <RadioButton value="bar" style={styles.radioButton}/>
                  </RadioButtonGroup>
                </div>
                <div className="col-sm-4">
                  <RadioButtonGroup name="foobarRadio" defaultSelected="foo">
                    <RadioButton value="foo" style={styles.radioButton} disabled/>
                    <RadioButton value="bar" style={styles.radioButton} disabled/>
                  </RadioButtonGroup>
                </div>
              </div>

              {/*Seekbar*/}
              <div className="col-sm-6">
                <div className="row">
                  <div className="col-sm-4">
                    <Text style={styles.subTitleText}>SeekBar</Text>
                  </div>
                </div>
                <div style={styles.slidersWrapper}>
                  <Slider style={styles.slider} defaultValue={0.33}/>
                  <Slider style={styles.slider} defaultValue={0.66} disabled/>
                </div>
              </div>
            </div>

            {/*ToggleButton*/}
            <div className="row">
              <div className="col-sm-4">
                <Text style={styles.subTitleText}>Toggle button</Text>
              </div>
            </div>

            {/*RatingBar*/}
            <div className="row">
              <div className="col-sm-4">
                <Text style={styles.subTitleText}>RatingBar</Text>
              </div>

            </div>
            <div className="row">
              <Divider/>
              {/*ProgresBar*/}
              <div className="col-sm-4">
                <Text style={styles.titleText}>ProgressBar</Text>
              </div>
            </div>


            <div className="row">
              {/*Indeterminate*/}
              <div className="col-sm-6">

                <div className="row">

                  <div className="col-sm-4">
                    <Text style={styles.subTitleText}>Indeterminate</Text>
                  </div>

                </div>
                <LinearProgressBar mode='indeterminate'/>
              </div>
              {/*Determinate*/}
              <div className="col-sm-6">
                <div className="row">

                  <div className="col-sm-4">
                    <Text style={styles.subTitleText}>Determinate</Text>
                  </div>

                </div>
                <LinearProgressBar mode='determinate'

                                   value="50"/>
              </div>
            </div>

            <div className="row">
              {/*Buffered*/}
              <div className="col-sm-6">

                <div className="row">

                  <div className="col-sm-4">
                    <Text style={styles.subTitleText}>Buffered</Text>
                  </div>

                </div>
                <LinearProgressBar mode='determinate' value="50"/>
              </div>
              {/*Circular*/}
              <div className="col-sm-6">
                <div className="row">

                  <div className="col-sm-4">
                    <Text style={styles.subTitleText}>Circular</Text>
                  </div>
                </div>
                <CircularProgressBar mode='indeterminate'/>
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
                    onTouchTap={() => {
                    }}
                  />
                  <BottomNavigationItem
                    label="Photos"
                    icon={(
                      <FontIcon className="material-icons">photo</FontIcon>
                    )}
                    onTouchTap={() => {
                    }}
                  />
                  <BottomNavigationItem
                    label="Albums"
                    icon={(
                      <FontIcon className="material-icons">collections_bookmark</FontIcon>
                    )}
                    onTouchTap={() => {
                    }}
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
