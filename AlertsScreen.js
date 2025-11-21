import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default function AlertsScreen() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    axios.get('http://10.0.2.2:4000/alerts')
      .then(r => setAlerts(r.data.alerts || []))
      .catch(e => console.log(e));
  }, []);

  return (
    <View style={{padding:20}}>
      <Text style={{fontSize:20}}>Active Alerts</Text>
      {alerts.map(a => <Text key={a.alert_id}>{a.level}: {a.message}</Text>)}
    </View>
  );
}
