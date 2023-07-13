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
    background: '#F9FFFE',
    onSurface: "green",
		onSurfaceVariant: "grey",
    primaryContainer: "red",
		secondaryContainer: "#2E8B57",
		// tertiary: "purple",
		// tertiaryContainer: "dodgerblue",
		// surface: "green",
		// surfaceVariant: "yellow",
		// surfaceDisabled: "rgba(28, 27, 31, 0.12)",
		// error: "red",
		// errorContainer: "white",
		// onPrimary: "cyan",
		// onPrimaryContainer: "maroon",
		// onSecondary: "olive",
		// onSecondaryContainer: "green",
		// onTertiary: "FireBrick",
		// onTertiaryContainer: "GoldenRod",
		
		// onSurfaceDisabled: "Lime",
		// onError: "MediumTurquoise",
		// onErrorContainer: "PaleGreen",
		// onBackground: "PapayaWhip",
		// outline: "Salmon",
		// outlineVariant: "SandyBrown",
		// inverseSurface: "Tomato",
		// inverseOnSurface: "Teal",
		// inversePrimary: "SlateBlue",
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
