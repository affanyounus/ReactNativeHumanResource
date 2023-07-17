import React, {useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CommonLayout from '../common/CommonLayout';

const LoginComponent = (): React.JSX.Element => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [buttonLoader, setButtonLoader] = useState(false);

  const handleLogin = () => {
    // here do API tasks

    
    console.log('Login called');
    setButtonLoader(true);
    setTimeout(() => {
      setButtonLoader(false);
      navigation.navigate('Dashboard');
    }, 3000);

   
  };

  return (
    <View>
      <View style={{padding: 8, width: '100%', alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../images/logo-hris.png')}
            style={{
              resizeMode: 'contain',
              flex: 1,
              aspectRatio: 4,
              marginVertical: 30,
            }}
          />
        </View>

        <TextInput
          style={styles.TextInput}
          mode="outlined"
          label="Username"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.TextInput}
          mode="outlined"
          label="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Text>Forgot Password?</Text>
        <Button
          style={styles.Button}
          theme={{roundness: 2}}
          mode="contained-tonal"
          loading={buttonLoader}
          buttonColor={'orange'}
          onPress={handleLogin}>
          Login
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  TextInput: {
    width: '100%',
    marginBottom: 12,
  },
  Button: {
    marginVertical: 20,
  },
});


export default function Login(): React.JSX.Element {

  return (
    <CommonLayout>
      <LoginComponent />
    </CommonLayout>
  );

}
