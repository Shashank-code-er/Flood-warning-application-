import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default function SosScreen() {
  return (
    <View style={{padding:20}}>
      <Text>SOS Emergency</Text>
      <Button title="Send SOS (demo)" onPress={() => Alert.alert("SOS sent (demo)")} />
    </View>
  );
}
