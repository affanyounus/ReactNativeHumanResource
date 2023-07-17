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
    primary: 'orange',
    accent: '#ACE1AF',
    secondary: 'dodgerblue',
    background: '#f5f5f5',
    onSurface: "#3c3c3c",
		onSurfaceVariant: "grey",
    primaryContainer: "red",
		secondaryContainer: "orange",
    // inversePrimary: "SlateBlue",
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
    shadow: "orange",
		scrim: "yellow",
		backdrop: "red",
    elevation: {
			level0: "transparent",
			level1: "purple",
			level2: "#fff",
			level3: "teal",
			level4: "dodgerblue",
			level5: "brown"
		}
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
