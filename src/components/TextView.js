import React from 'react';

import TextField from '../mui-components/TextField';
import Text from './Text';
import LinkText from './LinkText';

const styles = {
  textComponentsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    margin: '8px 0',
  },
};

const SimpleTextsView = () => (
  <div style={styles.textComponentsContainer}>
    <Text style={styles.text}> Simple text </Text>
    <Text disabled style={styles.text}> Disabled text </Text>
    <LinkText style={styles.text}> Link text </LinkText>
  </div>
);

const TextFieldsView = () => (
  <div style={styles.textComponentsContainer}>
    <TextField
      hintText="Hint text"
    />
    <TextField
      defaultValue="Input text for a single line text field"
      floatingLabelText="Single-line input label"
    />
    <TextField
      defaultValue="Disable edit text"
      disabled
    />
    <TextField
      defaultValue="password"
      type="password"
      errorText="Username or Password is incorrect"
    />
  </div>
);

const TextView = () => (
  <div>
    <SimpleTextsView />
    <TextFieldsView />
  </div>
);

export default TextView;
