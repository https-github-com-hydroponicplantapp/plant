import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function Dashboard() {
  // Here, you would fetch the data for the dashboard from an API or local storage
  const [waterLevel, setWaterLevel] = useState(50);
  const [nutrientLevel, setNutrientLevel] = useState(75);
  const [temperature, setTemperature] = useState(23);
  const [humidity, setHumidity] = useState(55);

  return (
    <ImageBackground style={styles.background} source={require('./assets/PickaPlant.jpg')}>
      <View style={styles.container}>
        <Text style={styles.title}>Hydroponic System Dashboard</Text>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Water Level:</Text>
          <Text style={styles.dataValue}>{waterLevel}%</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Nutrient Level:</Text>
          <Text style={styles.dataValue}>{nutrientLevel}%</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Temperature:</Text>
          <Text style={styles.dataValue}>{temperature}°C</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Humidity:</Text>
          <Text style={styles.dataValue}>{humidity}%</Text>
        </View>
      </View>
    </ImageBackground>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  dataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  dataLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },
  dataValue: {
    fontSize: 18,
  },
});
