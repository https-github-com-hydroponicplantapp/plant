import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ImageBackground } from 'react-native';



const index = () => {
    const [gridIcons, setGridIcons] = useState([
        { id: 1, title: 'Dashboard 1' },
      ]);
    
    
      const handleAddIcon = () => {
        navigation.navigate('PlantSelectionScreen');
        const newIcon = { id: gridIcons.length + 1, title: `Dashboard ${gridIcons.length + 1}` };
        setGridIcons([...gridIcons, newIcon]);
        
      };
    
      const handleIconPress = (id) => {
        // Navigate to the dashboard with the given ID
        navigation.navigate('MainContainer', { screen: 'Main', params: { id } });
      };
    
      return (
        
          <View style={styles.container}>
            <Text style={styles.header}>Choose your Plot</Text>
            <View style={styles.grid}>
              {gridIcons.map((icon) => (
                <TouchableOpacity key={icon.id} style={styles.icon} onPress={() => handleIconPress(icon.id)}>
                  <Text>{icon.title}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity style={styles.icon} onPress={handleAddIcon}>
                <Text>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
       
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 375,
        marginBottom: 15,
      },
      grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      },
      icon: {
        width: 100,
        height: 100,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center',
      },
    });

export default index;