/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { MD3LightTheme, DefaultTheme, PaperProvider } from 'react-native-paper';


const theme = {
    ...DefaultTheme,
    roundness: 8,
    mode: 'adaptive',
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      accent: '#7b7b7b',
      secondary: '#f1c40f',
    },
    
  };

export default function Main() {

    console.log("Default theme");
    console.log(JSON.stringify(DefaultTheme));

    return (
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    );
  }
  
  AppRegistry.registerComponent(appName, () => Main);