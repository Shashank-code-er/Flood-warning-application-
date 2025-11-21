import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{padding:20}}>
      <Text style={{fontSize:22}}>Flood Early Warning</Text>
      <Button title="Map" onPress={() => navigation.navigate('Map')} />
      <Button title="Alerts" onPress={() => navigation.navigate('Alerts')} />
      <Button title="SOS" onPress={() => navigation.navigate('SOS')} />
    </View>
  );
}
