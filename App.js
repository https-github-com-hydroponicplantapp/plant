import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Here, you would check the user's credentials and if they are valid, set setIsLoggedIn to true
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Here, you would clear the user's session and set setIsLoggedIn to false
    setIsLoggedIn(false);
  };

  const renderLogin = () => {
    return (
      <ImageBackground style={styles.background} source={require('./assets/straw2.jpg')}>
        <View style={styles.container}>
          <Text style={styles.title}>Hydroponic System</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
          <Button title="Login" onPress={handleLogin} />
        </View>
      </ImageBackground>
    );
  };

  const renderDashboard = () => {
    return (
      <ImageBackground style={styles.background} source={require('./assets/straw2.jpg')}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to Hydroponic System!</Text>
          <Button title="Logout" onPress={handleLogout} />
          {/* Here, you would render the dashboard components, such as water and nutrient levels, temperature, humidity, etc. */}
        </View>
      </ImageBackground>
    );
  };

  return isLoggedIn ? renderDashboard() : renderLogin();
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginVertical: 8,
    minWidth: 200,
    backgroundColor: 'white',
  },
});

