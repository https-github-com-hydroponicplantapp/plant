import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './components/Dashboard'

const Stack = createStackNavigator();

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
      <ImageBackground style={styles.background} source={require('./components/assets/straw2.jpg')}>
        <View style={styles.container}>
          <Text style={styles.title1}>Welcome!</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
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
      <ImageBackground style={styles.background} source={require('./components/assets/PickaPlant.jpg')}>
        <View style={styles.container}>
          <Text style={styles.title2}>Welcome to Berry Berry!</Text>
          <Text style={styles.Plotpick}>Please pick a plot</Text>
          {/* Here, you would render the dashboard components, such as water and nutrient levels, temperature, humidity, etc. */}
          //<Button title="Logout" onPress={handleLogout} />
          <Button title="Login" onPress={handleLogin} />
        </View>
      </ImageBackground>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen name="Dashboard" component={Dashboard} />
        ) : (
          <Stack.Screen name="Next" component={renderLogin} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title1: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  title2: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 60,
  },
  Plotpick: {
    fontSize: 20,
    fontWeight: 'regular',
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'black',
    padding: 20,
    marginVertical: 8,
    //minHeight: 45,
    minWidth: 275,
    backgroundColor: 'white',
    fontSize: 15,
  },
});
