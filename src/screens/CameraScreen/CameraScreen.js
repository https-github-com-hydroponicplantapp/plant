import {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Camera, CameraType} from "expo-camera";

export default function CameraScreen({ navigation }) {
  const [type, setType] = useState(CameraType.back);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Camera  style={styles.camera} type={type} 
            />

        </View>
    );
}
const styles = StyleSheet.create({
  camera: {
    flex: 1,
  }
})
