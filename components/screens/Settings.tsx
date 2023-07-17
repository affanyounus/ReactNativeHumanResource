import { View } from 'react-native';
import React, { useState } from 'react';
import CommonLayout from '../common/CommonLayout';
import { Text, Switch, Divider } from 'react-native-paper';

const SettingsComponent = (): React.JSX.Element => {
  return (
    <View>
      <Text>This is Settings</Text>
    </View>
  );
}

const ThemeMode = (): React.JSX.Element => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={{width: '80%', alignSelf:'center',backgroundColor: '#cec4c2',padding: 20,borderRadius: 10,alignItems: 'center'}}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', //Centered vertically
        alignItems: 'center',
        marginBottom: 15,
      }}>
        <Text style={{ flex: 1}}>Dark Mode</Text>
        <Switch style={{ flex: 1 }} value={isSwitchOn} onValueChange={onToggleSwitch} />
        
      </View>
<Divider style={{width: '100%'}}   />
<View style={{ flexDirection: 'row', justifyContent: 'space-between', //Centered vertically
        alignItems: 'center',
        marginTop: 15,
      }}>
        <Text style={{ flex: 1}}>Dark Mode</Text>
        <Switch style={{ flex: 1 }} value={isSwitchOn} onValueChange={onToggleSwitch} />
        
      </View>
    </View>
  );
}

export default function Settings(): React.JSX.Element {

  return (
    <CommonLayout>
      <ThemeMode />
    </CommonLayout>
  );

}

