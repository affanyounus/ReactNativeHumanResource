import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

export default function Login() {

    const [username, SetUsername] = useState('');
    const [password, SetPassword] = useState('');

    const handleLogin = () => {

        // here do API tasks

        console.log("Login called");

    };

    return (
        <View style={styles.container}>
            <View style={{ width: "100%", padding: 8 }}>
                <TextInput style={styles.TextInput} mode="outlined" label="Username" value={username} onChangeText={text => SetUsername(text)} />
                <TextInput style={styles.TextInput} mode="outlined" label="Password" secureTextEntry={true} value={password} onChangeText={text => SetUsername(text)} />
                <Button loading={true} style={styles.Button} theme={{roundness: 2}} mode="contained" onPress={handleLogin}>Login</Button>
            </View>
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fcfcfc"
    },
    TextInput: {
        width: "100%",
        marginBottom: 12 
    },
    Button: {
        marginVertical: 20
    }
});