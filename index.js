/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 8,
  mode: 'adaptive',
  colors: {
    ...DefaultTheme.colors,
    primary: '#018749',
    accent: '#ACE1AF',
    secondary: '#ADFF2F',
  },
};

export default function Main() {
  console.log('Default theme');
  console.log(JSON.stringify(DefaultTheme));

  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
