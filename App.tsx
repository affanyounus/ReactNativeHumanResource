/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import Login from './components/screens/Login';
import {NavigationContainer, ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackHeaderProps, NativeStackNavigationProp, createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './components/screens/Dashboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './components/screens/Profile';
import Project from './components/screens/Project';
import Miscellaneous from './components/screens/Miscellaneous';
import { BottomNavigation, Appbar, Menu } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import Settings from './components/screens/Settings';

const Stack = createNativeStackNavigator();

// const Tab = createBottomTabNavigator(); 

type CustomAppBarProps = {
navigation: string
};

const CustomAppBar = ({ navigation, route, options, back,}: NativeStackHeaderProps)=>{



  const title = getHeaderTitle(options, route.name);

  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  // const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  useEffect(()=>{

    console.log('Custom AppBar rendered');

  }, []);

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      {back && route.name == 'Dashboard' ? (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action
              icon="dots-vertical"
              onPress={openMenu}
            />
          }>
          <Menu.Item
            onPress={() => {
              console.log('Option 1 was pressed');
            }}
            title="Option 1"
          />
          <Menu.Item
            onPress={() => {
              console.log('Option 2 was pressed');
            }}
            title="Option 2"
          />
          <Menu.Item
            onPress={() => {
              console.log('Option 3 was pressed');
              setVisible(false);
              navigation.navigate('Settings');


            }}
            title="Settings"
            
          />
        </Menu>
      ) : null}
    </Appbar.Header>
  );
}

const DashboardScreens = ()=>{

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'profile', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'project', title: 'Albums', focusedIcon: 'album' },
    { key: 'miscellaneous', title: 'Recents', focusedIcon: 'history' },
  ]);



  const renderScene = BottomNavigation.SceneMap({
    profile: Profile,
    project: Project,
    miscellaneous: Miscellaneous
  });

  return (
    <BottomNavigation navigationState={{index, routes}} onIndexChange={setIndex} renderScene={renderScene} />
    // <Tab.Navigator screenOptions={{headerShown: false}}>
    //   <Tab.Screen name='Profile' component={Profile}  />
    //   <Tab.Screen name='Project' component={Project} />
    //   <Tab.Screen name='Miscellaneous' component={Miscellaneous} />
    // </Tab.Navigator>

  )
}

const App = (): React.JSX.Element => {

  const configAnimation = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{
         header: (props) => <CustomAppBar {...props} /> }} >
         <Stack.Screen name="Settings" component={Settings} options={{transitionSpec: {
      open: configAnimation,
      close: configAnimation,
    }}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}   />
        <Stack.Screen name="Dashboard" component={DashboardScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// function DetailsScreen(): React.JSX.Element {
//   return (
//     <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

export default App;
